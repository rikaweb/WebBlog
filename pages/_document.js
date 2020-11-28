import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="https://unpkg.com/popper.js@1/dist/umd/popper.min.js"></script>
          <script src="https://unpkg.com/tippy.js@4"></script>
        
        </body>
      </Html>
    )
  }
}
