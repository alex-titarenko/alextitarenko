import { useState } from 'react'
import Head from 'next/head'
import axios from 'axios'
import Layout from '@components/Layout'
import appConfig from '@root/app.config.json'

export default function ContactPage() {
  const [name, setName] = useState('');
  const [from, setFrom] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [mailSending, setMailSending] = useState(false);
  const [mailSent, setMailSent] = useState(false);
  const [error, setError] = useState('');

  function submitForm(event: any) {
    event.preventDefault();

    // reCAPTCHA v3 validation
    grecaptcha.ready(() => {
      setMailSending(true);

      grecaptcha
        .execute(appConfig.recaptcha.siteKey, { action: 'contactForm' })
        .then(token => {
          const requestData = {
            name: name,
            from: from,
            to: 'contact',
            subject: subject,
            message: message,
            recaptchaToken: token
          };

          axios.post(appConfig.api.sendEmail, requestData)
            .then(result => {
              resetForm();
              setMailSent(true);
            })
            .catch(error => {
              setMailSent(false);
              setError('Something went wrong. Please try again.');
            })
            .finally(() => {
              setMailSending(false);
            });
        });
    });
  }

  function resetForm() {
    setName('');
    setFrom('');
    setSubject('');
    setMessage('');
    setError('');
  }

  function getDisplayUrl(url: string) {
    return url
      .replace('https://www.', '')
      .replace('http://wwww.', '')
      .replace('https://', '')
      .replace('http://', '');
  }

  return (
    <Layout
      title="Contact Me"
      description="How to get in touch with me."
      pageId="company">
      <Head>
        <script src={ `https://www.google.com/recaptcha/api.js?render=${appConfig.recaptcha.siteKey}` }></script>
      </Head>

      <div className="jumbotron page-header">
        <div className="container">
          <h1>Сontact <i className="fa fa-envelope-o"></i></h1>
          <p>Get in touch with me</p>
        </div>
      </div>

      <div className="container">
        <section id="content">
          <h3>You can contact me using the contact form. Alternatively, you can use one of the links below</h3>
          <div className="row contact-container">
            <div className="col-md-4 contact-filds">
              <p>
                <span className="field-value">
                  <a target="_blank" rel="noopener" href={`mailto:${appConfig.emails.contact}`}>
                    <span className="fa fa-envelope social-btn"></span> {appConfig.emails.contact.replace("@", " /at/ ")}
                  </a>
                </span>
              </p>
              <p>
                <span className="field-value">
                  <a href={appConfig.social.facebook} target="_blank" rel="noopener">
                    <span className='fa fa-facebook social-btn'></span> { getDisplayUrl(appConfig.social.facebook) }
                  </a>
                </span>
              </p>
              <p>
                <span className="field-value">
                  <a href={appConfig.social.linkedIn} target="_blank" rel="noopener">
                    <span className='fa fa-linkedin social-btn'></span> { getDisplayUrl(appConfig.social.linkedIn) }
                  </a>
                </span>
              </p>
              <p>
                <span className="field-value">
                  <a href={appConfig.social.gitHub} target="_blank" rel="noopener">
                    <span className='fa fa-github-alt social-btn'></span> { getDisplayUrl(appConfig.social.gitHub) }
                  </a>
                </span>
              </p>
              <p>
                <span className="field-value">
                  <a href={appConfig.social.twitter} target="_blank" rel="noopener">
                    <span className='fa fa-twitter social-btn'></span> { getDisplayUrl(appConfig.social.twitter) }
                  </a>
                </span>
              </p>
            </div>

            <div className="col-md-8">
              { mailSent &&
                <div className="alert alert-success" role="alert">Thank you for contacting us.</div>
              }

              { error &&
                <div className="alert alert-danger" role="alert">{ error }</div>
              }

              <h3 className="visible-xs-block visible-sm-block">Send me an email</h3>

              <form method="POST" action="#" id="contactform" name="contactForm" onSubmit={ e => submitForm(e) }>
                <div className="form-group">
                  <label htmlFor="Name">Your name *:</label>
                  <input type="text" name="Name" className="form-control" required
                    value={ name }
                    onChange={ e => setName(e.target.value) } />
                  </div>

                <div className="form-group">
                  <label htmlFor="Email">Your email address *:</label>
                  <input type="email" name="Email" className="form-control" required
                    value={ from }
                    onChange={ e => setFrom(e.target.value) } />
                </div>

                <div className="form-group">
                  <label htmlFor="Subject">Subject of your message:</label>
                  <input type="text" name="Subject" className="form-control"
                    value={ subject }
                    onChange={ e => setSubject(e.target.value) } />
                </div>

                <div className="form-group">
                  <label htmlFor="Message">Your message *:</label>
                  <textarea className="form-control" name="Message" cols={50} rows={10} required
                    value={ message }
                    onChange={ e => setMessage(e.target.value) }>
                  </textarea>

                  <small className="small recaptcha-branding">
                    This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.
                  </small>
                </div>

                <button className="btn btn-primary" type="submit" tabIndex={5}
                  disabled={ mailSending }>
                  { mailSending ? (
                    <div>
                      <i className="fa fa-circle-o-notch fa-spin"></i>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div>Send</div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
