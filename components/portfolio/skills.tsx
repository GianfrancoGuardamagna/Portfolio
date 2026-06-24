'use client'

import { Zap, Database, Monitor, Wrench, Lock, type LucideIcon } from 'lucide-react'
import { content, type Lang } from '@/lib/content'

const icons: Record<string, LucideIcon> = {
  zap: Zap,
  database: Database,
  monitor: Monitor,
  wrench: Wrench,
  lock: Lock,
}

export function Skills({ lang }: { lang: Lang }) {
  const t = content.skills

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="font-display text-base text-yellow sm:text-lg">
        {t.label[lang]}
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {t.groups.map((group, gi) => {
          const Icon = icons[group.icon]
          return (
            <div
              key={gi}
              className="border-2 border-green bg-surface p-5"
            >
              <div className="mb-4 flex items-center gap-3">
                <Icon size={20} className="text-green" aria-hidden="true" />
                <h3 className="font-display text-[11px] text-foreground sm:text-xs">
                  {group.title[lang]}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-2 border-muted bg-background px-2.5 py-1 text-sm text-foreground transition-all hover:border-green hover:text-green hover:[box-shadow:0_0_8px_rgba(0,255,159,0.4)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
