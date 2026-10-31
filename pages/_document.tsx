import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import {
  JssProvider,
  SheetsRegistry,
  createGenerateId
} from 'react-jss'

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
          {/* data-domains keeps local development out of the numbers. */}
          <script
            defer
            src={appConfig.umami.scriptUrl}
            data-website-id={appConfig.umami.websiteId}
            data-domains={new URL(appConfig.canonicalBaseUrl).hostname}></script>

          <meta name="author" content={ appConfig.brandName } />
          <meta name="copyright" content={ `© ${ new Date().getFullYear() } ${ appConfig.brandName }` } />
          <meta name="audience" content="all" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
