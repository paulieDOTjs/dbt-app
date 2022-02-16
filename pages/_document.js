/* eslint-disable react/no-unknown-property */
import Document, { Head, Html, Main, NextScript } from "next/document";

import { Header } from "../components/header/Header";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Charm:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Header />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
