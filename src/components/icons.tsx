import type { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

function SVGIcon({
  children,
  size = 24,
  fill = 'none',
  stroke = 'currentColor',
  ...rest
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={fill}
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  )
}

/* ---- Service icons ---- */
export function IconResearch(p: IconProps) {
  return (
    <SVGIcon {...p}>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="M15 15l5 5" />
      <path d="M8 11.5l1.8 1.8L13.2 9" />
    </SVGIcon>
  )
}

export function IconInvoice(p: IconProps) {
  return (
    <SVGIcon {...p}>
      <path d="M6 3h9l3 3v15l-2.2-1.4L13.6 21l-2.2-1.4L9.2 21 7 19.6 4 21V6z" />
      <path d="M8 9h7M8 12.5h7M8 16h4" />
    </SVGIcon>
  )
}

export function IconCalendar(p: IconProps) {
  return (
    <SVGIcon {...p}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
      <path d="M7.5 13.5l1.4 1.4 2.6-2.8" />
      <circle cx="16" cy="16.5" r="1.4" />
    </SVGIcon>
  )
}

export function IconRocket(p: IconProps) {
  return (
    <SVGIcon {...p}>
      <path d="M5 19c-1 1-1 3-1 3s2 0 3-1c.8-.8.8-1.6.4-2.4C6.6 18.2 5.8 18.2 5 19z" />
      <path d="M9 15c4-1 8-5 9.5-9.5C19 4 20 3 20 3s-1 1-2.5 1.5C13 6 9 10 8 14" />
      <path d="M9 15l-3-1 2-3M9 15l1 3 3-2" />
    </SVGIcon>
  )
}

/* ---- UI glyphs ---- */
export function IconSearch(p: IconProps) {
  return (
    <SVGIcon {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="M16 16l4.5 4.5" />
    </SVGIcon>
  )
}

export function IconBag(p: IconProps) {
  return (
    <SVGIcon {...p}>
      <path d="M6 8h12l-1 12.5H7z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </SVGIcon>
  )
}

export function IconPhone(p: IconProps) {
  return (
    <SVGIcon {...p}>
      <path d="M5 4h3.5l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L15 17l4 1.5V22a2 2 0 0 1-2.2 2A17 17 0 0 1 3 8.2 2 2 0 0 1 5 6z" />
    </SVGIcon>
  )
}

export function IconMail(p: IconProps) {
  return (
    <SVGIcon {...p}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="M4 7l8 6 8-6" />
    </SVGIcon>
  )
}

export function IconPin(p: IconProps) {
  return (
    <SVGIcon {...p}>
      <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </SVGIcon>
  )
}

export function IconHeadset(p: IconProps) {
  return (
    <SVGIcon {...p}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <path d="M4 13h2.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM20 13h-2.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1H19a1 1 0 0 0 1-1z" />
      <path d="M19 19v.5a2.5 2.5 0 0 1-2.5 2.5H13" />
    </SVGIcon>
  )
}

export function IconArrow(p: IconProps) {
  return (
    <SVGIcon {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </SVGIcon>
  )
}

export function IconArrowL(p: IconProps) {
  return (
    <SVGIcon {...p}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </SVGIcon>
  )
}

export function IconCheck(p: IconProps) {
  return (
    <SVGIcon {...p}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </SVGIcon>
  )
}

export function IconMenu(p: IconProps) {
  return (
    <SVGIcon {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </SVGIcon>
  )
}

export function IconX(p: IconProps) {
  return (
    <SVGIcon {...p}>
      <path d="M6 6l12 12M18 6L6 18" />
    </SVGIcon>
  )
}

export function IconQuote(p: IconProps) {
  return (
    <SVGIcon {...p} fill="currentColor" stroke="none">
      <path d="M9.5 6.5C6.5 7.8 5 10 5 13v4.5h5.5V12H8c0-1.8.9-3 2.7-3.6zM19 6.5C16 7.8 14.5 10 14.5 13v4.5H20V12h-2.5c0-1.8.9-3 2.7-3.6z" />
    </SVGIcon>
  )
}

export function IconFacebook(p: IconProps) {
  return (
    <SVGIcon {...p} fill="currentColor" stroke="none">
      <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4h1.4V5.5c-.3 0-1.1-.1-2.1-.1-2 0-3.4 1.2-3.4 3.5v2.3H8.5V14h2.2v7z" />
    </SVGIcon>
  )
}

export function IconTwitter(p: IconProps) {
  return (
    <SVGIcon {...p} fill="currentColor" stroke="none">
      <path d="M18.5 5.5h2.3l-5 5.7 5.9 7.8h-4.6l-3.6-4.7-4.1 4.7H6.9l5.4-6.1L6.6 5.5h4.7l3.3 4.3zm-.8 12h1.3L9.1 6.8H7.7z" />
    </SVGIcon>
  )
}

export function IconLinkedin(p: IconProps) {
  return (
    <SVGIcon {...p} fill="currentColor" stroke="none">
      <path d="M7 9.5H4.6V20H7zM5.8 5.2A1.4 1.4 0 1 0 5.8 8a1.4 1.4 0 0 0 0-2.8zM20 20h-2.4v-5.1c0-1.3-.5-2-1.5-2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V20H12s.03-9.6 0-10.5h2.4v1.5c.3-.5 1-1.3 2.5-1.3 1.8 0 3.1 1.2 3.1 3.7z" />
    </SVGIcon>
  )
}
