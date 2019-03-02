import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

const { CDN_ORIGIN } = process.env;

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            key="viewport"
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="apple-itunes-app" content="app-id=971830624" />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          <link
            rel="shortcut icon"
            type="image/png"
            href={`${CDN_ORIGIN}/favicon.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${CDN_ORIGIN}/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${CDN_ORIGIN}/favicon-16x16.png`}
            sizes="16x16"
          />
          <link rel="manifest" href={`${CDN_ORIGIN}/manifest.json`} />
          <link
            rel="search"
            type="application/opensearchdescription+xml"
            title="CuriosityStream"
            href={`${CDN_ORIGIN}/opensearch.xml`}
          />
          {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fbbd4c" /> */}
          <meta name="theme-color" content="#161E37" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
