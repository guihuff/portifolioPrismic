import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <title>Portifólio Guilherme</title>
          <meta name="description" content="Portifólio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;700;900&display=swap" rel="stylesheet"></link>
          <link rel="icon" href="/favicon.ico" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
  
}
