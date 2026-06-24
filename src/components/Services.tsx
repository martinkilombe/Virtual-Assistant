import Link from 'next/link'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import CheckItem from '@/components/ui/CheckItem'
import {
  IconArrow,
  IconResearch,
  IconInvoice,
  IconCalendar,
  IconRocket,
} from '@/components/icons'

interface ServiceRow {
  num: string
  slug: string
  title: string
  desc: string
  meta: string
  icon: React.ComponentType<{ size?: number }>
}

const SERVICES: ServiceRow[] = [
  {
    num: '01',
    slug: 'research-reports',
    title: 'Research & Reports',
    desc: 'Market scans, data pulls, and tidy reports, delivered ready to act on.',
    meta: '3 briefs / week',
    icon: IconResearch,
  },
  {
    num: '02',
    slug: 'expensing-invoicing',
    title: 'Expensing & Invoicing',
    desc: 'Invoices sent, receipts filed, expenses reconciled down to the cent.',
    meta: '12 invoices / week',
    icon: IconInvoice,
  },
  {
    num: '03',
    slug: 'scheduling-planning',
    title: 'Scheduling & Planning',
    desc: 'A calendar that runs itself: meetings booked, conflicts resolved.',
    meta: '18 meetings / week',
    icon: IconCalendar,
  },
  {
    num: '04',
    slug: 'marketing-social',
    title: 'Marketing & Social',
    desc: 'Posts scheduled, inbox triaged, and your audience kept warm daily.',
    meta: '5 posts / week',
    icon: IconRocket,
  },
]

export default function Services() {
  return (
    <section className="iva-section iva-section--panel" id="services">
      <div className="iva-container iva-svc">
        <div className="iva-svc__copy">
          <Eyebrow>01 · Services</Eyebrow>
          <h2 className="iva-serif">
            One assistant, an <em>entire</em> skill set.
          </h2>
          <p className="iva-lead">
            Delegate the recurring work that eats your week and get the hours
            back to spend on growth.
          </p>
          <ul className="iva-svc__list">
            <CheckItem>Dedicated assistant matched to your needs</CheckItem>
            <CheckItem>Flexible hours, scale up or down anytime</CheckItem>
            <CheckItem>No long contracts or hidden fees</CheckItem>
          </ul>
          <Button href="#contact" variant="primary" size="md">
            Book a free call
          </Button>
        </div>

        <div className="iva-svc__rows">
          {SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <Link key={s.num} href={`/services#${s.slug}`} className="svc-row">
                <span className="svc-row__num">{s.num}</span>
                <span>
                  <span className="svc-row__titlewrap">
                    <span className="svc-row__icon" aria-hidden="true">
                      <Icon size={20} />
                    </span>
                    <span className="svc-row__title">{s.title}</span>
                  </span>
                  <p className="svc-row__desc">{s.desc}</p>
                  <span className="svc-row__meta">{s.meta}</span>
                </span>
                <span className="svc-row__arrow">
                  <IconArrow size={22} />
                </span>
              </Link>
            )
          })}
          <Link href="/services" className="iva-svc__viewall">
            View all services
            <IconArrow size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
