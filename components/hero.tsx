import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { profile } from '@/lib/site-config'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden px-6 pb-24 pt-36 md:pb-32 md:pt-44"
    >
      <div className="ledger-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="rounded-full border border-gold/60 p-2">
          <div className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#2a2419] to-[#111] md:h-44 md:w-44">
            {profile.photo ? (
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="176px"
                className="object-cover"
                priority
              />
            ) : (
              <span className="font-serif text-5xl text-gold md:text-6xl" aria-hidden="true">
                {profile.monogram}
              </span>
            )}
          </div>
        </div>

        <p className="mt-10 text-xs uppercase tracking-[0.35em] text-gold">
          Where Experience Meets What&apos;s Next
        </p>

        <h1
          id="hero-title"
          className="mt-5 font-serif text-5xl uppercase tracking-[0.08em] text-ivory md:text-7xl"
        >
          {profile.name}
        </h1>

        <p className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm tracking-wide text-muted-foreground md:text-base">
          {profile.roles.map((role, index) => (
            <span key={role} className="flex items-center gap-3">
              {index > 0 && <span className="text-gold" aria-hidden="true">•</span>}
              {role}
            </span>
          ))}
        </p>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/85 text-pretty md:text-xl">
          {profile.statement}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Explore My Work
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#connect"
            className="inline-flex items-center justify-center rounded-full border border-gold/60 px-7 py-3 text-sm font-medium text-ivory transition-colors hover:border-gold hover:text-gold"
          >
            Connect With Me
          </a>
        </div>
      </div>
    </section>
  )
}
