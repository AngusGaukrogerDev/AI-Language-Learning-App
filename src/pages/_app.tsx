import '@/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import type { AppProps } from 'next/app'
import {NextUIProvider} from '@nextui-org/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <ClerkProvider {...pageProps}>  
        <Component {...pageProps} />
      </ClerkProvider>
    </NextUIProvider>

  )
}

export default MyApp;
