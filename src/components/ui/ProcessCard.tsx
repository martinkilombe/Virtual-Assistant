interface ProcessCardProps {
  step: number
  title: string
  children: React.ReactNode
}

export default function ProcessCard({ step, title, children }: ProcessCardProps) {
  return (
    <article className="iva-process-card">
      <div className="iva-process-card__step">{step}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  )
}
