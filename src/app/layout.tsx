import type { Metadata } from 'next'
import { Fraunces, Inter, Space_Mono } from 'next/font/google'
import './globals.css'

// Editorial display serif — used only for oversized headline moments.
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
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
  title: 'Instant VA — The quiet force behind ambitious founders',
  description:
    'Hand the detail-heavy work to a dedicated virtual assistant — and get back the hours only you can spend on growth.',
  openGraph: {
    title: 'Instant VA — The quiet force behind ambitious founders',
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
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
