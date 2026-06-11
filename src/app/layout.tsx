import type { Metadata } from 'next'
import { Poppins, Mulish } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const mulish = Mulish({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
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
    <html lang="en" className={`${poppins.variable} ${mulish.variable}`}>
      <body>{children}</body>
    </html>
  )
}
