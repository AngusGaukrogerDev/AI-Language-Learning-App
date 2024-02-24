import '@/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import type { AppProps } from 'next/app'
import {NextUIProvider} from '@nextui-org/react'
// import {Sarabun} from 'next/font/google'

function MyApp({ Component, pageProps }: AppProps) {
  // const sarabun = Sarabun({ weight: ['500'], subsets: ['latin'] });

  return (
    <NextUIProvider>
      <ClerkProvider {...pageProps}>  
        <Component {...pageProps} />
      </ClerkProvider>
    </NextUIProvider>

  )
}

export default MyApp;
