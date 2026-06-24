import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import RevealWrapper from '@/components/RevealWrapper'
import Eyebrow from '@/components/ui/Eyebrow'
import Button from '@/components/ui/Button'
import StatCard from '@/components/ui/StatCard'

export const metadata: Metadata = {
  title: 'About — Instant VA',
  description:
    'Why Instant VA exists, how we vet and match assistants, and the principles we hold to as we help founders hand off the busywork.',
}

const STEPS = [
  {
    title: 'Sourced',
    text: 'Pulled from a pool of career assistants, not gig marketplaces, and screened for relevant experience before they ever reach an interview. Most candidates don’t make it past this stage.',
  },
  {
    title: 'Verified',
    text: 'Identity verification, reference checks, and a background check, cleared before they reach your inbox or your calendar. We speak to at least two former employers, not just check a box.',
  },
  {
    title: 'Matched',
    text: 'Skills tested against the specific tools and tasks you need, then introduced to you only once everything holds up. If a candidate isn’t a fit for your workflow, they don’t reach your shortlist.',
  },
  {
    title: 'Supported',
    text: 'A dedicated success manager oversees onboarding, so quality holds steady from week one and every week after. They check in regularly and step in the moment something’s off.',
  },
]

const PRINCIPLES = [
  'Real professionals, never bots or gig workers.',
  'No long contracts or hidden fees, scale hours up or down anytime.',
  'Your tools, your workflows, no migration required.',
  'One dedicated success manager, so quality holds as you grow.',
]

const STATS = [
  { value: '9', label: 'Years matching' },
  { value: '850+', label: 'Businesses served' },
  { value: '4.9', label: 'Average rating' },
]

export default function AboutPage() {
  return (
    <>
      <NavBar />

      <main>
        <section className="iva-legal-hero iva-about-hero">
          <div className="iva-container iva-head">
            <Eyebrow>About</Eyebrow>
            <h1>
              We started Instant VA so founders could stop drowning in <em>admin</em>.
            </h1>
            <p className="iva-lead">
              We do one thing: match ambitious founders with a dedicated, vetted
              assistant who takes the recurring work off their plate, reliably, every
              day.
            </p>
          </div>
        </section>

        <RevealWrapper>
          <section className="iva-section iva-section--paper">
            <div className="iva-container iva-about">
              <div className="iva-about__media">
                <div className="iva-about__frame" aria-hidden="true" />
                <div className="iva-about__badge" aria-label="9 years matching founders with assistants">
                  <span className="iva-about__badge-num">9</span>
                  <span className="iva-about__badge-lab">years of matching</span>
                </div>
              </div>

              <div className="iva-about__copy">
                <Eyebrow>Why we started</Eyebrow>
                <h2 className="iva-serif">
                  A team that <em>stays</em>, not one that cycles through.
                </h2>
                <p className="iva-lead">
                  We started Instant VA after watching the same pattern play out
                  across small team after small team: the founder was the
                  bottleneck, not for lack of help, but because the help never
                  stuck. Freelancers disappeared mid-project. Part-timers learned
                  the job and left.
                </p>

                <blockquote className="iva-about-pull">
                  <p>The work that quietly runs a business deserves someone who stays.</p>
                </blockquote>

                <p className="iva-lead">
                  So we built a bench of full-time, vetted assistants who stay,
                  matched by a team that takes the time to get it right. That&apos;s
                  still the whole idea, nine years on.
                </p>
              </div>
            </div>
          </section>
        </RevealWrapper>

        <RevealWrapper>
          <section className="iva-section iva-section--panel" id="how-we-work">
            <div className="iva-container">
              <div className="iva-head">
                <Eyebrow>How we work</Eyebrow>
                <h2 className="iva-serif">
                  Vetted before you ever <em>meet</em> them.
                </h2>
                <p className="iva-lead">
                  Four checkpoints stand between a candidate and your bench. None
                  of them get skipped.
                </p>
              </div>

              <div className="iva-about-steps">
                {STEPS.map((s) => (
                  <div key={s.title} className="iva-about-step">
                    <h3 className="iva-about-step__title">{s.title}</h3>
                    <p className="iva-about-step__body">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealWrapper>

        <RevealWrapper>
          <section className="iva-section iva-section--paper">
            <div className="iva-container iva-head">
              <Eyebrow>What we stand for</Eyebrow>
              <h2 className="iva-serif">
                A few things we don&apos;t <em>compromise</em> on.
              </h2>
              <div className="iva-about-principles">
                {PRINCIPLES.map((item, i) => (
                  <div key={item} className="iva-about-principle">
                    <span className="iva-about-principle__num" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="iva-about-principle__text">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealWrapper>

        <RevealWrapper>
          <section className="iva-band iva-band--solo">
            <div className="iva-container iva-band__grid">
              <div className="iva-band__copy">
                <Eyebrow color="white" align="center">
                  Track record
                </Eyebrow>
                <h2 className="iva-onband">
                  Nine years of <em>matching</em> well.
                </h2>
                <p className="iva-band__lead">
                  850+ businesses trust an Instant VA with the work that keeps
                  them running, matched in under a day, on average.
                </p>
                <div className="iva-band__stats">
                  {STATS.map((s) => (
                    <StatCard key={s.label} value={s.value} label={s.label} />
                  ))}
                </div>
                <Button href="/#contact" variant="light" size="lg">
                  Book a free call
                </Button>
              </div>
            </div>
          </section>
        </RevealWrapper>
      </main>

      <Footer />
    </>
  )
}
