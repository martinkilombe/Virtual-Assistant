import Link from 'next/link'
import { IconFacebook, IconTwitter, IconLinkedin } from '@/components/icons'
import NewsletterForm from '@/components/NewsletterForm'

const FOOT = [
  { h: 'Company',  links: [{ label: 'About Us', href: '/about' }, { label: 'Case Studies', href: '/case-studies' }] },
  { h: 'Services', links: [
    { label: 'Research & Reports', href: '/services#research-reports' },
    { label: 'Expensing & Invoicing', href: '/services#expensing-invoicing' },
    { label: 'Scheduling', href: '/services#scheduling-planning' },
    { label: 'Marketing', href: '/services#marketing-social' },
  ] },
  { h: 'Support',  links: [
    { label: 'Contact', href: '/contact' },
    { label: 'Help Center', href: '/help-center' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ] },
]

export default function Footer() {
  return (
    <footer className="iva-footer">
      <div className="iva-container iva-footer__grid">
        {/* Brand column */}
        <div className="iva-footer__brand">
          <span className="iva-logo iva-logo--light">
            Instant<span className="t">V</span><span className="o">A</span>
          </span>
          <p>
            Real, vetted assistants who take the recurring work off your
            plate. Not bots. Not gig hires.
          </p>
          <div className="iva-footer__social">
            <a href="#" aria-label="Facebook"><IconFacebook size={18} /></a>
            <a href="#" aria-label="Twitter"><IconTwitter size={18} /></a>
            <a href="#" aria-label="LinkedIn"><IconLinkedin size={18} /></a>
          </div>

          <div className="iva-footer__contact">
            <a href="tel:+10000000000">+1 (000) 000-0000</a>
            <a href="mailto:hello@instantva.co">hello@instantva.co</a>
          </div>
        </div>

        {/* Link columns */}
        {FOOT.map((col) => (
          <div key={col.h} className="iva-footer__col">
            <h5>{col.h}</h5>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div className="iva-footer__col">
          <h5>Stay in the loop</h5>
          <p className="iva-footer__note">
            Tips on delegating and reclaiming your week.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="iva-container iva-footer__bar">
        <span>© 2026 Instant VA. All rights reserved.</span>
        <span>Made for busy founders &amp; small teams.</span>
      </div>
    </footer>
  )
}
