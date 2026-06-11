import { IconArrow } from '@/components/icons'

interface ProjectCardProps {
  image: string
  title: string
  children: React.ReactNode
}

export default function ProjectCard({ image, title, children }: ProjectCardProps) {
  return (
    <article className="iva-project-card">
      <img className="iva-project-card__img" src={image} alt={title} />
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
