import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="th">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="Demo Live Chat" />
          <meta name="keywords" content="Live Chat,LiveChat for Customer Support" />
          <meta name="author" content="Sorot Charoensinchai" />
          <meta name="theme-color" content="#317EFB" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: "body{font-family: 'Sarabun', sans-serif;}",
            }}
          />
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-4Q6EEEJ132" strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
          </Script>
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
