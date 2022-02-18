import ProgressBar from 'nextjs-progressbar'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'api/apollo'
import { CartProvider } from 'hooks/useCart'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <Head>
            <title>React Avançado - Boilerplate</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#06092B" />
            <meta
              name="description"
              content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
            />
          </Head>
          <GlobalStyles />
          <ProgressBar
            color={theme.colors.primary}
            startPosition={0.3}
            height={5}
            stopDelayMs={200}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </CartProvider>
    </ApolloProvider>
  )
}

export default App
