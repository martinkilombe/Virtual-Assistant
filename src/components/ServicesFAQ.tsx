'use client'

import { useState } from 'react'
import { IconArrow } from '@/components/icons'

export interface ServiceFAQItem {
  id: string
  q: string
  a: string
}

export default function ServicesFAQ({ items }: { items: ServiceFAQItem[] }) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="iva-help-rows">
      {items.map((item) => {
        const isOpen = openIds.has(item.id)
        return (
          <div key={item.id} className="iva-help-row">
            <button
              type="button"
              className="iva-help-row__q"
              aria-expanded={isOpen}
              aria-controls={`svc-faq-panel-${item.id}`}
              id={`svc-faq-trigger-${item.id}`}
              onClick={() => toggle(item.id)}
            >
              <span>{item.q}</span>
              <span className="iva-help-row__chevron" aria-hidden="true">
                <IconArrow size={18} />
              </span>
            </button>
            <div
              className={`iva-help-row__panel${isOpen ? ' is-open' : ''}`}
              id={`svc-faq-panel-${item.id}`}
              role="region"
              aria-labelledby={`svc-faq-trigger-${item.id}`}
            >
              <div className="iva-help-row__answer">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
