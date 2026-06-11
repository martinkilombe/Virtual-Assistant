interface EyebrowProps {
  children: React.ReactNode
  align?: 'left' | 'center'
  color?: 'default' | 'white'
}

export default function Eyebrow({
  children,
  align = 'left',
  color = 'default',
}: EyebrowProps) {
  const cls = [
    'iva-eyebrow',
    align === 'center' ? 'iva-eyebrow--center' : '',
    color === 'white' ? 'iva-eyebrow--white' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return <span className={cls}>{children}</span>
}
