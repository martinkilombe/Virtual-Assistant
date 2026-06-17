'use client'

import { useEffect, useState } from 'react'

interface ServiceLink {
  id: string
  label: string
}

export default function ServicesNav({ services }: { services: ServiceLink[] }) {
  const [active, setActive] = useState(services[0]?.id)

  useEffect(() => {
    const sections = services
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
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [services])

  return (
    <nav className="iva-help-nav" aria-label="Jump to a service">
      {services.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`iva-help-nav__link${active === s.id ? ' is-active' : ''}`}
          aria-current={active === s.id ? 'true' : undefined}
        >
          {s.label}
        </a>
      ))}
    </nav>
  )
}
