import "../styles/globals.css";
import "../styles/variables.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  <Head>
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width"
    />
    <meta name="theme-color" content="#072a4d" />
    <title>Awesome Posts</title>
  </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;
