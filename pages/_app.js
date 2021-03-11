import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/variables.css";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>Awesome Posts | Home</title>
        <link
          rel="icon"
          href="https://avatars.dicebear.com/v2/avataaars/{{seven}}.svg?options[mood][]=happy"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="theme-color" content="#072a4d" />
      </Head>
      <div>
        <Component {...pageProps} />;
      </div>
    </React.Fragment>
  );
}

export default MyApp;
