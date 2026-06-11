'use client'

import { IconArrow } from '@/components/icons'

export default function NewsletterForm() {
  return (
    <form
      className="iva-footer__sub"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Your email"
        aria-label="Email address for newsletter"
      />
      <button type="submit" aria-label="Subscribe">
        <IconArrow size={18} />
      </button>
    </form>
  )
}
