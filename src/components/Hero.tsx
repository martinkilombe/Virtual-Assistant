import Button from '@/components/ui/Button'

const TRUST_LOGOS = ['Accenture', 'Deloitte', 'Notion', 'Stripe', 'HubSpot']

export default function Hero() {
  return (
    <section className="iva-hero" id="top">
      <div className="iva-hero__grid">
        {/* Copy side */}
        <div className="iva-hero__copy">
          <span className="iva-hero__ghost" aria-hidden="true" />

          <h1 className="iva-hero__title">
            Independent professionals who work remotely to help your business.
          </h1>

          <p className="iva-hero__lead">
            Hand off the time-consuming, detail-heavy work to a dedicated
            virtual assistant — so you can focus on the parts of your business
            only you can do.
          </p>

          <div className="iva-hero__cta">
            <Button href="#contact" variant="primary" size="lg">
              Get Started
            </Button>
            <Button href="#about" variant="secondary" size="lg">
              How It Works
            </Button>
          </div>

          <div className="iva-hero__trust">
            <div className="iva-hero__avatars" aria-hidden="true">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`/assets/img/portrait-${i}.jpg`}
                  alt=""
                  width={36}
                  height={36}
                />
              ))}
            </div>
            <p>
              Trusted by <strong>850+</strong> founders &amp; small teams
            </p>
          </div>
        </div>

        {/* Media side */}
        <div className="iva-hero__media" aria-hidden="true">
          <div className="iva-hero__photo">
            <img
              src="/assets/img/hero-headset.jpg"
              alt="A virtual assistant working at a laptop with a headset"
            />
          </div>
        </div>
      </div>

      {/* Trust logo strip */}
      <div className="iva-trust-strip">
        <div className="iva-container iva-trust-strip__inner">
          <span className="iva-trust-strip__label">Trusted by teams at</span>
          <div className="iva-trust-strip__logos" aria-hidden="true">
            {TRUST_LOGOS.map((name) => (
              <span key={name} className="iva-trust-strip__logo">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
