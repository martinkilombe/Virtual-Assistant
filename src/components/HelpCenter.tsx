'use client'

import { useEffect, useMemo, useState } from 'react'
import { IconArrow, IconSearch } from '@/components/icons'

export interface HelpQuestion {
  id: string
  q: string
  a: string
}

export interface HelpCategory {
  id: string
  label: string
  questions: HelpQuestion[]
}

function normalize(s: string) {
  return s.toLowerCase()
}

export default function HelpCenter({ categories }: { categories: HelpCategory[] }) {
  const [query, setQuery] = useState('')
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())
  const [active, setActive] = useState(categories[0]?.id)

  const isSearching = query.trim().length > 0

  const filtered = useMemo(() => {
    if (!isSearching) return categories
    const needle = normalize(query.trim())
    return categories
      .map((cat) => ({
        ...cat,
        questions: cat.questions.filter(
          (item) => normalize(item.q).includes(needle) || normalize(item.a).includes(needle)
        ),
      }))
      .filter((cat) => cat.questions.length > 0)
  }, [categories, query, isSearching])

  const resultCount = useMemo(
    () => filtered.reduce((n, cat) => n + cat.questions.length, 0),
    [filtered]
  )

  useEffect(() => {
    if (isSearching) return
    const headings = categories
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-110px 0px -65% 0px', threshold: 0 }
    )
    headings.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [categories, isSearching])

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <>
      <div className="iva-help-search">
        <label htmlFor="help-search" className="iva-sr-only">
          Search help articles
        </label>
        <div className="iva-help-search__field">
          <IconSearch size={22} aria-hidden="true" />
          <input
            id="help-search"
            type="search"
            className="iva-help-search__input"
            placeholder="Search for an answer…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {isSearching ? (
        <span className="iva-help-result-count" aria-live="polite">
          {resultCount} {resultCount === 1 ? 'result' : 'results'} for &ldquo;{query.trim()}&rdquo;
        </span>
      ) : (
        <nav className="iva-help-nav" aria-label="Help categories">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className={`iva-help-nav__link${active === cat.id ? ' is-active' : ''}`}
              aria-current={active === cat.id ? 'true' : undefined}
            >
              {cat.label}
            </a>
          ))}
        </nav>
      )}

      {filtered.length === 0 ? (
        <p className="iva-help-empty" aria-live="polite">
          No results for &ldquo;{query.trim()}&rdquo;. Try a different search, or{' '}
          <a href="#contact">send us a message</a>.
        </p>
      ) : (
        filtered.map((cat) => (
          <div key={cat.id} id={cat.id} className="iva-help-cat">
            <div className="iva-help-cat__head">
              <h2>{cat.label}</h2>
              <span className="iva-help-cat__count">
                {cat.questions.length} {cat.questions.length === 1 ? 'article' : 'articles'}
              </span>
            </div>

            <div className="iva-help-rows">
              {cat.questions.map((item) => {
                const isOpen = openIds.has(item.id)
                return (
                  <div key={item.id} className="iva-help-row">
                    <button
                      type="button"
                      className="iva-help-row__q"
                      aria-expanded={isOpen}
                      aria-controls={`help-panel-${item.id}`}
                      id={`help-trigger-${item.id}`}
                      onClick={() => toggle(item.id)}
                    >
                      <span>{item.q}</span>
                      <span className="iva-help-row__chevron" aria-hidden="true">
                        <IconArrow size={18} />
                      </span>
                    </button>
                    <div
                      className={`iva-help-row__panel${isOpen ? ' is-open' : ''}`}
                      id={`help-panel-${item.id}`}
                      role="region"
                      aria-labelledby={`help-trigger-${item.id}`}
                    >
                      <div className="iva-help-row__answer">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))
      )}
    </>
  )
}
