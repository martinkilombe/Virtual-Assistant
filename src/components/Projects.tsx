import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import CaseStudyCard from '@/components/ui/CaseStudyCard'
import { CASE_STUDIES } from '@/data/case-studies'

export default function Projects() {
  return (
    <section className="iva-section iva-section--panel" id="work">
      <div className="iva-container">
        <div className="iva-head iva-head--center">
          <Eyebrow align="center">Case Studies</Eyebrow>
          <h2 className="iva-serif">
            Quiet work, <em>loud</em> results.
          </h2>
          <p className="iva-lead">
            A look at how dedicated assistants move the needle for the teams
            they support.
          </p>
        </div>

        <div className="iva-cs-grid">
          {CASE_STUDIES.map((cs) => (
            <CaseStudyCard key={cs.slug} cs={cs} headingAs="h3" />
          ))}
        </div>

        <div className="iva-work__more">
          <Button href="/case-studies" variant="outline" size="md">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  )
}
