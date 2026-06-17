import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Eyebrow from '@/components/ui/Eyebrow'
import { IconArrowL } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Privacy Policy — Instant VA',
  description:
    'How Instant VA collects, uses, and protects your personal data across our website and virtual assistant services.',
}

const SECTIONS = [
  {
    num: '01',
    title: 'Introduction',
    body: (
      <p>
        Instant VA (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) provides virtual assistant
        staffing and support services to founders and small teams. This policy explains what
        personal data we collect, why we collect it, and the choices you have. It applies to our
        website, client portal, and any service correspondence.
      </p>
    ),
  },
  {
    num: '02',
    title: 'Information we collect',
    body: (
      <ul>
        <li>
          <strong>Contact details</strong> you give us directly: name, email, phone, company, and
          anything submitted through our contact form or newsletter signup.
        </li>
        <li>
          <strong>Account &amp; engagement data:</strong> scope of work, task history,
          communications with your assigned assistant, and billing details.
        </li>
        <li>
          <strong>Usage data:</strong> pages visited, device and browser type, and approximate
          location, collected automatically via cookies and analytics tools.
        </li>
        <li>
          <strong>Information from third parties:</strong> payment processors, scheduling tools,
          and the channels you connect your assistant to (e.g. email, calendar), limited to what
          is needed to deliver the service.
        </li>
      </ul>
    ),
  },
  {
    num: '03',
    title: 'How we use your information',
    body: (
      <ul>
        <li>To match you with a vetted assistant and deliver the scope of work you request.</li>
        <li>To process payments, send invoices, and maintain account records.</li>
        <li>To respond to enquiries, provide support, and send service-related notices.</li>
        <li>
          To send product updates or delegation tips, only if you have opted in — you can
          unsubscribe at any time.
        </li>
        <li>To monitor, secure, and improve the site and our internal tools.</li>
      </ul>
    ),
  },
  {
    num: '04',
    title: 'Cookies & tracking technologies',
    body: (
      <p>
        We use essential cookies to run the site and optional analytics cookies to understand how
        it is used. You can control or disable cookies in your browser settings; doing so may
        limit some features. We do not sell data collected through cookies.
      </p>
    ),
  },
  {
    num: '05',
    title: 'How we share your information',
    body: (
      <>
        <p>We do not sell your personal data. We share it only with:</p>
        <ul>
          <li>
            The assistant matched to your account, limited to what is needed to complete your
            tasks.
          </li>
          <li>
            Service providers who support billing, scheduling, hosting, and analytics, under
            contracts that restrict their use of your data.
          </li>
          <li>Authorities or advisors, where required by law or to protect our legal rights.</li>
          <li>
            A successor entity, in the event of a merger, acquisition, or asset sale — with notice
            to you beforehand.
          </li>
        </ul>
      </>
    ),
  },
  {
    num: '06',
    title: 'Data retention',
    body: (
      <p>
        We keep personal data only as long as needed to provide the service, meet legal and
        accounting obligations, and resolve disputes. Account and engagement records are typically
        retained for the duration of the relationship plus 7 years for tax purposes; you can
        request earlier deletion subject to those obligations.
      </p>
    ),
  },
  {
    num: '07',
    title: 'Data security',
    body: (
      <p>
        We use encryption in transit, access controls, and regular review of who can reach client
        data. No system is fully immune to risk, so we also limit what we collect and how long we
        keep it.
      </p>
    ),
  },
  {
    num: '08',
    title: 'Your rights & choices',
    body: (
      <p>
        Depending on where you live, you may have the right to access, correct, export, or delete
        your personal data, and to object to or restrict certain processing. To exercise any of
        these rights, contact us at the email below; we will respond within 30 days.
      </p>
    ),
  },
  {
    num: '09',
    title: 'International data transfers',
    body: (
      <p>
        Our team and service providers operate across multiple countries. Where we transfer data
        internationally, we rely on standard contractual clauses or equivalent safeguards to keep
        it protected.
      </p>
    ),
  },
  {
    num: '10',
    title: "Children's privacy",
    body: (
      <p>
        Our services are intended for businesses and individuals aged 18 and over. We do not
        knowingly collect data from children, and we will delete any such data if we become aware
        of it.
      </p>
    ),
  },
  {
    num: '11',
    title: 'Changes to this policy',
    body: (
      <p>
        We may update this policy as our services evolve. Material changes will be posted on this
        page with a new &ldquo;last updated&rdquo; date; we encourage you to review it
        periodically.
      </p>
    ),
  },
  {
    num: '12',
    title: 'Contact us',
    body: (
      <p>
        Questions about this policy or your data? Email{' '}
        <a href="mailto:privacy@instantva.com">privacy@instantva.com</a> or write to us through
        the contact form on our homepage.
      </p>
    ),
  },
]

export default function PrivacyPolicy() {
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
        <section className="iva-legal-hero">
          <div className="iva-container iva-head">
            <Eyebrow>Legal</Eyebrow>
            <h1>Privacy Policy</h1>
            <p className="iva-lead">
              How we collect, use, and protect your personal data across our website and virtual
              assistant services.
            </p>
            <span className="iva-legal-hero__updated">Last updated: June 17, 2026</span>
          </div>
        </section>

        <section className="iva-legal__rows">
          <div className="iva-container">
            {SECTIONS.map((s) => (
              <div key={s.num} className="iva-legal-row">
                <span className="iva-legal-row__num">{s.num}</span>
                <div className="iva-legal-row__body">
                  <h2>{s.title}</h2>
                  {s.body}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
