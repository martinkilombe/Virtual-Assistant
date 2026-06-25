import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'
import CaseStudyCard from '@/components/ui/CaseStudyCard'
import ContactCTA from '@/components/ContactCTA'
import RevealWrapper from '@/components/RevealWrapper'
import { IconArrowL } from '@/components/icons'
import { CASE_STUDIES } from '@/data/case-studies'

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cs = CASE_STUDIES.find((c) => c.slug === slug)
  if (!cs) return {}
  return {
    title: `${cs.category} Case Study | Instant VA`,
    description: cs.summary,
  }
}

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = CASE_STUDIES.find((c) => c.slug === slug)
  if (!cs) notFound()

  const related = CASE_STUDIES.filter((c) => c.slug !== cs.slug)

  return (
    <>
      {/* ── Hero ── */}
      <section className="iva-cs-detail-hero">
        <div className="iva-container">
          <Link href="/case-studies" className="iva-cs-breadcrumb">
            <IconArrowL size={14} />
            Case Studies
          </Link>

          <div className="iva-cs-cat-chip">{cs.category}</div>

          <h1 className="iva-serif">{cs.heroHeadline}</h1>

          <p className="iva-lead">{cs.summary}</p>

          <div className="iva-cs-metrics">
            {cs.metrics.map((m) => (
              <div key={m.label} className="iva-cs-metrics__item">
                <span className="iva-cs-metrics__value">{m.value}</span>
                <span className="iva-cs-metrics__label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Context band ── */}
      <RevealWrapper>
        <section className="iva-cs-context">
          <div className="iva-container iva-cs-context__grid">
            <div className="iva-cs-context__block">
              <span className="iva-cs-context__block-label">The Client</span>
              <h2 className="iva-cs-context__block-title">{cs.industry}</h2>
              <p className="iva-cs-context__block-body">{cs.client}</p>
            </div>
            <div className="iva-cs-context__block">
              <span className="iva-cs-context__block-label">The Challenge</span>
              <h2 className="iva-cs-context__block-title">What was broken</h2>
              <p className="iva-cs-context__block-body">{cs.challenge}</p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── How we helped ── */}
      <RevealWrapper>
        <section className="iva-cs-how">
          <div className="iva-container">
            <div className="iva-cs-how__head">
              <Eyebrow>Workstreams</Eyebrow>
              <h2 className="iva-serif">How we helped</h2>
              <p className="iva-lead">
                The VA took ownership across three distinct workstreams from day one.
              </p>
            </div>

            <div className="iva-cs-how__grid">
              {cs.workstreams.map((ws, i) => (
                <div key={ws.title} className="iva-cs-workstream">
                  <span className="iva-cs-workstream__num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="iva-cs-workstream__title">{ws.title}</h3>
                  <p className="iva-cs-workstream__body">{ws.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── Results band (deep green) ── */}
      <RevealWrapper>
        <section className="iva-cs-results">
          <div className="iva-container">
            <Eyebrow color="white">Results</Eyebrow>
            <h2 className="iva-cs-results__headline iva-serif iva-onaccent">
              The numbers that matter.
            </h2>

            <div className="iva-cs-results__stats">
              {cs.metrics.map((m) => (
                <div key={m.label} className="iva-cs-results__stat">
                  <span className="iva-cs-results__stat-value">{m.value}</span>
                  <span className="iva-cs-results__stat-label">{m.label}</span>
                </div>
              ))}
            </div>

            <p className="iva-cs-results__summary">{cs.resultsSummary}</p>

            {cs.quote && (
              <blockquote className="iva-cs-results__quote">
                <p className="iva-cs-results__quote-text">
                  &ldquo;{cs.quote.text}&rdquo;
                </p>
                <cite className="iva-cs-results__quote-attr">{cs.quote.attribution}</cite>
              </blockquote>
            )}
          </div>
        </section>
      </RevealWrapper>

      {/* ── Related ── */}
      <RevealWrapper>
        <section className="iva-cs-related">
          <div className="iva-container">
            <div className="iva-cs-related__head">
              <Eyebrow>More from our work</Eyebrow>
              <h2 className="iva-serif">Keep reading.</h2>
            </div>

            <div className="iva-cs-related__grid">
              {related.map((r) => (
                <CaseStudyCard key={r.slug} cs={r} headingAs="h3" />
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── CTA ── */}
      <RevealWrapper>
        <ContactCTA
          eyebrow="Work with us"
          title={<>Your work, <em>handled.</em></>}
          description="Tell us what's taking up your week. We'll match you with the right assistant, usually within a day."
        />
      </RevealWrapper>
    </>
  )
}
