import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { JssProvider, SheetsRegistry, createGenerateId } from 'react-jss'

import { JSX } from 'react'
import appConfig from 'app.config.json'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const registry = new SheetsRegistry()
    const generateId = createGenerateId()
    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => (
          <JssProvider registry={registry} generateId={generateId}>
            <App {...props} />
          </JssProvider>
        ),
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </>
      ),
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en-us">
        <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${appConfig.google.analyticsId}`}></script>
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${appConfig.google.analyticsId}');
            `
          }} />

          <meta name="author" content={ appConfig.brandName } />
          <meta name="copyright" content={ `© ${ new Date().getFullYear() } ${ appConfig.brandName }` } />
          <meta name="audience" content="all" />

          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

          {/* <link
            href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
            rel="stylesheet"
            type="text/css"
            integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
            crossOrigin="anonymous"
          /> */}
          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossOrigin="anonymous"
          />
          <link href="//fonts.googleapis.com/css?family=Open Sans:400,700" rel="stylesheet" type="text/css"></link>

          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossOrigin="anonymous"
            defer
          ></script>
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
            integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd"
            crossOrigin="anonymous"
            defer
          ></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
