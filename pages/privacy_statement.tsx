import Layout from '@components/Layout'


export default function PrivacyStatementPage() {
  return (
    <Layout
      title="Privacy Statement"
      description="Privacy statement page"
      pageId="">
      <div className="jumbotron page-header">
        <div className="container">
          <h1>Privacy Statement <i className="fa fa-lock"></i></h1>
          <p>We respect your privacy</p>
        </div>
      </div>

      <div className="container">
        <section id="content">
          <p>
            This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website/applications.
          </p>

          <p>
            The product-specific details sections provide additional information relevant to particular products (websites, apps, software).
          </p>

          <h3>Personal data we collect</h3>
          <p>
            We collects data to operate effectively and provide you the best experiences with our products.
            We get some of it by recording how you interact with our products by, for example, using technologies like cookies, and receiving error reports or usage data from software running on your device.
          </p>

          <h4>Do we use 'cookies'?</h4>

          <p>Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, cookies allow us, among other things, to store your preferences and settings; enable you to sign-in. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>

          <h4>We use cookies to:</h4>
          <ul>
            <li>Understand and save user's preferences for future visits.</li>
          </ul>
          <p>
            You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.
          </p>
          <p>
            If you turn cookies off, some features will be disabled. It won't affect the user's experience that make your site experience more efficient and may not function properly.
          </p>

          <h3>How we use your information</h3>
          <p>
            We may use information that we receive to:
          <ul>
              <li>help you efficiently access your information after you sign in</li>
              <li>remember information so you will not have to re-enter it during your visit or the next time you visit the Service</li>
            </ul>
          </p>

          <h3>Third-party disclosure</h3>
          <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.</p>

          <h3>Third-party links</h3>
          <p>We do not include or offer third-party products or services on our website/applications.</p>

          <h3>Product-specific details:</h3>
          <h4>Web Apps</h4>
          <p>
            This product uses WebView control inside application which might store your credentials/user data (as cookies) during login to web sites, also it might use your geolocation to provide you better user experience.
          </p>
          <p>
            We don't use this information by our own and don't transfer outside application.
          </p>
        </section>
      </div>
    </Layout>
  )
}
