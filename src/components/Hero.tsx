import Button from '@/components/ui/Button'

const CLIENTS = ['Northwind', 'Loomly', 'Brightpath', 'Park & Co.', 'Cedar', 'Møller', 'Atlas']

const AVATARS = [12, 47, 65, 33]

export default function Hero() {
  return (
    <section className="iva-hero" id="top">
      <div className="iva-container iva-hero__inner">
        <div className="iva-hero__meta">
          <span className="iva-hero__status">
            <i aria-hidden="true" /> Available — taking on new clients
          </span>
          <span>Remote-first · Worldwide</span>
        </div>

        <h1 className="iva-hero__title">
          The quiet force <em>behind</em> ambitious founders.
        </h1>

        <div className="iva-hero__foot">
          <p className="iva-hero__lead">
            Hand the detail-heavy work to a dedicated assistant — and get back
            the hours only you can spend on growth.
          </p>

          <div className="iva-hero__cta">
            <Button href="#contact" variant="primary" size="lg">
              Book a free call
            </Button>
            <div className="iva-hero__trust">
              <div className="iva-hero__avatars" aria-hidden="true">
                {AVATARS.map((id) => (
                  <img key={id} src={`https://i.pravatar.cc/72?img=${id}`} alt="" />
                ))}
              </div>
              <p>
                Trusted by <strong>850+</strong> founders
              </p>
            </div>
          </div>
        </div>

        {/* Masthead marquee — client roster */}
        <div className="iva-marquee" aria-hidden="true">
          <div className="iva-marquee__track">
            {[...CLIENTS, ...CLIENTS].map((name, i) => (
              <span key={i} className="iva-marquee__item">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
