import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          {/* fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,400i,600,700"
            rel="stylesheet"
          />
          <meta
            key="viewport"
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
