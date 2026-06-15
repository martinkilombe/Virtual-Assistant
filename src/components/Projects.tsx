import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import ProjectCard from '@/components/ui/ProjectCard'

const PROJECTS = [
  {
    image: '/assets/img/project-1.jpg',
    title: 'Project Management',
    text: 'We kept a 12-person agency on schedule across 40 live client projects.',
  },
  {
    image: '/assets/img/project-2.jpg',
    title: 'Media & Marketing',
    text: 'A daily social calendar and inbox triage that tripled a founder’s reach.',
  },
  {
    image: '/assets/img/project-3.jpg',
    title: 'Operations Support',
    text: 'Invoicing, scheduling, and CRM hygiene handled end-to-end for a SaaS team.',
  },
]

export default function Projects() {
  return (
    <section className="iva-section" id="work">
      <span className="iva-blob iva-work__ring" />
      <span className="iva-blob iva-work__orange" />

      <div className="iva-container">
        <div className="iva-head iva-head--center">
          <Eyebrow align="center">Case Studies</Eyebrow>
          <h2>Our recent work</h2>
          <p className="iva-lead">
            A look at how dedicated assistants quietly move the needle for
            the teams they support.
          </p>
        </div>

        <div className="iva-work__grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} image={p.image} title={p.title}>
              {p.text}
            </ProjectCard>
          ))}
        </div>

        <div className="iva-work__more">
          <Button href="#work" variant="outline" size="md">
            View All
          </Button>
        </div>
      </div>
    </section>
  )
}
