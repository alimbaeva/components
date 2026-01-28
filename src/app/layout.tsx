import { Geist, Geist_Mono } from 'next/font/google'
import './style/globals.css'
import type { PropsWithChildren } from 'react'
import { generateMetadata } from './metadata'
import { Navigation } from '@/layout/navigation/navigation'
import { Header } from '@/layout/header/header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = generateMetadata()

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='ru'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className='flex min-h-screen w-full flex-col lg:flex-row'>
          <Navigation className='hidden lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-72 lg:border-r lg:border-b-0 lg:shadow-[10px_0_15px_-3px_rgba(0,0,0,0.1)]' />
          <section className='w-full min-w-0 flex-1 lg:ml-72'>
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
