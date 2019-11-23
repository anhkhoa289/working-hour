import React from 'react'
import App from 'next/app'
import LayoutDefault from '../components/layout/Default'
import { StoreProvider } from 'easy-peasy'
import store from '../logic/store'

import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'


class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props
    return (
      <StoreProvider store={store}>
        <LayoutDefault>
          <Component {...pageProps} />
        </LayoutDefault>
      </StoreProvider>
    )
  }
}

export default MyApp
