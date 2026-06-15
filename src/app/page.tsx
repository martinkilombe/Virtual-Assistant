import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Process from '@/components/Process'
import EmployeeBand from '@/components/EmployeeBand'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'
import RevealWrapper from '@/components/RevealWrapper'

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <RevealWrapper><About /></RevealWrapper>
        <RevealWrapper><Services /></RevealWrapper>
        <RevealWrapper><Process /></RevealWrapper>
        <RevealWrapper><EmployeeBand /></RevealWrapper>
        <RevealWrapper><Projects /></RevealWrapper>
        <RevealWrapper><Testimonials /></RevealWrapper>
        <RevealWrapper><ContactCTA /></RevealWrapper>
      </main>
      <Footer />
    </>
  )
}
