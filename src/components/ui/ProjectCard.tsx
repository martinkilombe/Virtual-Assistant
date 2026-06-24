import { IconArrow } from '@/components/icons'

interface ProjectCardProps {
  title: string
  image: string
  children: React.ReactNode
}

export default function ProjectCard({ title, image, children }: ProjectCardProps) {
  return (
    <article className="iva-project-card">
      <div className="iva-project-card__img">
        <img src={image} alt="" loading="lazy" />
      </div>
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
