import Link from 'next/link'
import { IconArrow } from '@/components/icons'

interface ProjectCardProps {
  title: string
  image: string
  children: React.ReactNode
  href?: string
  category?: string
}

export default function ProjectCard({ title, image, children, href = '#contact', category }: ProjectCardProps) {
  return (
    <article className="iva-project-card">
      <div className="iva-project-card__img">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="iva-project-card__body">
        {category && (
          <span className="iva-project-card__cat">{category}</span>
        )}
        <h3>{title}</h3>
        <p>{children}</p>
        <Link href={href} className="iva-project-card__more">
          Read case study <IconArrow size={17} />
        </Link>
      </div>
    </article>
  )
}
