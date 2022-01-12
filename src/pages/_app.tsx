import React from 'react'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'

import CountdownContextProvider from '../contexts/CountdownContext'
import ChallengesContextProvider from '../contexts/ChallengesContext'
import AuthenticationContextProvider from '../contexts/AuthenticationContext'

import 'react-toastify/dist/ReactToastify.css'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import ReactModal from 'react-modal'

Modal.setAppElement('#__next')

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthenticationContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <ThemeProvider theme={theme}>
        <ChallengesContextProvider>
          <CountdownContextProvider>
            <Component {...pageProps} />
            <GlobalStyle />
          </CountdownContextProvider>
        </ChallengesContextProvider>
      </ThemeProvider>
    </AuthenticationContextProvider>
  )
}
