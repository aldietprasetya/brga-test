import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import React, { useEffect } from "react";
import Router from 'next/router'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const {pathname} = Router
    if(pathname == '/' ){
      Router.push('/beranda/laporan/aspekManajemen')
    }
  });

  return <Component {...pageProps} />
}

export default MyApp
