import { IconFacebook, IconTwitter, IconLinkedin } from '@/components/icons'
import NewsletterForm from '@/components/NewsletterForm'

const FOOT = [
  { h: 'Company',  links: ['About Us', 'How It Works', 'Careers', 'Case Studies'] },
  { h: 'Services', links: ['Research & Reports', 'Expensing & Invoicing', 'Scheduling', 'Marketing'] },
  { h: 'Support',  links: ['Contact', 'Pricing', 'Help Center', 'Privacy Policy'] },
]

export default function Footer() {
  return (
    <footer className="iva-footer">
      <div className="iva-container">
        <p className="iva-footer__word">
          Instant<em>VA</em>
        </p>
      </div>

      <div className="iva-container iva-footer__grid">
        {/* Brand column */}
        <div className="iva-footer__brand">
          <span className="iva-logo iva-logo--light">
            Instant<span className="t">V</span><span className="o">A</span>
          </span>
          <p>
            Helping ambitious teams stay productive with smart, reliable
            virtual assistant support — every day.
          </p>
          <div className="iva-footer__social">
            <a href="#" aria-label="Facebook"><IconFacebook size={18} /></a>
            <a href="#" aria-label="Twitter"><IconTwitter size={18} /></a>
            <a href="#" aria-label="LinkedIn"><IconLinkedin size={18} /></a>
          </div>
        </div>

        {/* Link columns */}
        {FOOT.map((col) => (
          <div key={col.h} className="iva-footer__col">
            <h5>{col.h}</h5>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div className="iva-footer__col">
          <span className="iva-footer__coral-label">Delegate smarter</span>
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
