import { IconCheck } from '@/components/icons'

export default function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="iva-check-item">
      <span className="iva-check-item__icon">
        <IconCheck size={14} />
      </span>
      {children}
    </li>
  )
}
