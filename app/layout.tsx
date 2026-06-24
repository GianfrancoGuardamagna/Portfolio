import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Press_Start_2P, Space_Mono } from 'next/font/google'
import './globals.css'

const pressStart = Press_Start_2P({
  variable: '--font-press-start',
  weight: '400',
  subsets: ['latin'],
})
const spaceMono = Space_Mono({
  variable: '--font-space-mono',
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Gianfranco Guardamagna · Full Stack Developer',
  description:
    'Full Stack Developer based in Málaga, Spain. Building real products that ship to production with React, Next.js, and Node.js.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${pressStart.variable} ${spaceMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
