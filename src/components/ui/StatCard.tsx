interface StatCardProps {
  value: string
  label: string
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="iva-stat">
      <span className="iva-stat__value">{value}</span>
      <span className="iva-stat__label">{label}</span>
    </div>
  )
}
