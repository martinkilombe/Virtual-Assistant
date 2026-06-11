export function smoothTo(href: string) {
  if (!href.startsWith('#')) return
  const id = href.slice(1)
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.getElementById(id)
  if (!el) return
  const y = el.getBoundingClientRect().top + window.scrollY - 90
  window.scrollTo({ top: y, behavior: 'smooth' })
}
