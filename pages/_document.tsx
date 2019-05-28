import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import {GA_TRACKING_ID} from '../lib/gtag';
import '../lib/sentry';

export default class MyDocument extends Document {
  public render() {
    return (
      <html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              `
            }}
          />
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
