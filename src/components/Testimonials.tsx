'use client'

import { useState, useEffect } from 'react'
import Eyebrow from '@/components/ui/Eyebrow'
import IconButton from '@/components/ui/IconButton'
import { IconQuote, IconArrow, IconArrowL } from '@/components/icons'

const QUOTES = [
  {
    text: 'Within a week my assistant had taken over my entire inbox and calendar. I got back the equivalent of a full day every week — it genuinely changed how I run my company.',
    name: 'Kevin Andrew',
    role: 'CEO, Northwind Studio',
    img: '/assets/img/portrait-1.jpg',
  },
  {
    text: 'I was skeptical that someone remote could keep up with our pace. Three months in, our VA knows our process better than half the team. Total peace of mind.',
    name: 'Marisa Chen',
    role: 'Founder, Loomly Goods',
    img: '/assets/img/portrait-2.jpg',
  },
  {
    text: 'The matching was spot on. No long contracts, no overhead — just reliable, high-quality help that scales up the moment things get busy.',
    name: 'David Okafor',
    role: 'COO, Brightpath',
    img: '/assets/img/portrait-3.jpg',
  },
  {
    text: 'Invoicing and scheduling used to swallow my evenings. Now it just happens. My only regret is not signing up a year sooner.',
    name: 'Elena Park',
    role: 'Owner, Park & Co.',
    img: '/assets/img/portrait-5.jpg',
  },
]

const CLUSTER = [
  '/assets/img/portrait-2.jpg',
  '/assets/img/portrait-1.jpg',
  '/assets/img/portrait-3.jpg',
  '/assets/img/portrait-4.jpg',
  '/assets/img/portrait-5.jpg',
]

export default function Testimonials() {
  const [i, setI] = useState(0)

  const go = (dir: number) =>
    setI((p) => (p + dir + QUOTES.length) % QUOTES.length)

  useEffect(() => {
    const timer = setInterval(() => setI((p) => (p + 1) % QUOTES.length), 6500)
    return () => clearInterval(timer)
  }, [])

  const q = QUOTES[i]

  return (
    <section className="iva-section iva-tst" id="testimonials">
      <div className="iva-container">
        <div className="iva-head iva-head--center">
          <Eyebrow align="center">Testimonials</Eyebrow>
          <h2>What our clients are saying</h2>
        </div>

        <div className="iva-tst__stage">
          {/* Left cluster */}
          <div className="iva-tst__cluster iva-tst__cluster--l" aria-hidden="true">
            <img className="c1" src={CLUSTER[0]} alt="" />
            <img className="c2" src={CLUSTER[1]} alt="" />
            <img className="c3" src={CLUSTER[2]} alt="" />
          </div>

          {/* Quote panel */}
          <div className="iva-tst__panel">
            <span className="iva-tst__mark">
              <IconQuote size={26} />
            </span>
            <p className="iva-tst__quote" key={i}>
              {q.text}
            </p>
            <div className="iva-tst__author">
              <span className="iva-tst__name">{q.name}</span>
              <span className="iva-tst__role">{q.role}</span>
            </div>
            <div className="iva-tst__nav">
              <IconButton variant="dark" size="md" label="Previous" onClick={() => go(-1)}>
                <IconArrowL size={20} />
              </IconButton>
              <div className="iva-tst__dots" role="tablist">
                {QUOTES.map((_, k) => (
                  <button
                    key={k}
                    role="tab"
                    aria-selected={k === i}
                    aria-label={`Go to testimonial ${k + 1}`}
                    className={`iva-tst__dot${k === i ? ' on' : ''}`}
                    onClick={() => setI(k)}
                  />
                ))}
              </div>
              <IconButton variant="dark" size="md" label="Next" onClick={() => go(1)}>
                <IconArrow size={20} />
              </IconButton>
            </div>
          </div>

          {/* Right cluster */}
          <div className="iva-tst__cluster iva-tst__cluster--r" aria-hidden="true">
            <img className="c1" src={CLUSTER[3]} alt="" />
            <img className="c2" src={CLUSTER[4]} alt="" />
            <img className="c3" src={CLUSTER[0]} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
