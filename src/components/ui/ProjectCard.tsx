import { IconArrow } from '@/components/icons'

interface ProjectCardProps {
  title: string
  children: React.ReactNode
}

export default function ProjectCard({ title, children }: ProjectCardProps) {
  return (
    <article className="iva-project-card">
      {/* Image placeholder — drop a real image in here later */}
      <div className="iva-project-card__img" aria-hidden="true" />
      <div className="iva-project-card__body">
        <h3>{title}</h3>
        <p>{children}</p>
        <a href="#contact" className="iva-project-card__more">
          Learn more <IconArrow size={17} />
        </a>
      </div>
    </article>
  )
}
