import "../styles/globals.scss";
import NavBar from "../components/NavBarComponent";
import { Fragment } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
