'use client'

import { useState } from 'react'
import Eyebrow from '@/components/ui/Eyebrow'
import CaseStudyCard from '@/components/ui/CaseStudyCard'
import { CASE_STUDIES } from '@/data/case-studies'


const CATEGORIES = ['All', 'Project Management', 'Marketing & Social', 'Operations & Finance']

const AGGREGATE_STATS = [
  { value: '50+', label: 'Projects coordinated' },
  { value: '3', label: 'Industries served' },
  { value: '100%', label: 'Client retention' },
]

export default function CaseStudiesIndex() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? CASE_STUDIES : CASE_STUDIES.filter((cs) => cs.category === active)

  return (
    <>
      {/* ── Hero ── */}
      <section className="iva-cs-hero">
        <div className="iva-container">
          <Eyebrow>Case Studies</Eyebrow>
          <h1 className="iva-serif iva-cs-index-h1">
            Real work.<br />Loud results.
          </h1>
          <p className="iva-lead">
            A look at how dedicated assistants move the needle for the teams they
            support. Real clients, real outcomes, no invented metrics.
          </p>

          <div className="iva-cs-stats-bar">
            {AGGREGATE_STATS.map((s) => (
              <div key={s.label} className="iva-cs-stats-bar__item">
                <span className="iva-cs-stats-bar__value">{s.value}</span>
                <span className="iva-cs-stats-bar__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <section className="iva-cs-index-body">
        <div className="iva-container">
          <div className="iva-cs-filters" role="group" aria-label="Filter by category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`iva-cs-filter${active === cat ? ' is-active' : ''}`}
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="iva-cs-grid">
            {filtered.map((cs) => (
              <CaseStudyCard key={cs.slug} cs={cs} headingAs="h2" />
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
