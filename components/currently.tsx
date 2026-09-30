import { Compass, GraduationCap, Hammer, Sparkles } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const statusItems = [
  { label: 'Studying', value: 'B.S. in Accounting', icon: GraduationCap },
  {
    label: 'Exploring',
    value: 'Accounting internships and professional accounting opportunities',
    icon: Compass,
  },
  { label: 'Building', value: 'The Ledger Lab', icon: Hammer },
  { label: 'Developing', value: 'Accounting + Analytics + AI + Technology', icon: Sparkles },
]

export function Currently() {
  return (
    <section id="currently" aria-labelledby="currently-title" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading id="currently-title" eyebrow="Currently" title="What's on the dashboard." />
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Status Overview
              </p>
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-gold">
                <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                Active
              </p>
            </div>

            <dl className="grid sm:grid-cols-2 lg:grid-cols-4">
              {statusItems.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-4 border-b border-border p-6 last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2n)]:border-r lg:last:border-r-0"
                >
                  <dt className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold">
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                    {item.label}
                  </dt>
                  <dd className="font-serif text-xl leading-snug text-ivory">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
