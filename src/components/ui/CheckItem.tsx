export default function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="iva-check-item">
      <span className="iva-check-item__icon" aria-hidden="true" />
      {children}
    </li>
  )
}
