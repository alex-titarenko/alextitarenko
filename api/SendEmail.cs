using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using TAlex.API.Helpers;

namespace TAlex.API
{
    public static class SendEmail
    {
        private const string ReCaptchaSecretKey = "ReCaptchaSecretKey";

        [FunctionName("SendEmail")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = null)] HttpRequest req,
            [SendGrid(ApiKey = "SendGridApiKey")] IAsyncCollector<SendGridMessage> messageCollector,
            ILogger log,
            ExecutionContext context)
        {
            log.LogInformation("SendEmail function is processing a request");

            var config = new ConfigurationBuilder()
                .SetBasePath(context.FunctionAppDirectory)
                .AddJsonFile("local.settings.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables()
                .Build();

            try
            {
                log.LogInformation("Reading request data");
                string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
                log.LogInformation($"Request body: {requestBody}");
                var sendRequest = JsonConvert.DeserializeObject<SendEmailRequest>(requestBody);

                log.LogInformation("Validating reCAPTCHA response");
                var recaptchaResponse = Recaptcha.VerifySite(config[ReCaptchaSecretKey], sendRequest.RecaptchaToken);
                if (!recaptchaResponse.Success)
                {
                    throw new InvalidOperationException("reCAPTCHA validation failed");
                }

                log.LogInformation("reCAPTCHA validation succeeded");

                var message = new SendGridMessage();
                message.From = new EmailAddress(sendRequest.From, sendRequest.Name);
                message.AddTo(sendRequest.GetToEmail());
                message.SetSubject(sendRequest.Subject);
                message.AddContent("text/html", sendRequest.Message);

                log.LogInformation("Sending email");
                await messageCollector.AddAsync(message);

                return new OkObjectResult(new { message = "Message has been sent" });
            }
            catch (Exception exc)
            {
                log.LogError(exc, "Error while sending email");
                return new BadRequestObjectResult(new { error = exc.Message });
            }
        }

        public class SendEmailRequest
        {
            private static readonly IDictionary<string, string> EmailsMap = new Dictionary<string, string>
            {
                { "contact", "contact@alextitarenko.me" },
            };

            public string Name {get; set; }
            public string From { get; set; }
            public string To { get; set; }
            public string Subject { get; set; }
            public string Message { get; set; }

            public string RecaptchaToken { get; set; }

            public string GetToEmail()
            {
                if (EmailsMap.TryGetValue(this.To, out string toEmail))
                {
                    return toEmail;
                }
                throw new ArgumentException($"{this.To} is not supported as sender property.");
            }
        }
    }
}
