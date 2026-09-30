import { BookOpenCheck, Briefcase, Cpu, LineChart } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const expertise = [
  {
    title: 'Accounting',
    icon: BookOpenCheck,
    skills: ['Accounts Payable', 'Reconciliations', 'General Ledger', 'Financial Operations', 'GAAP'],
  },
  {
    title: 'Analysis',
    icon: LineChart,
    skills: ['Financial Analysis', 'Research', 'Problem Solving', 'Process Improvement'],
  },
  {
    title: 'Business',
    icon: Briefcase,
    skills: ['Operations', 'Strategy', 'Entrepreneurship', 'Project Management'],
  },
  {
    title: 'Technology',
    icon: Cpu,
    skills: ['NetSuite', 'BlackLine', 'QuickBooks', 'Excel', 'AI & Emerging Technology'],
  },
]

export function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading id="expertise-title" eyebrow="Expertise" title="Four disciplines, one way of thinking." />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((area, index) => (
            <Reveal key={area.title} delay={index * 80}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-gold/60">
                <area.icon className="h-6 w-6 text-gold" aria-hidden="true" />
                <h3 className="mt-6 font-serif text-2xl text-ivory">{area.title}</h3>
                <div className="my-5 h-px w-10 bg-gold/50 transition-all group-hover:w-16" aria-hidden="true" />
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  {area.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
