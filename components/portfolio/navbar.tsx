'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { content, type Lang } from '@/lib/content'

type NavbarProps = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const links = [
  { id: 'about', key: 'about' as const },
  { id: 'skills', key: 'skills' as const },
  { id: 'projects', key: 'projects' as const },
  { id: 'contact', key: 'contact' as const },
]

export function Navbar({ lang, setLang }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-2 border-green bg-background/85 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="font-display text-sm text-green text-glow-green"
        >
          GG.DEV
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="text-sm uppercase tracking-wide text-foreground transition-colors hover:text-green"
              >
                {content.nav[l.key][lang]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LangToggle lang={lang} setLang={setLang} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="border-2 border-green p-1.5 text-green md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-1 border-t-2 border-green bg-surface px-4 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm uppercase tracking-wide text-foreground hover:text-green"
              >
                {content.nav[l.key][lang]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

function LangToggle({ lang, setLang }: NavbarProps) {
  return (
    <div
      className="flex border-2 border-green text-xs font-bold"
      role="group"
      aria-label="Language"
    >
      {(['en', 'es'] as const).map((code) => {
        const active = lang === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={`px-2.5 py-1 uppercase transition-colors ${
              active
                ? 'bg-green text-background'
                : 'bg-transparent text-green hover:bg-green/10'
            }`}
          >
            {code}
          </button>
        )
      })}
    </div>
  )
}
