'use client'

import { useState } from 'react'
import type { Lang } from '@/lib/content'
import { Starfield } from '@/components/portfolio/starfield'
import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Skills } from '@/components/portfolio/skills'
import { Projects } from '@/components/portfolio/projects'
import { Contact } from '@/components/portfolio/contact'

export default function Page() {
  const [lang, setLang] = useState<Lang>('en')

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <div className="relative z-10">
        <Navbar lang={lang} setLang={setLang} />
        <main>
          <Hero lang={lang} />
          <About lang={lang} />
          <Skills lang={lang} />
          <Projects lang={lang} />
          <Contact lang={lang} />
        </main>
      </div>
    </div>
  )
}
