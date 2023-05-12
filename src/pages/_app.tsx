import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
const excon = localFont({
  src: '../../public/fonts/Excon-Variable.woff2',
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
