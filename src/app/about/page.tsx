import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import RevealWrapper from '@/components/RevealWrapper'
import Eyebrow from '@/components/ui/Eyebrow'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About | Instant VA',
  description:
    'Why Instant VA exists, how we vet and match assistants, and the principles we hold to as we help founders hand off the busywork.',
}

const STEPS = [
  {
    num: '01',
    title: 'Sourced',
    text: 'Pulled from a pool of career assistants, not gig marketplaces, and screened for relevant experience before they ever reach an interview. Most candidates don\'t make it past this stage.',
  },
  {
    num: '02',
    title: 'Verified',
    text: 'Identity verification, reference checks, and a background check, all cleared before they reach your inbox or calendar. We speak to at least two former employers, not just check a box.',
  },
  {
    num: '03',
    title: 'Matched',
    text: 'Skills tested against the specific tools and tasks you need, then introduced to you only once everything holds up. If they aren\'t a fit for your workflow, they don\'t reach your shortlist.',
  },
  {
    num: '04',
    title: 'Supported',
    text: 'A dedicated success manager oversees onboarding so quality holds steady from week one and every week after. They check in regularly and step in the moment something\'s off.',
  },
]

const PRINCIPLES = [
  'Real professionals, never bots or gig workers.',
  'No long contracts or hidden fees, scale hours up or down anytime.',
  'Your tools, your workflows, no migration required.',
  'One dedicated success manager, so quality holds as you grow.',
]

const STATS = [
  { value: '9', label: 'Years matching', sub: 'Since 2015' },
  { value: '850+', label: 'Businesses served', sub: 'Across 40+ industries' },
  { value: '4.9', label: 'Average client rating', sub: 'Out of 5.0' },
]

export default function AboutPage() {
  return (
    <>
      <NavBar />

      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="iva-about-pg-hero">
          <div className="iva-container">
            <Eyebrow>About Instant VA</Eyebrow>
            <h1 className="iva-about-pg-hero__h1">
              We started Instant VA so founders could stop drowning in{' '}
              <em>admin</em>.
            </h1>
            <p className="iva-about-pg-hero__lead">
              We do one thing: match ambitious founders with a dedicated, vetted
              assistant who takes the recurring work off their plate, reliably,
              every day.
            </p>
          </div>

          <div className="iva-container">
            <div className="iva-about-pg-stats">
              {STATS.map((s) => (
                <div key={s.label} className="iva-about-pg-stat">
                  <span className="iva-about-pg-stat__value">{s.value}</span>
                  <span className="iva-about-pg-stat__label">{s.label}</span>
                  <span className="iva-about-pg-stat__sub">{s.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Story ────────────────────────────────────────────── */}
        <RevealWrapper>
          <section className="iva-section iva-section--paper">
            <div className="iva-container iva-about-pg-story">
              <div className="iva-about-pg-story__card">
                <div className="iva-about-pg-story__card-inner">
                  <span className="iva-about-pg-story__card-num">9</span>
                  <span className="iva-about-pg-story__card-unit">
                    years of matching
                  </span>
                  <blockquote className="iva-about-pg-story__card-quote">
                    The work that quietly runs a business deserves someone who
                    stays.
                  </blockquote>
                </div>
              </div>

              <div className="iva-about-pg-story__copy">
                <Eyebrow>Why we started</Eyebrow>
                <h2 className="iva-serif">
                  A team that <em>stays</em>, not one that cycles through.
                </h2>
                <p className="iva-lead">
                  We started Instant VA after watching the same pattern play out
                  across small team after small team: the founder was the
                  bottleneck, not for lack of help, but because the help never
                  stuck.
                </p>
                <p className="iva-lead">
                  Freelancers disappeared mid-project. Part-timers learned
                  the job and left. So we built a bench of full-time, vetted
                  assistants who stay, matched by a team that takes the time
                  to get it right. That&apos;s still the whole idea, nine years on.
                </p>
              </div>
            </div>
          </section>
        </RevealWrapper>

        {/* ── Vetting Steps ────────────────────────────────────── */}
        <RevealWrapper>
          <section className="iva-section iva-section--panel" id="how-we-work">
            <div className="iva-container">
              <div className="iva-head iva-head--center">
                <Eyebrow align="center">How we work</Eyebrow>
                <h2 className="iva-serif">
                  Vetted before you ever <em>meet</em> them.
                </h2>
                <p className="iva-lead">
                  Four checkpoints stand between a candidate and your bench.
                  None of them get skipped.
                </p>
              </div>

              <div className="iva-about-pg-steps">
                {STEPS.map((s) => (
                  <div key={s.title} className="iva-about-pg-step">
                    <span className="iva-about-pg-step__num">{s.num}</span>
                    <h3 className="iva-about-pg-step__title">{s.title}</h3>
                    <p className="iva-about-pg-step__body">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealWrapper>

        {/* ── Principles ───────────────────────────────────────── */}
        <RevealWrapper>
          <section className="iva-section iva-section--paper">
            <div className="iva-container">
              <div className="iva-head">
                <Eyebrow>What we stand for</Eyebrow>
                <h2 className="iva-serif">
                  A few things we don&apos;t <em>compromise</em> on.
                </h2>
              </div>
              <div className="iva-about-pg-principles">
                {PRINCIPLES.map((item) => (
                  <div key={item} className="iva-about-pg-principle">
                    <p className="iva-about-pg-principle__text">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealWrapper>

        {/* ── CTA Band ─────────────────────────────────────────── */}
        <RevealWrapper>
          <section className="iva-about-pg-band">
            <div className="iva-container iva-about-pg-band__grid">
              <div className="iva-about-pg-band__copy">
                <Eyebrow color="white">Ready to delegate</Eyebrow>
                <h2>
                  Your first match in under a <em>day</em>.
                </h2>
                <p className="iva-about-pg-band__lead">
                  Tell us what you need. We handle the search, the vetting,
                  and the introduction, so you can hand off and move on.
                </p>
                <Button href="/#contact" variant="light" size="lg">
                  Book a free call
                </Button>
              </div>

              <div className="iva-about-pg-band__stats">
                {[
                  { value: '< 24h', label: 'Time to first introduction', sub: 'From your briefing call' },
                  { value: '96%', label: 'Client retention at 6 months', sub: 'Stay longer, delegate more' },
                  { value: '2+ yrs', label: 'Average assistant tenure', sub: 'Career professionals, not contractors' },
                ].map((s) => (
                  <div key={s.label} className="iva-about-pg-band__stat">
                    <span className="iva-about-pg-band__stat-value">{s.value}</span>
                    <div>
                      <span className="iva-about-pg-band__stat-label">{s.label}</span>
                      <span className="iva-about-pg-band__stat-sub">{s.sub}</span>
                    </div>
                  </div>
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
