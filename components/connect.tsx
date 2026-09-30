import { Briefcase, Code, Mail, UserRound } from 'lucide-react'
import { links } from '@/lib/site-config'
import { Reveal } from './reveal'

const contactLinks = [
  { label: 'LinkedIn', href: links.linkedin, icon: UserRound },
  { label: 'GitHub', href: links.github, icon: Code },
  { label: 'Handshake', href: links.handshake, icon: Briefcase },
  { label: 'Email', href: links.email, icon: Mail },
]

export function Connect() {
  return (
    <section id="connect" aria-labelledby="connect-title" className="border-t border-border px-6 py-28">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Connect</p>
        <h2
          id="connect-title"
          className="mt-6 font-serif text-4xl leading-tight text-ivory text-balance md:text-6xl"
        >
          Let&apos;s turn numbers, ideas, and opportunities into something meaningful.
        </h2>

        <ul className="mt-12 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
          {contactLinks.map((link) => {
            const isExternal = link.href.startsWith('http')
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="flex items-center justify-center gap-2 rounded-full border border-gold/50 px-5 py-3 text-sm text-ivory transition-colors hover:bg-gold hover:text-background"
                >
                  <link.icon className="h-4 w-4" aria-hidden="true" />
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </Reveal>
    </section>
  )
}
