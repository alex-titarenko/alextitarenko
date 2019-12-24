import { NowRequest, NowResponse } from '@now/node'
import fetch from 'isomorphic-fetch'
import sgMail from '@sendgrid/mail'
import appConfig from '../../app.config.json'


export default async function (req: NowRequest, res: NowResponse) {
  console.log('SendEmail function is processing the request');

  if (!process.env.recaptcha_secret_key) {
    console.error('Environment variable recaptcha_secret_key is not defined');
    res.status(500);
    return;
  }
  if (!process.env.sendgrid_api_key) {
    console.error('Environment variable sendgrid_api_key is not defined');
    res.status(500);
    return;
  }

  if (await verifyRecaptchaAsync(process.env.recaptcha_secret_key, req.body.recaptchaToken)) {
    console.log('reCAPTCHA validation succeeded');
    console.debug('Sending email');

    sgMail.setApiKey(process.env.sendgrid_api_key);

    sgMail.send({
      from: { name: req.body.name, email: req.body.from },
      to: appConfig.emails.contact,
      subject: req.body.subject,
      html: req.body.message
    });

    res.json({ message: 'Message has been sent' });
  }
  else {
    throw new Error('reCAPTCHA validation failed');
  }
}

async function verifyRecaptchaAsync(recaptchaSecretKey: string, recaptchaToken: string) {
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptchaToken}`;
  const response = await fetch(url, { method: 'post' });
  const responseObj = await response.json();
  return responseObj.success;
}
