import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Case Studies | Instant VA',
  description:
    'Real outcomes from real clients. See how dedicated virtual assistants move the needle for founders and small teams.',
}

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
