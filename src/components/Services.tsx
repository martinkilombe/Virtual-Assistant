'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import {
  IconArrow,
  IconResearch,
  IconInvoice,
  IconCalendar,
  IconRocket,
} from '@/components/icons'

interface ServiceItem {
  num: string
  slug: string
  title: string
  desc: string
  statNum: string
  statLabel: string
  icon: React.ComponentType<{ size?: number }>
}

const SERVICES: ServiceItem[] = [
  {
    num: '01',
    slug: 'research-reports',
    title: 'Research & Reports',
    desc: 'Scans, data pulls, and clean briefs. Delivered ready to act on, noise stripped out.',
    statNum: '3',
    statLabel: 'briefs per week',
    icon: IconResearch,
  },
  {
    num: '02',
    slug: 'expensing-invoicing',
    title: 'Expensing & Invoicing',
    desc: 'Every invoice sent, every receipt filed, every cent reconciled. Your books stay spotless.',
    statNum: '12',
    statLabel: 'invoices per week',
    icon: IconInvoice,
  },
  {
    num: '03',
    slug: 'scheduling-planning',
    title: 'Scheduling & Planning',
    desc: 'Meetings booked, conflicts resolved, follow-ups handled. Your calendar runs without you.',
    statNum: '18',
    statLabel: 'meetings per week',
    icon: IconCalendar,
  },
  {
    num: '04',
    slug: 'marketing-social',
    title: 'Marketing & Social',
    desc: 'Posts live, inbox cleared, audience kept warm. Consistent presence, zero daily effort.',
    statNum: '5',
    statLabel: 'posts per week',
    icon: IconRocket,
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const [fading, setFading] = useState(false)

  const activate = (i: number) => {
    if (i === active) return
    setFading(true)
    setTimeout(() => {
      setActive(i)
      setFading(false)
    }, 160)
  }

  const s = SERVICES[active]
  const SpotIcon = s.icon

  return (
    <section className="iva-section iva-section--panel" id="services">
      <div className="iva-container iva-svc">

        {/* Left: intro copy + row list */}
        <div className="iva-svc__left">
          <div className="iva-svc__copy">
            <Eyebrow>Services</Eyebrow>
            <h2 className="iva-serif">
              One assistant, an <em>entire</em> skill set.
            </h2>
            <p className="iva-lead">
              Delegate the recurring work that eats your week and get the hours
              back to spend on growth.
            </p>
          </div>

          <div className="iva-svc__rows">
            {SERVICES.map((row, i) => {
              const RowIcon = row.icon
              const isActive = i === active
              return (
                <div
                  key={row.num}
                  className={`svc-row${isActive ? ' svc-row--active' : ''}`}
                >
                  <button
                    className="svc-row__trigger"
                    onMouseEnter={() => activate(i)}
                    onClick={() => activate(i)}
                    aria-expanded={isActive}
                  >
                    <span className="svc-row__num">{row.num}</span>
                    <span className="svc-row__titlewrap">
                      <span className="svc-row__icon" aria-hidden="true">
                        <RowIcon size={17} />
                      </span>
                      <span className="svc-row__title">{row.title}</span>
                    </span>
                    <span className="svc-row__arrow" aria-hidden="true">
                      <IconArrow size={17} />
                    </span>
                  </button>

                  {/* Mobile accordion — hidden on desktop */}
                  <div className="svc-row__expand" aria-hidden={!isActive}>
                    <div className="svc-row__expand-inner">
                      <p className="svc-row__expand-desc">{row.desc}</p>
                      <div className="svc-row__expand-stat">
                        <span className="svc-row__expand-num">{row.statNum}</span>
                        <span className="svc-row__expand-label">{row.statLabel}</span>
                      </div>
                      <Link
                        href={`/services#${row.slug}`}
                        className="svc-spot__link"
                        tabIndex={isActive ? 0 : -1}
                      >
                        Learn more <IconArrow size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}

            <div className="iva-svc__actions">
              <Button href="#contact" variant="primary" size="md">
                Book a free call
              </Button>
              <Link href="/services" className="iva-svc__viewall">
                View all services
                <IconArrow size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right: sticky spotlight panel */}
        <div
          className="iva-svc__spotlight"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className={`svc-spot${fading ? ' svc-spot--out' : ''}`}>
            <div className="svc-spot__head">
              <span className="svc-spot__icon" aria-hidden="true">
                <SpotIcon size={24} />
              </span>
              <span className="svc-spot__eyebrow">{s.num}</span>
            </div>
            <h3 className="svc-spot__title">{s.title}</h3>
            <p className="svc-spot__desc">{s.desc}</p>
            <div className="svc-spot__divider" />
            <div className="svc-spot__stat">
              <span className="svc-spot__stat-num">{s.statNum}</span>
              <span className="svc-spot__stat-label">{s.statLabel}</span>
            </div>
            <Link href={`/services#${s.slug}`} className="svc-spot__link">
              Learn more <IconArrow size={13} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
