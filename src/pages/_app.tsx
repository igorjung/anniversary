/* eslint-disable @next/next/no-page-custom-font */
import type { AppProps } from 'next/app'

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/custom.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Grey+Qo&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
        <title>Eu te amo S2</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp