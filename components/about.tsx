import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const focusAreas = ['Financial Analysis', 'Technology', 'Analytics', 'AI']

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading id="about-title" eyebrow="About Me" title="Grounded in the numbers. Focused on what's next." />
        </Reveal>

        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          <Reveal className="flex flex-col gap-6 text-lg leading-relaxed text-ivory/85 md:w-3/5">
            <p>
              I&apos;m an experienced accounting professional with hands-on experience in financial
              operations, accounts payable, reconciliations, general ledger accuracy, financial
              systems, and process improvement.
            </p>
            <p>
              I&apos;m currently pursuing a B.S. in Accounting while expanding my capabilities in
              financial analysis, technology, analytics, and AI &mdash; building on a practical
              foundation to help organizations work smarter with their information.
            </p>
          </Reveal>

          <Reveal delay={120} className="md:w-2/5">
            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-gold">Expanding Into</p>
              <ul className="mt-6 flex flex-col divide-y divide-border">
                {focusAreas.map((area, index) => (
                  <li key={area} className="flex items-center justify-between py-4">
                    <span className="text-ivory">{area}</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
