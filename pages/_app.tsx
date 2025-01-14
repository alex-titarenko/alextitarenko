import '../styles/site.css';

// This default export is required in a new `pages/_app.js` file.
import { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const style = document.getElementById('server-side-styles');

    if (style) {
      style.parentNode?.removeChild(style);
    }
  }, []);

  return <Component {...pageProps} />
}
