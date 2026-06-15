import type { Metadata } from 'next'
import { Space_Grotesk, Inter, Space_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Instant VA — Virtual Assistant Services',
  description:
    'Hand off the time-consuming, detail-heavy work to a dedicated virtual assistant — so you can focus on the parts of your business only you can do.',
  openGraph: {
    title: 'Instant VA — Virtual Assistant Services',
    description: 'Remote-first virtual assistants for founders & small teams.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
