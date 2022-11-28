import '../styles/globals.css'
import { AppProps } from 'next/app'
import ScrollToTop from '../components/ScrollUp';
import '../styles/globals.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 100,
      once: false,
      duration: 1500
    });
  }, []);
  return (
    <>
    <ScrollToTop/>
  <Component {...pageProps} />
    </>
  )
}
