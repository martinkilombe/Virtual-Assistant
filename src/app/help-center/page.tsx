import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import ContactCTA from '@/components/ContactCTA'
import Eyebrow from '@/components/ui/Eyebrow'
import HelpCenter, { type HelpCategory } from '@/components/HelpCenter'
import { IconArrowL } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Help Center — Instant VA',
  description:
    'Answers to common questions about getting started, working with your assistant, billing, security, and cancellations.',
}

const CATEGORIES: HelpCategory[] = [
  {
    id: 'getting-started',
    label: 'Getting started',
    questions: [
      {
        id: 'how-matching-works',
        q: 'How does matching work?',
        a: 'Tell us the tasks you want off your plate. We match you with a vetted assistant whose skills fit, usually within a day, and you take it from there on a short kickoff call.',
      },
      {
        id: 'how-fast',
        q: 'How fast can I start?',
        a: 'Most clients are paired with an assistant and running within 24 hours of booking a call. Complex or specialist requests can take a little longer to match well.',
      },
      {
        id: 'tools-needed',
        q: 'What tools do I need?',
        a: 'None to start. Your assistant works inside the tools you already use, email, calendar, project boards, spreadsheets, so there is nothing new to set up on your end.',
      },
      {
        id: 'trial-period',
        q: 'Is there a trial period?',
        a: 'Yes. The first week is a fit check for both sides. If the match is not right, we re-match you with a new assistant at no extra cost.',
      },
    ],
  },
  {
    id: 'working-with-your-assistant',
    label: 'Working with your assistant',
    questions: [
      {
        id: 'hours-availability',
        q: 'What hours is my assistant available?',
        a: 'Plans are built around a weekly hour allowance rather than fixed shifts. You and your assistant agree on overlap hours that suit your time zone during onboarding.',
      },
      {
        id: 'swap-assistant',
        q: 'Can I switch assistants later?',
        a: 'Yes, any time. Tell your success manager and we will re-match you, handing over your task history and preferences so nothing is lost in the switch.',
      },
      {
        id: 'communication-channels',
        q: 'How do we communicate day to day?',
        a: 'Through whichever channel you prefer, email, Slack, or a shared task board. Most clients settle into one primary channel within the first week.',
      },
      {
        id: 'task-scope',
        q: "What's outside an assistant's scope?",
        a: 'Anything requiring a professional license, such as legal or tax filing advice. Your assistant will flag these and help you route them to the right specialist.',
      },
    ],
  },
  {
    id: 'billing-plans',
    label: 'Billing & plans',
    questions: [
      {
        id: 'pricing-model',
        q: 'How is pricing structured?',
        a: 'A flat weekly rate based on the hours you need, with no setup fees. Pricing details are confirmed on your intro call once we understand your workload.',
      },
      {
        id: 'payment-methods',
        q: 'What payment methods do you accept?',
        a: 'Major credit and debit cards, plus bank transfer for annual plans. Invoices are issued automatically at the start of each billing cycle.',
      },
      {
        id: 'change-plan',
        q: 'Can I change my plan later?',
        a: 'Yes, you can scale your hours up or down with one billing cycle of notice. Changes take effect on your next renewal date, never mid-cycle.',
      },
      {
        id: 'overtime-billing',
        q: 'What happens if I go over my hours?',
        a: 'Your assistant will flag it before it happens. Extra hours are billed at your plan rate for that month rather than a surprise overage charge.',
      },
    ],
  },
  {
    id: 'account-security',
    label: 'Account & security',
    questions: [
      {
        id: 'data-privacy',
        q: 'Who can see my data?',
        a: 'Only your matched assistant and the small internal team supporting your account. Access is limited to what each role needs to do its job.',
      },
      {
        id: 'nda',
        q: 'Do assistants sign an NDA?',
        a: 'Every assistant signs a confidentiality agreement before being matched to a client, covering your business information and anything they access on your behalf.',
      },
      {
        id: 'login-access',
        q: 'How do I manage account access?',
        a: 'From your client portal, where you can update billing details, contact info, and the channels your assistant is connected to at any time.',
      },
    ],
  },
  {
    id: 'cancellations-refunds',
    label: 'Cancellations & refunds',
    questions: [
      {
        id: 'how-to-cancel',
        q: 'How do I cancel my plan?',
        a: 'Message your success manager or use the cancel option in your client portal. There is no minimum contract, so cancellation takes effect at your next renewal date.',
      },
      {
        id: 'refund-policy',
        q: "What's your refund policy?",
        a: 'If the first week is not a fit, we refund that week in full. After that, plans are billed per cycle in advance and are not refundable for partial weeks.',
      },
      {
        id: 'pausing-service',
        q: 'Can I pause instead of cancelling?',
        a: 'Yes. You can pause for up to four weeks without losing your assistant match, useful for slow seasons or planned time away.',
      },
    ],
  },
]

export default function HelpCenterPage() {
  return (
    <>
      <header className="iva-legal-nav">
        <div className="iva-container iva-legal-nav__row">
          <Link href="/" aria-label="Instant VA home">
            <span className="iva-logo">
              Instant<span className="t">V</span><span className="o">A</span>
            </span>
          </Link>
          <Link href="/" className="iva-legal-nav__back">
            <IconArrowL size={16} />
            Back to home
          </Link>
        </div>
      </header>

      <main>
        <section className="iva-legal-hero iva-help-hero">
          <div className="iva-container iva-head">
            <Eyebrow>Support</Eyebrow>
            <h1>How can we help?</h1>
            <p className="iva-lead">
              Answers to the questions we hear most about getting started, working with your
              assistant, billing, and security. Can&apos;t find it here? Send us a message below.
            </p>

            <HelpCenter categories={CATEGORIES} />
          </div>
        </section>

        <ContactCTA
          eyebrow="Still stuck?"
          title={<>Talk to a <em>human</em>, not a form.</>}
          description="If your question isn't covered here, tell us what's going on and we'll get back to you within one business day."
        />
      </main>

      <Footer />
    </>
  )
}
