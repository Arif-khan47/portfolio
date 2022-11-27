import '../styles/globals.css'
import { AppProps } from 'next/app'
import ScrollToTop from '../components/ScrollUp';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <ScrollToTop/>
  <Component {...pageProps} />
    </>
  )
}
