import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'

declare global {
  interface Window{
    kakao: any;
  }
}

class MyDocument extends Document {
  static async getInitialProps(ctx:DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ebf473a007c57bce062553ffd49970f2"></script>
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
