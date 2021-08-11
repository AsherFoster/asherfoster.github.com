import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import '../lib/sentry';

export default class MyDocument extends Document {
  public render() {
    return (
      <html lang='en-NZ'>
        <Head>
          {/* Simple Analytics tracking code */}
          <script async defer src='https://cdn.simpleanalytics.io/hello.js' />
          <noscript><img src='https://api.simpleanalytics.io/hello.gif' alt='' /></noscript>
          <meta name='viewport' content='width=device-width, initial-scale=1'/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </html>
    );
  }
}
