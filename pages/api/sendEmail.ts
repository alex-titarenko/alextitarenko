import { NowRequest, NowResponse } from '@now/node'
import fetch from 'isomorphic-fetch'
import sgMail from '@sendgrid/mail'
import appConfig from '../../app.config.json'


export default async function (req: NowRequest, res: NowResponse) {
  console.log('SendEmail function is processing a request');

  if (await verifyRecaptchaAsync(process.env.RECAPTCHA_SECRET_KEY, req.body.recaptchaToken)) {
    console.log('reCAPTCHA validation succeeded');
    console.debug('Sending email');

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
