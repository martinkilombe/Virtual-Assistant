import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import ProjectCard from '@/components/ui/ProjectCard'

const PROJECTS = [
  {
    slug: 'project-management',
    title: 'Project Management',
    category: 'Creative Agency',
    image: '/assets/img/work/project-management.jpg',
    text: 'We kept a 12-person agency on schedule across 40 live client projects.',
  },
  {
    slug: 'media-marketing',
    title: 'Media & Marketing',
    category: 'Creator / Founder',
    image: '/assets/img/work/media-marketing.jpg',
    text: "A daily social calendar and inbox triage that tripled a founder's reach.",
  },
  {
    slug: 'operations-support',
    title: 'Operations Support',
    category: 'SaaS / Tech',
    image: '/assets/img/work/operations-support.jpg',
    text: 'Invoicing, scheduling, and CRM hygiene handled end-to-end for a SaaS team.',
  },
]

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

        <div className="iva-work__grid">
          {PROJECTS.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              image={p.image}
              category={p.category}
              href={`/case-studies/${p.slug}`}
            >
              {p.text}
            </ProjectCard>
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
