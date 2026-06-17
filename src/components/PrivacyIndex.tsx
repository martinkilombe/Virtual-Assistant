'use client'

import { useEffect, useState } from 'react'

interface IndexSection {
  id: string
  label: string
}

export default function PrivacyIndex({ sections }: { sections: IndexSection[] }) {
  const [active, setActive] = useState(sections[0]?.id)

  useEffect(() => {
    const headings = sections
      .map((s) => document.getElementById(s.id))
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
  }, [sections])

  return (
    <nav className="iva-legal-index" aria-label="Privacy policy sections">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`iva-legal-index__link${active === s.id ? ' is-active' : ''}`}
          aria-current={active === s.id ? 'true' : undefined}
        >
          {s.label}
        </a>
      ))}
    </nav>
  )
}
