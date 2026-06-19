import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import RevealWrapper from '@/components/RevealWrapper'
import Eyebrow from '@/components/ui/Eyebrow'
import Button from '@/components/ui/Button'
import StatCard from '@/components/ui/StatCard'
import ServicesNav from '@/components/ServicesNav'
import ServicesFAQ from '@/components/ServicesFAQ'
import {
  IconResearch,
  IconInvoice,
  IconCalendar,
  IconRocket,
  IconArrow,
} from '@/components/icons'

export const metadata: Metadata = {
  title: 'Services — Instant VA',
  description:
    'What your Instant VA actually handles: research and reporting, expensing and invoicing, scheduling and planning, and marketing and social, scoped clearly so you know what to hand off.',
}

interface ServiceModule {
  id: string
  num: string
  icon: React.ComponentType<{ size?: number }>
  title: string
  lead: string
  bestFor: string
  included: string[]
  tools: string[]
  excluded: string
  stats: { value: string; label: string }[]
}

const SERVICES: ServiceModule[] = [
  {
    id: 'research-reports',
    num: '01',
    icon: IconResearch,
    title: 'Research & Reports',
    lead: 'Market scans, competitor pulls, and data turned into a report you can act on, not another tab to read later.',
    bestFor: 'Founders who need data turned into decisions, not more tabs.',
    included: [
      'Competitor and market research briefs',
      'Data pulls from spreadsheets, CRMs, and public sources',
      'Slide decks and one-page summaries for stakeholders',
      'Recurring weekly or monthly reporting',
    ],
    tools: ['Google Workspace', 'Notion', 'Airtable', 'Slides / PowerPoint'],
    excluded:
      'Not included: strategic or legal/financial recommendations that require a licensed advisor. Your assistant will flag these and help you route them.',
    stats: [
      { value: '3', label: 'Competitor briefs' },
      { value: '1', label: 'Board-ready deck' },
      { value: '2', label: 'Recurring reports' },
    ],
  },
  {
    id: 'expensing-invoicing',
    num: '02',
    icon: IconInvoice,
    title: 'Expensing & Invoicing',
    lead: 'Invoices out the door on time, receipts filed before they pile up, books that reconcile to the cent.',
    bestFor: 'Service businesses chasing payments between client calls.',
    included: [
      'Client invoicing and payment follow-up',
      'Receipt capture and expense categorization',
      'Reconciliation against bank and card statements',
      'Light bookkeeping handoff to your accountant',
    ],
    tools: ['QuickBooks', 'Xero', 'Expensify', 'Stripe'],
    excluded:
      'Not included: tax filing or certified accounting. We coordinate with your accountant, not replace them.',
    stats: [
      { value: '12', label: 'Invoices sent' },
      { value: '40', label: 'Receipts filed' },
      { value: '3', label: 'Overdue chased' },
    ],
  },
  {
    id: 'scheduling-planning',
    num: '03',
    icon: IconCalendar,
    title: 'Scheduling & Planning',
    lead: 'A calendar that runs itself: meetings booked, conflicts resolved, travel mapped out before you have to ask.',
    bestFor: 'Leaders double-booked across time zones and teams.',
    included: [
      'Meeting scheduling and calendar management across time zones',
      'Conflict resolution and rebooking',
      'Travel itineraries and logistics',
      'Reminders for deadlines and follow-ups',
    ],
    tools: ['Google Calendar', 'Calendly', 'Outlook', 'TripIt'],
    excluded:
      'Not included: committing you to anything that needs your direct sign-off. Every booking is confirmed with you first.',
    stats: [
      { value: '18', label: 'Meetings booked' },
      { value: '3', label: 'Conflicts resolved' },
      { value: '1', label: 'Trip itinerary' },
    ],
  },
  {
    id: 'marketing-social',
    num: '04',
    icon: IconRocket,
    title: 'Marketing & Social',
    lead: 'Posts scheduled, inbox triaged, and your audience kept warm without you opening five different tabs.',
    bestFor: "Teams who know content matters but don't have hours for it.",
    included: [
      'Social content scheduling across platforms',
      'Inbox and DM triage',
      'Newsletter assembly and sends',
      'Basic performance tracking (opens, engagement)',
    ],
    tools: ['Mailchimp', 'Buffer', 'Canva', 'HubSpot'],
    excluded:
      'Not included: paid ad strategy or creative direction. We can coordinate with your agency if you run one.',
    stats: [
      { value: '5', label: 'Posts scheduled' },
      { value: '2', label: 'Newsletters sent' },
      { value: 'Daily', label: 'Inbox triage' },
    ],
  },
]

const STATS = [
  { value: '4', label: 'Service areas covered' },
  { value: '1', label: 'Dedicated assistant' },
  { value: '<24h', label: 'Avg. match time' },
]

const FAQS = [
  {
    id: 'mix-categories',
    q: 'Can I mix services across categories?',
    a: 'Yes. Most clients blend two or three in a given week. Your assistant manages the mix within your hour allowance rather than you booking each category separately.',
  },
  {
    id: 'pricing',
    q: 'How is this priced?',
    a: 'A flat weekly rate based on the hours and mix of services you need, no setup fees. Exact pricing is confirmed on your intro call once we understand your workload.',
  },
  {
    id: 'one-assistant',
    q: 'Do I need a different assistant for each service?',
    a: 'No. One assistant covers your full scope. We match based on your combined needs, not on a single task type.',
  },
  {
    id: 'doesnt-fit',
    q: "What if a task doesn't fit any of these four?",
    a: 'Tell us anyway. Most ad hoc requests sit close enough to these areas for your assistant to take on, or they will flag it if it needs a specialist outside this scope.',
  },
  {
    id: 'change-scope',
    q: 'Can the scope change month to month?',
    a: 'Yes, with one billing cycle of notice, the same as changing your plan hours up or down.',
  },
  {
    id: 'tools',
    q: 'What tools and platforms do you work in?',
    a: "Whatever you already use. Each service area lists the tools we work in most often, but assistants are trained to pick up your specific stack, no migration required.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <NavBar />

      <main>
        <section className="iva-legal-hero iva-svc-hero">
          <div className="iva-container iva-head">
            <Eyebrow>Services</Eyebrow>
            <h1>
              One assistant. Every <em>recurring</em> task off your plate.
            </h1>
            <p className="iva-lead">
              Four areas of work your Instant VA handles day to day, scoped clearly so you
              always know what&apos;s included and what gets handed to a specialist.
            </p>

            <ServicesNav services={SERVICES.map((s) => ({ id: s.id, label: s.title }))} />
          </div>
        </section>

        <RevealWrapper>
          <section className="iva-section iva-section--paper">
            <div className="iva-container iva-svc-modules">
              {SERVICES.map((s) => {
                const Icon = s.icon
                return (
                  <div key={s.id} id={s.id} className="iva-svc-module">
                    <div>
                      <span className="iva-svc-module__index">{s.num}</span>
                      <span className="iva-svc-module__icon" aria-hidden="true">
                        <Icon size={24} />
                      </span>
                      <h2 className="iva-svc-module__title">{s.title}</h2>
                      <p className="iva-svc-module__lead">{s.lead}</p>
                      <p className="iva-svc-module__best">
                        <span>Best for</span>
                        {s.bestFor}
                      </p>
                      <a href="/#contact" className="iva-svc-module__link">
                        Ask about this
                        <IconArrow size={16} />
                      </a>
                    </div>

                    <div>
                      <ul className="iva-svc-ledger">
                        {s.included.map((item) => (
                          <li key={item} className="iva-svc-ledger__row">
                            <span className="iva-svc-ledger__mark" aria-hidden="true">+</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="iva-svc-module__exclude">{s.excluded}</p>

                      <div className="iva-svc-stats">
                        {s.stats.map((stat) => (
                          <div key={stat.label} className="iva-svc-stats__item">
                            <span className="iva-svc-stats__value">{stat.value}</span>
                            <span className="iva-svc-stats__label">{stat.label}</span>
                          </div>
                        ))}
                      </div>

                      <div className="iva-svc-tools">
                        <span className="iva-svc-tools__label">Works in</span>
                        <div className="iva-svc-tools__chips">
                          {s.tools.map((tool) => (
                            <span key={tool} className="iva-svc-tools__chip">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        </RevealWrapper>

        <RevealWrapper>
          <section className="iva-band iva-band--solo">
            <div className="iva-container iva-band__grid">
              <div className="iva-band__copy">
                <Eyebrow color="white">One assistant</Eyebrow>
                <h2 className="iva-onband">
                  Your whole back office, <em>handled</em>.
                </h2>
                <p className="iva-band__lead">
                  You don&apos;t hire separately for research, billing, scheduling, and
                  marketing. One vetted assistant covers all four, matched to the mix you
                  actually need.
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

        <RevealWrapper>
          <section className="iva-section iva-section--paper">
            <div className="iva-container">
              <div className="iva-head iva-head--center">
                <Eyebrow align="center">Scope questions</Eyebrow>
                <h2 className="iva-serif">Scope, answered.</h2>
              </div>

              <div className="iva-svc-faq">
                <ServicesFAQ items={FAQS} />
              </div>

              <div className="iva-svc-faq__more">
                <a href="/#contact" className="iva-svc-module__link">
                  Still have a question? Talk to us
                  <IconArrow size={16} />
                </a>
              </div>
            </div>
          </section>
        </RevealWrapper>
      </main>

      <Footer />
    </>
  )
}
