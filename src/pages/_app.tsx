import React from 'react'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import CountdownContextProvider from '../contexts/CountdownContext'
import ChallengesContextProvider from '../contexts/ChallengesContext'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ChallengesContextProvider>
        <CountdownContextProvider>
          <Component {...pageProps} />
          <GlobalStyle />
        </CountdownContextProvider>
      </ChallengesContextProvider>
    </ThemeProvider>
  )
}
