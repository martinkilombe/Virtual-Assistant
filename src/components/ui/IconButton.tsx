import type { ButtonHTMLAttributes } from 'react'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'dark'
  size?: 'md'
  label: string
}

export default function IconButton({
  variant = 'dark',
  size = 'md',
  label,
  children,
  className = '',
  ...rest
}: IconButtonProps) {
  const cls =
    `iva-icon-btn iva-icon-btn--${variant} iva-icon-btn--${size} ${className}`.trim()

  return (
    <button aria-label={label} className={cls} {...rest}>
      {children}
    </button>
  )
}
