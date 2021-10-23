import '../../shared/styles/globals.scss'
import Head from "next/head";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head><title>Mononext -- App</title></Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
