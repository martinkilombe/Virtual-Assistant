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
        <span className="iva-faq__n">{n}</span> {q}
      </h4>
      <p className="iva-faq__a">{children}</p>
    </div>
  )
}

export default function About() {
  return (
    <section className="iva-section iva-section--paper" id="about">
      <div className="iva-container iva-about">
        {/* Media — single quiet frame with one floating stat */}
        <div className="iva-about__media">
          <div className="iva-about__frame" aria-hidden="true" />
          <div className="iva-about__badge" aria-label="9 years matching great assistants">
            <span className="iva-about__badge-num">9</span>
            <span className="iva-about__badge-lab">years of matching</span>
          </div>
        </div>

        {/* Copy */}
        <div className="iva-about__copy">
          <Eyebrow>About</Eyebrow>
          <h2 className="iva-serif">
            We make the running of a business feel <em>effortless</em>.
          </h2>
          <p className="iva-lead">
            From inbox triage to calendar wrangling and invoicing, our
            assistants quietly handle the busywork that keeps a business
            moving, reliably, every single day.
          </p>

          <FAQItem n="A" q="How we help your business">
            We match you with a vetted assistant who learns your tools and
            workflows, then takes recurring tasks off your plate in days,
            not weeks.
          </FAQItem>
          <FAQItem n="B" q="Why teams stay with us">
            Every assistant is background-checked, fluent in English, and
            backed by a dedicated success manager, so quality holds steady
            as you grow.
          </FAQItem>

          <Button href="#contact" variant="secondary" size="md">
            Read our story
          </Button>
        </div>
      </div>
    </section>
  )
}
