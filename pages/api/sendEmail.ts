import { NowRequest, NowResponse } from '@now/node'
import fetch from 'isomorphic-fetch'
import sgMail from '@sendgrid/mail'
import appConfig from '../../app.config.json'


export default async function (req: NowRequest, res: NowResponse) {
  console.log('SendEmail function is processing the request');

  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.error('Environment variable RECAPTCHA_SECRET_KEY is not defined');
    res.status(500);
    return;
  }
  if (!process.env.SENDGRID_API_KEY) {
    console.error('Environment variable SENDGRID_API_KEY is not defined');
    res.status(500);
    return;
  }

  if (await verifyRecaptchaAsync(process.env.RECAPTCHA_SECRET_KEY, req.body.recaptchaToken)) {
    console.log('reCAPTCHA validation succeeded');
    console.debug('Sending email');

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    await sgMail.send({
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
