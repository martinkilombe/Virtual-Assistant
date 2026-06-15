import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'

function FAQItem({
  n,
  q,
  children,
}: {
  n: string
  q: string
  children: React.ReactNode
}) {
  return (
    <div className="iva-faq">
      <h4 className="iva-faq__q">
        <span className="iva-faq__n">{n}.</span> {q}
      </h4>
      <p className="iva-faq__a">{children}</p>
    </div>
  )
}

export default function About() {
  return (
    <section className="iva-section iva-section--white" id="about">
      <div className="iva-container iva-about">
        {/* Media collage — image placeholders, drop real images in here later */}
        <div className="iva-about__media">
          <div className="iva-about__img1" aria-hidden="true" />
          <div className="iva-about__img2" aria-hidden="true" />
          <div className="iva-about__img3" aria-hidden="true" />
          <div className="iva-about__badge" aria-label="9+ years matching great assistants">
            <span className="iva-about__badge-num">9+</span>
            <span className="iva-about__badge-lab">
              years matching
              <br />
              great assistants
            </span>
          </div>
        </div>

        {/* Copy */}
        <div className="iva-about__copy">
          <Eyebrow>About Us</Eyebrow>
          <h2>
            Our business is to make your life easier &amp; more comfortable.
          </h2>
          <p className="iva-lead">
            From inbox triage to calendar wrangling and invoicing, our
            assistants quietly handle the busywork that keeps a business
            running — reliably, every day.
          </p>

          <FAQItem n="01" q="How can we help your business?">
            We match you with a vetted assistant who learns your tools and
            workflows, then takes recurring tasks off your plate in days, not
            weeks.
          </FAQItem>
          <FAQItem n="02" q="Why work with Instant VA?">
            Every assistant is background-checked, fluent in English, and
            backed by a dedicated success manager — so quality stays consistent
            as you grow.
          </FAQItem>

          <Button href="#contact" variant="primary" size="md">
            Read More
          </Button>
        </div>
      </div>
    </section>
  )
}
