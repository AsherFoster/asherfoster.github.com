import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import Router from 'next/router';
import {GA_TRACKING_ID, pageview} from '../lib/gtag';

Router.events.on('routeChangeComplete', (url: string) => pageview(url));

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
          <title>Asher Foster</title>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </html>
    );
  }
}
