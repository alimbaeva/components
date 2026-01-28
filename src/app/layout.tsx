import { Geist, Geist_Mono } from 'next/font/google'
import './style/globals.css'
import type { PropsWithChildren } from 'react'
import { generateMetadata } from './metadata'
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
          <section className='z-10 w-full min-w-0 flex-1 lg:ml-72'>
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
