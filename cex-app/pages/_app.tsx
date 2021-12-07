import '../styles/index.scss';
import type { AppProps } from 'next/app';
import { useFont } from 'hooks/UseFont';

function MyApp({ Component, pageProps }: AppProps) {
  useFont();

  return <Component {...pageProps} />;
}

export default MyApp;
