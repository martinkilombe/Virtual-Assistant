import type { ComponentType } from 'react'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import CheckItem from '@/components/ui/CheckItem'
import { IconArrow, IconResearch, IconInvoice, IconCalendar, IconRocket } from '@/components/icons'

interface ServiceCardProps {
  Icon: ComponentType<{ size?: number }>
  title: string
  desc: string
}

function ServiceCard({ Icon, title, desc }: ServiceCardProps) {
  return (
    <article
      className="svc2 svc2--soft svc2__icon--rounded"
      style={{ '--acc': 'var(--orange-500)' } as React.CSSProperties}
    >
      <span className="svc2__icon svc2__icon--rounded">
        <Icon size={34} />
      </span>
      <div className="svc2__body">
        <h3 className="svc2__title">{title}</h3>
        <p className="svc2__desc">{desc}</p>
        <span className="svc2__more">
          Learn more <IconArrow size={17} />
        </span>
      </div>
    </article>
  )
}

const SERVICES: ServiceCardProps[] = [
  {
    Icon: IconResearch,
    title: 'Research & Reports',
    desc: 'Market scans, data pulls, and tidy reports — delivered ready to act on.',
  },
  {
    Icon: IconInvoice,
    title: 'Expensing & Invoicing',
    desc: 'Invoices sent, receipts filed, expenses reconciled down to the cent.',
  },
  {
    Icon: IconCalendar,
    title: 'Scheduling & Planning',
    desc: 'A calendar that runs itself — meetings booked, conflicts resolved.',
  },
  {
    Icon: IconRocket,
    title: 'Marketing & Social Media',
    desc: 'Posts scheduled, inbox triaged, and your audience kept warm daily.',
  },
]

export default function Services() {
  return (
    <section className="iva-section iva-section--wash" id="services">
      <span className="iva-blob iva-svc__ringL" />
      <span className="iva-blob iva-svc__orange" />

      <div className="iva-container iva-svc">
        <div className="iva-svc__copy">
          <Eyebrow>Our Services</Eyebrow>
          <h2>Everything we handle so you don&apos;t have to.</h2>
          <p className="iva-lead">
            One dedicated assistant, an entire skill set. Delegate the
            recurring work that eats your week and get hours back to spend on
            growth.
          </p>
          <ul className="iva-svc__list">
            <CheckItem>Dedicated assistant matched to your needs</CheckItem>
            <CheckItem>Flexible hours — scale up or down anytime</CheckItem>
            <CheckItem>No long-term contracts or hidden fees</CheckItem>
          </ul>
          <Button href="#contact" variant="primary" size="md">
            Get Started
          </Button>
        </div>

        <div className="iva-svc__grid is-stagger">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
