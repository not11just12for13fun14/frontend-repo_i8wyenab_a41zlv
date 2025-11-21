import { useEffect, useState } from 'react'

const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'principles', label: 'Principles' },
  { id: 'essays', label: 'Essays' },
  { id: 'resources', label: 'Resources' },
]

export default function Navbar() {
  const [active, setActive] = useState('overview')

  useEffect(() => {
    const handler = () => {
      let current = 'overview'
      navItems.forEach((item) => {
        const el = document.getElementById(item.id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120) {
          current = item.id
        }
      })
      setActive(current)
    }

    window.addEventListener('scroll', handler)
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-[rgba(250,250,246,0.7)] border-b border-neutral-200/60">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between h-16">
          <div className="font-light tracking-wide text-neutral-900 text-lg">Bashar Archive</div>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm transition-colors pb-1 border-b ${
                  active === item.id
                    ? 'text-neutral-900 border-neutral-800'
                    : 'text-neutral-600 border-transparent hover:text-neutral-900'
                }`}
                aria-label={`Go to ${item.label}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <select
              aria-label="Section selector"
              className="bg-transparent text-sm text-neutral-700 border border-neutral-300 rounded-md px-2 py-1"
              value={active}
              onChange={(e) => scrollTo(e.target.value)}
            >
              {navItems.map((n) => (
                <option key={n.id} value={n.id}>{n.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}
