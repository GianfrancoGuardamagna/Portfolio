'use client'

import { Download, Mail } from 'lucide-react'
import { content, contact as info, type Lang } from '@/lib/content'
import { StarCluster } from './sprites'
import { GithubIcon, LinkedinIcon, PhoneIcon, WhatsappIcon } from './icons'

export function Contact({ lang }: { lang: Lang }) {
  const t = content.contact

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <StarCluster className="absolute right-6 top-12 h-8 w-8 opacity-70" />

      <h2 className="font-display text-base text-yellow sm:text-lg">
        {t.label[lang]}
      </h2>

      <div className="mt-10 border-2 border-green bg-surface p-6 glow-green sm:p-10">
        <h3 className="font-display text-lg leading-relaxed text-green text-glow-green sm:text-2xl">
          {t.headline[lang]}
        </h3>
        <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-foreground sm:text-lg">
          {t.body[lang]}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={lang === 'en' ? '/CV/CV EN.pdf' : '/CV/CV ES.pdf'}
            download
            className="flex items-center justify-center gap-2 border-2 border-green bg-green px-5 py-3 text-sm font-bold uppercase tracking-wide text-background transition-transform hover:-translate-y-0.5"
          >
            <Download size={16} aria-hidden="true" />
            {t.resumeInfo[lang]}
          </a>
          <a
            href={`mailto:${info.email}`}
            className="flex items-center justify-center gap-2 border-2 border-green bg-green px-5 py-3 text-sm font-bold uppercase tracking-wide text-background transition-transform hover:-translate-y-0.5"
          >
            <Mail size={16} aria-hidden="true" />
            {t.emailInfo[lang]}
          </a>
		    <a
            href={info.phoneHref}
            className="flex items-center justify-center gap-2 border-2 border-green px-5 py-3 text-sm font-bold uppercase tracking-wide text-green transition-colors hover:bg-green/10"
          >
            <PhoneIcon size={16} aria-hidden="true" />
            {t.phoneInfo[lang]}
          </a>
		    <a
            href={info.whatsapp}
            className="flex items-center justify-center gap-2 border-2 border-green px-5 py-3 text-sm font-bold uppercase tracking-wide text-green transition-colors hover:bg-green/10"
          >
            <WhatsappIcon size={16} aria-hidden="true" />
            {t.whatsappInfo[lang]}
          </a>
          <a
            href={info.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-2 border-green px-5 py-3 text-sm font-bold uppercase tracking-wide text-green transition-colors hover:bg-green/10"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
		  <a
            href={info.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-2 border-green px-5 py-3 text-sm font-bold uppercase tracking-wide text-green transition-colors hover:bg-green/10"
          >
            <GithubIcon size={16} />
            Github
          </a>
        </div>
      </div>

      <p className="mt-12 text-center text-sm text-muted">{t.footer[lang]}</p>
    </section>
  )
}
