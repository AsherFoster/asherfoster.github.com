import Document, {
  Html, Head, Main, NextScript
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#333333" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet" />
          {/* Simple Analytics tracking code */}
          <script async defer src="https://cdn.simpleanalytics.io/hello.js" />
          <noscript><img src="https://api.simpleanalytics.io/hello.gif" alt="" /></noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
