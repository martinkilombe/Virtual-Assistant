import type { Metadata } from 'next'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import RevealWrapper from '@/components/RevealWrapper'
import Eyebrow from '@/components/ui/Eyebrow'
import ContactCTA from '@/components/ContactCTA'

export const metadata: Metadata = {
  title: 'Contact — Instant VA',
  description:
    "Tell us what you need. We'll match you with a vetted assistant within one business day.",
}

const REACH = [
  {
    label: 'Email',
    value: 'hello@instantva.co',
    note: 'Prefer to write directly? We read every message.',
    href: 'mailto:hello@instantva.co',
  },
  {
    label: 'LinkedIn',
    value: '@instantva',
    note: 'Updates, delegation tips, and behind-the-scenes.',
    href: '#',
  },
  {
    label: 'Help Center',
    value: 'Browse common questions',
    note: 'Answers to billing, matching, and onboarding.',
    href: '/help-center',
  },
]

export default function ContactPage() {
  return (
    <>
      <NavBar />

      <main>
        {/* ── Hero ── */}
        <section className="iva-legal-hero iva-contact-hero">
          <div className="iva-container">
            <Eyebrow>Contact</Eyebrow>
            <h1>Let&apos;s talk.</h1>
            <p className="iva-lead">
              Tell us what&apos;s taking up your week. We&apos;ll match you with the
              right assistant&nbsp;— usually within a day.
            </p>
            <div className="iva-contact-hero__meta">
              <span className="iva-contact-hero__dot" aria-hidden="true" />
              <span>We respond within 1 business day</span>
              <span className="iva-contact-hero__sep" aria-hidden="true" />
              <span>Real people — no bots</span>
              <span className="iva-contact-hero__sep" aria-hidden="true" />
              <span>No obligation to commit</span>
            </div>
          </div>
        </section>

        {/* ── Contact form ── */}
        <RevealWrapper>
          <ContactCTA
            eyebrow="Get started"
            title={
              <>
                Real assistants. <em>Real</em> relief.
              </>
            }
            description="Fill in the form and someone on our team will read it personally. We'll be in touch within one business day — usually a few hours. No bots, no holding queue."
          />
        </RevealWrapper>

        {/* ── Other ways to reach ── */}
        <RevealWrapper>
          <section className="iva-section iva-section--paper iva-contact-reach">
            <div className="iva-container">
              <div className="iva-head">
                <Eyebrow>Other ways</Eyebrow>
                <h2 className="iva-serif">Prefer a different channel?</h2>
                <p className="iva-lead">
                  The form is the fastest path, but we&apos;re easy to find
                  elsewhere too.
                </p>
              </div>

              <div className="iva-contact-reach__rows">
                {REACH.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="iva-contact-reach__row"
                  >
                    <span className="iva-contact-reach__label">{item.label}</span>
                    <span className="iva-contact-reach__value">{item.value}</span>
                    <span className="iva-contact-reach__note">{item.note}</span>
                    <span className="iva-contact-reach__arrow" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        width={18}
                        height={18}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </RevealWrapper>
      </main>

      <Footer />
    </>
  )
}
