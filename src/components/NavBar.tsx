'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '@/components/ui/Button'
import { IconMenu, IconX } from '@/components/icons'
import { smoothTo } from '@/utils/smoothTo'

const NAV = [
  { label: 'Services', href: '/#services' },
  { label: 'Process',  href: '/#process' },
  { label: 'Work',     href: '/#work' },
  { label: 'Contact',  href: '/#contact' },
]

export default function NavBar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (pathname !== '/') return
    const ids = ['services', 'process', 'work', 'contact']
    const onScroll = () => {
      const y = window.scrollY + 120
      let cur = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) cur = id
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false)
    if (pathname === '/') {
      e.preventDefault()
      smoothTo('#' + href.split('#')[1])
    }
  }

  return (
    <header className={`iva-nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="iva-container iva-nav__row">
        <Link href="/" className="iva-nav__brand" aria-label="Instant VA home">
          <span className="iva-logo">
            Instant<span className="t">V</span><span className="o">A</span>
          </span>
        </Link>

        <nav className="iva-nav__menu" aria-label="Main navigation">
          {NAV.map((n) => {
            const sectionId = n.href.split('#')[1]
            return (
              <a
                key={n.label}
                href={n.href}
                className={`iva-nav__link${active === sectionId ? ' is-active' : ''}`}
                onClick={(e) => handleLink(e, n.href)}
              >
                {n.label}
              </a>
            )
          })}
        </nav>

        <div className="iva-nav__actions">
          <Button
            href="/#contact"
            variant="primary"
            size="sm"
            className="iva-nav__cta"
            onClick={(e) => handleLink(e as React.MouseEvent<HTMLAnchorElement>, '/#contact')}
          >
            Book a call
          </Button>
          <button
            className="iva-nav__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <IconX size={24} /> : <IconMenu size={24} />}
          </button>
        </div>
      </div>

      <div className={`iva-nav__drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        {NAV.map((n) => (
          <a
            key={n.label}
            href={n.href}
            onClick={(e) => handleLink(e, n.href)}
          >
            {n.label}
          </a>
        ))}
        <Button
          href="/#contact"
          variant="primary"
          size="md"
          onClick={(e) => handleLink(e as React.MouseEvent<HTMLAnchorElement>, '/#contact')}
        >
          Book a call
        </Button>
      </div>
    </header>
  )
}
