import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import Layout from '../components/Layout'
import appConfig from '../app.config.json'

type ContactFormState = {
  name: string,
  from: string,
  subject: string,
  message: string,
  mailSending: boolean,
  mailSent: boolean,
  error: string
}

class ContactPage extends React.Component<{}, ContactFormState> {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      from: '',
      subject: '',
      message: '',
      mailSending: false,
      mailSent: false,
      error: ''
    }
  }

  private submitForm(event: any) {
    event.preventDefault();

    // reCAPTCHA v3 validation
    grecaptcha.ready(() => {
      this.setState({ mailSending: true });

      grecaptcha
        .execute(appConfig.recaptcha.siteKey, { action: 'contactForm' })
        .then(token => {
          const requestData = {
            name: this.state.name,
            from: this.state.from,
            to: 'contact',
            subject: this.state.subject,
            message: this.state.message,
            recaptchaToken: token
          };

          axios.post(appConfig.api.sendEmail, requestData)
            .then(result => {
              this.resetForm();
              this.setState({ mailSent: true });
            })
            .catch(error => {
              this.setState({ mailSent: false, error: 'Something went wrong. Please try again.' });
            })
            .finally(() => {
              this.setState({ mailSending: false });
            });
        });
    });
  }

  resetForm() {
    this.setState({
      name: '',
      from: '',
      subject: '',
      message: '',
      error: ''
    });
  }

  public render() {
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
                      <span className='fa fa-facebook social-btn'></span> { this.getDisplayUrl(appConfig.social.facebook) }
                    </a>
                  </span>
                </p>
                <p>
                  <span className="field-value">
                    <a href={appConfig.social.linkedIn} target="_blank" rel="noopener">
                      <span className='fa fa-linkedin social-btn'></span> { this.getDisplayUrl(appConfig.social.linkedIn) }
                    </a>
                  </span>
                </p>
                <p>
                  <span className="field-value">
                    <a href={appConfig.social.gitHub} target="_blank" rel="noopener">
                      <span className='fa fa-github-alt social-btn'></span> { this.getDisplayUrl(appConfig.social.gitHub) }
                    </a>
                  </span>
                </p>
                <p>
                  <span className="field-value">
                    <a href={appConfig.social.twitter} target="_blank" rel="noopener">
                      <span className='fa fa-twitter social-btn'></span> { this.getDisplayUrl(appConfig.social.twitter) }
                    </a>
                  </span>
                </p>
              </div>

              <div className="col-md-8">
                { this.state.mailSent &&
                  <div className="alert alert-success" role="alert">Thank you for contacting us.</div>
                }

                { this.state.error &&
                  <div className="alert alert-danger" role="alert">{ this.state.error }</div>
                }

                <h3 className="visible-xs-block visible-sm-block">Send me an email</h3>

                <form method="POST" action="#" id="contactform" name="contactForm" onSubmit={ e => this.submitForm(e) }>
                  <div className="form-group">
                    <label htmlFor="Name">Your name *:</label>
                    <input type="text" name="Name" className="form-control" required
                      value={ this.state.name }
                      onChange={ e => this.setState({ name: e.target.value }) } />
                    </div>

                  <div className="form-group">
                    <label htmlFor="Email">Your email address *:</label>
                    <input type="email" name="Email" className="form-control" required
                      value={ this.state.from }
                      onChange={ e => this.setState({ from: e.target.value }) } />
                  </div>

                  <div className="form-group">
                    <label htmlFor="Subject">Subject of your message:</label>
                    <input type="text" name="Subject" className="form-control"
                      value={ this.state.subject }
                      onChange={ e => this.setState({ subject: e.target.value }) } />
                  </div>

                  <div className="form-group">
                    <label htmlFor="Message">Your message *:</label>
                    <textarea className="form-control" name="Message" cols={50} rows={10} required
                      value={ this.state.message }
                      onChange={ e => this.setState({ message: e.target.value }) }>
                    </textarea>

                    <small className="small recaptcha-branding">
                      This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.
                    </small>
                  </div>

                  <div className="form-group">
                    <div className="g-recaptcha" data-sitekey="@SiteSettings.RecaptchaSiteKey"></div>
                  </div>

                  <button className="btn btn-primary" type="submit" tabIndex={5}
                    disabled={ this.state.mailSending }>
                    { this.state.mailSending ? (
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

  private getDisplayUrl(url: string) {
    return url
      .replace('https://www.', '')
      .replace('http://wwww.', '')
      .replace('https://', '')
      .replace('http://', '');
  }
}

export default ContactPage
