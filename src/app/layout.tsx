import { Geist, Geist_Mono } from 'next/font/google'
import './style/globals.css'
import type { PropsWithChildren } from 'react'
import { generateMetadata } from './metadata'
import { Navigation } from '@/widgets/layout/navigation/navigation'

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
        <main className='flex min-h-screen gap-8'>
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  )
}
