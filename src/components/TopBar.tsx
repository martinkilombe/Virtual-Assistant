import { IconMail, IconPhone, IconPin, IconFacebook, IconTwitter, IconLinkedin } from '@/components/icons'

export default function TopBar() {
  return (
    <div className="iva-topbar">
      <div className="iva-container iva-topbar__row">
        <div className="iva-topbar__info">
          <a href="mailto:hello@instantva.co">
            <IconMail size={15} /> hello@instantva.co
          </a>
          <a href="tel:0008596256">
            <IconPhone size={15} /> (000) 859-6256
          </a>
          <span className="iva-topbar__loc">
            <IconPin size={15} /> Remote-first, worldwide
          </span>
        </div>
        <div className="iva-topbar__social">
          <span>Follow us</span>
          <a href="#" aria-label="Facebook"><IconFacebook size={15} /></a>
          <a href="#" aria-label="Twitter"><IconTwitter size={15} /></a>
          <a href="#" aria-label="LinkedIn"><IconLinkedin size={15} /></a>
        </div>
      </div>
    </div>
  )
}
