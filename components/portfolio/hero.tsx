'use client'

import { content, type Lang } from '@/lib/content'
import { ShipSprite } from './sprites'

export function Hero({ lang }: { lang: Lang }) {
  const t = content.hero

  return (
    <section
      id="top"
      className="scanlines relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24 sm:px-6"
    >
      {/* Floating ship sprite */}
      <ShipSprite className="drift absolute right-[12%] top-[18%] h-10 w-10 opacity-80 sm:h-14 sm:w-14" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="font-display text-2xl leading-relaxed text-green text-glow-green sm:text-4xl md:text-5xl">
          <span className="text-balance">{t.title[lang]}</span>
          <span className="arcade-blink ml-1 inline-block text-green">_</span>
        </h1>

        <p className="mx-auto mt-8 max-w-sm text-pretty text-base leading-relaxed text-foreground sm:text-lg">
          {t.subtitle[lang]}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="glow-green w-full bg-green px-6 py-3 text-sm font-bold uppercase tracking-wide text-background transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            {t.viewProjects[lang]}
          </a>
          <a
            href="#contact"
            className="w-full border-2 border-green px-6 py-3 text-sm font-bold uppercase tracking-wide text-green transition-colors hover:bg-green/10 sm:w-auto"
          >
            {t.contactMe[lang]}
          </a>
        </div>
      </div>

      <p className="arcade-blink absolute bottom-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap font-display text-[10px] text-yellow sm:text-xs">
        {t.insertCoin[lang]}
      </p>
    </section>
  )
}
