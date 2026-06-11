import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="iva-hero" id="top">
      <div className="iva-hero__grid">
        {/* Copy side */}
        <div className="iva-hero__copy">
          <span className="iva-blob iva-hero__b1" />
          <span className="iva-blob iva-hero__b2" />
          <span className="iva-hero__ghost" aria-hidden="true">VA</span>

          <h1 className="iva-hero__title">
            Independent professionals who work{' '}
            <span className="iva-swoosh">remotely</span> to help your business.
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
            <Button href="#about" variant="light" size="lg">
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
                  width={44}
                  height={44}
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
          <span className="iva-blob iva-hero__ring" />
          <span className="iva-blob iva-hero__dot" />
          <span className="iva-blob iva-hero__orange" />
          <div className="iva-hero__photo">
            <img
              src="/assets/img/hero-headset.jpg"
              alt="A virtual assistant working at a laptop with a headset"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
