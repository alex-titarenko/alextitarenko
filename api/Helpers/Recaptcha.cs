using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace TAlex.API.Helpers
{
    public static class Recaptcha
    {
        public static readonly string UserResponse = "g-recaptcha-response";

        private static readonly string SiteVerificationUrl = "https://www.google.com/recaptcha/api/siteverify";


        public static RecaptchaResult VerifySite(string secret, string userResponseToken, string userIp = null)
        {
            if (string.IsNullOrWhiteSpace(secret))
            {
                throw new ArgumentException($"{nameof(secret)} is null or empty", nameof(secret));
            }

            if (string.IsNullOrWhiteSpace(userResponseToken))
            {
                return new RecaptchaResult { Success = false, ErrorCodes = new List<string> { "ReCaptcha was not validated." } };
            }

            var verificationRequest = HttpWebRequest.Create(SiteVerificationUrl);
            verificationRequest.Method = "POST";
            verificationRequest.ContentType = "application/x-www-form-urlencoded";

            string postData = $"secret={secret}&response={userResponseToken}";
            if (!string.IsNullOrEmpty(userIp))
            {
                postData += $"&remoteip={userIp}";
            }


            byte[] byteArray = Encoding.UTF8.GetBytes(postData);

            verificationRequest.ContentLength = byteArray.Length;
            using (var requestStream = verificationRequest.GetRequestStream())
            {
                requestStream.Write(byteArray, 0, byteArray.Length);
            }

            // Response
            var response = (HttpWebResponse)verificationRequest.GetResponse();
            var datastream = response.GetResponseStream();

            string sourceCode = "";
            using (var reader = new StreamReader(datastream))
            {
                sourceCode = reader.ReadToEnd();
                var result = JsonConvert.DeserializeObject<RecaptchaResult>(sourceCode);

                return result;
            }
        }

        public static RecaptchaResult VerifySite(string secret, HttpRequest request)
        {
            return VerifySite(secret, request.Form[UserResponse], request.HttpContext.Connection.RemoteIpAddress.ToString());
        }


        public class RecaptchaResult
        {
            private static readonly Dictionary<string, string> Errors = new Dictionary<string, string>
            {
                { "missing-input-secret", "The secret parameter is missing." },
                { "invalid-input-secret", "The secret parameter is invalid or malformed." },
                { "missing-input-response", "ReCaptcha was not validated." },
                { "invalid-input-response", "ReCaptcha value is invalid. Plase try again." },
                { "bad-request", "The request is invalid or malformed." }
            };


            public RecaptchaResult()
            {
                ErrorCodes = new List<string>();
            }


            [JsonProperty(PropertyName = "success")]
            public bool Success { get; set; }

            /// <summary>
            /// Timestamp of the challenge load.
            /// </summary>
            [JsonProperty(PropertyName = "challenge_ts")]
            [JsonConverter(typeof(IsoDateTimeConverter))]
            public DateTime Challenge { get; set; }

            /// <summary>
            /// The hostname of the site where the reCAPTCHA was solved.
            /// </summary>
            [JsonProperty(PropertyName = "hostname")]
            public string Hostname { get; set; }

            [JsonProperty(PropertyName = "error-codes")]
            public IList<string> ErrorCodes { get; set; }

            public IList<string> GetErrors()
            {
                return ErrorCodes.Select(x => Errors.ContainsKey(x) ? Errors[x] : x).ToList();
            }
        }
    }
}
