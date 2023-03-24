import '@/styles/globals.css'
import localFont from '@next/font/local'
import { Space_Mono } from 'next/font/google'

const generalsans = localFont({
  src: [
    {
      path: './fonts/GeneralSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/GeneralSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/GeneralSans-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/GeneralSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/GeneralSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    
  ],
  variable: '--font-general'
})

const spc_mono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
})

export default function App({ Component, pageProps }) {
  return <main className={`${generalsans.variable} ${spc_mono.variable}`}> <Component {...pageProps} /> </main> }
