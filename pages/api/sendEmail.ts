import { NowRequest, NowResponse } from '@now/node'
import fetch from 'isomorphic-fetch'
import sgMail from '@sendgrid/mail'


export default async function (req: NowRequest, res: NowResponse) {
  const secret_key = process.env.SECRET_KEY;
  const token = req.body.token;

  res.json({ name: 'John', email: 'john@example.com' })
}

async function verifyRecaptchaAsync(recaptchaSecretKey: string, recaptchaToken: string) {

  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptchaToken}`;
  const response = await fetch(url, { method: 'post' });
}
