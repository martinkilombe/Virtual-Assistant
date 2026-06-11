import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'light' | 'accent' | 'dark'
type Size = 'sm' | 'md' | 'lg'

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined
  variant?: Variant
  size?: Size
}

type ButtonAsAnchor = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  variant?: Variant
  size?: Size
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const cls = `iva-btn iva-btn--${variant} iva-btn--${size} ${className}`.trim()

  if ('href' in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as ButtonAsAnchor
    return (
      <a href={href} className={cls} {...anchorRest}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  )
}
