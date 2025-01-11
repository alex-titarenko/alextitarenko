import '../styles/site.css';

// This default export is required in a new `pages/_app.js` file.
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
