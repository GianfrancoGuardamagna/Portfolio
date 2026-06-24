'use client'

import Image from 'next/image'
import { content, type Lang } from '@/lib/content'
import { GithubIcon } from './icons'

export function About({ lang }: { lang: Lang }) {
  const t = content.about
  
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="font-display text-base text-yellow sm:text-lg">
        {t.label[lang]}
      </h2>

      <div className="mt-10 grid items-center gap-10 md:grid-cols-[220px_1fr]">
        <div className="mx-auto w-full max-w-[220px]">
          <div className="border-2 border-green glow-green">
            <Image
              src="/images/pixel-avatar.png"
              alt="Pixel-art portrait of Gianfranco Guardamagna"
              width={220}
              height={220}
              className="h-auto w-full"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
          <a
            href="https://github.com/GianfrancoGuardamagna/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 text-green transition-colors hover:text-green/70"
          >
            <span className="shrink-0"><GithubIcon size={16} /></span>
            <span className="font-display text-[11px] tracking-wide">GianfrancoGuardamagna</span>
          </a>
        </div>
        <div>
          <p className="text-pretty text-base leading-relaxed text-foreground sm:text-lg">
            {t.body[lang]}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {t.stats.map((s, i) => (
              <div
                key={i}
                className="glow-green border-2 border-green bg-surface px-3 py-4 text-center"
              >
                <span className="h-full flex items-center justify-center font-display text-[10px] leading-relaxed text-green sm:text-xs">
                  {s[lang]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
