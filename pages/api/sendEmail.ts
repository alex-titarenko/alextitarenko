import { VercelRequest, VercelResponse } from '@vercel/node'
import fetch from 'isomorphic-fetch'
import sgMail from '@sendgrid/mail'
import appConfig from 'app.config.json'


export default async function (req: VercelRequest, res: VercelResponse) {
  console.log('SendEmail function is processing the request');

  console.log('Verifying reCAPTCHA');
  const isValidRecaptcha = await verifyRecaptchaAsync(req.body.recaptchaToken);
  if (!isValidRecaptcha) {
    throw new Error('reCAPTCHA verification failed');
  }

  console.log('reCAPTCHA validation succeeded');
  console.debug('Sending email');

  const sendGridApiKey = process.env.SENDGRID_API_KEY;
  if (!sendGridApiKey) {
    console.error('Environment variable SENDGRID_API_KEY is not defined');
    throw new Error('An internal error occurred');
  }

  sgMail.setApiKey(sendGridApiKey);
  await sgMail.send({
    from: { name: 'Automated Email', email: appConfig.emails.replyTo },
    replyTo: { name: req.body.name, email: req.body.from },
    to: appConfig.emails.contact,
    subject: req.body.subject,
    html: req.body.message
  });

  res.status(200).json({ message: 'Message has been sent' });
}

async function verifyRecaptchaAsync(recaptchaToken: string): Promise<boolean> {
  const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!recaptchaSecretKey) {
    console.error('Environment variable RECAPTCHA_SECRET_KEY is not defined');
    throw new Error('An internal error occurred');
  }

  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptchaToken}`;
  const response = await fetch(url, { method: 'post' });
  const responseObj = await response.json();
  return responseObj.success as boolean;
}
