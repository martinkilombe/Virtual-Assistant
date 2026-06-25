import Link from 'next/link'
import { IconArrow } from '@/components/icons'
import type { CaseStudy } from '@/data/case-studies'

interface CaseStudyCardProps {
  cs: CaseStudy
  headingAs?: 'h2' | 'h3'
}

export default function CaseStudyCard({ cs, headingAs: Tag = 'h3' }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${cs.slug}`} className="iva-cs-card">
      <div className="iva-cs-card__img">
        {cs.image && <img src={cs.image} alt="" loading="lazy" />}
      </div>
      <div className="iva-cs-card__body">
        <span className="iva-cs-card__cat">{cs.category}</span>
        <Tag className="iva-cs-card__title">{cs.heroHeadline}</Tag>
        <p className="iva-cs-card__excerpt">{cs.excerpt}</p>
        <span className="iva-cs-card__metric">{cs.keyMetric}</span>
        <span className="iva-cs-card__link">
          Read case study <IconArrow size={15} />
        </span>
      </div>
    </Link>
  )
}
