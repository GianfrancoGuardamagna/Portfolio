'use client'

import { ExternalLink } from 'lucide-react'
import { content, type Lang } from '@/lib/content'
import { AlienSprite, ShipSprite } from './sprites'

export function Projects({ lang }: { lang: Lang }) {
  const t = content.projects

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="font-display text-base text-yellow sm:text-lg">
        {t.label[lang]}
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {t.items.map((p, i) => (
          <article
            key={i}
            className="group relative flex flex-col border-2 border-green bg-surface p-5 transition-all hover:-translate-y-1 hover:[box-shadow:0_0_20px_rgba(0,255,159,0.35)]"
          >
            {/* Pixel corner decoration top-left */}
            <span
              aria-hidden="true"
              className="absolute -left-[2px] -top-[2px] h-3 w-3 bg-yellow"
            />

            {/* Decorative sprite */}
            {p.sprite === 'ship' && (
              <ShipSprite className="drift absolute right-3 top-3 h-7 w-7 opacity-70" />
            )}
            {p.sprite === 'alien' && (
              <AlienSprite className="drift absolute right-3 top-3 h-7 w-7 opacity-70" />
            )}

            <h3 className="font-display text-xs leading-relaxed text-green">
              {p.title[lang]}
            </h3>
            <p className="mt-1 text-sm text-muted">{p.subtitle[lang]}</p>

            <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-foreground">
              {p.body[lang]}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-muted px-2 py-0.5 text-xs text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center gap-2 border-t-2 border-green/30 pt-4">
              {p.blink && (
                <span className="arcade-blink h-2 w-2 bg-green" aria-hidden="true" />
              )}
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-green hover:underline"
                >
                  {p.status[lang]}
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              ) : (
                <span className="text-xs font-bold uppercase tracking-wide text-green">
                  {p.status[lang]}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
