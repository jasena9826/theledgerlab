import { ArrowUpRight } from 'lucide-react'
import { links } from '@/lib/site-config'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const secondaryProjects = [
  {
    number: '02',
    title: 'Career Launch Command Center',
    description:
      'A Notion-based career management system created to organize opportunities, applications, networking, skills development, internships, and professional goals.',
    cta: 'View Project',
    href: links.careerCommandCenter,
  },
  {
    number: '03',
    title: 'Accounting & Business Projects',
    description:
      'A collection of academic and independent work involving financial statement analysis, FASB/GAAP research, cash-flow analysis, sustainable operations, and business decision-making.',
    cta: 'Explore Projects',
    href: links.accountingProjects,
  },
]

// Decorative bar chart that hints at the "dashboard" feel of The Ledger Lab.
const chartBars = [38, 52, 44, 66, 58, 74, 88]

export function FeaturedWork() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading id="work-title" eyebrow="Featured Work" title="Projects in progress." />
        </Reveal>

        <Reveal>
          <article className="relative overflow-hidden rounded-3xl border border-gold/50 bg-gradient-to-br from-[#1d1911] via-card to-card p-8 md:p-12">
            <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-gold">01</span>
                  <span className="rounded-full border border-gold/50 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold">
                    Flagship
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-4xl text-ivory md:text-5xl">The Ledger Lab</h3>
                <p className="mt-3 text-lg italic text-gold">
                  Where Accounting, Analysis &amp; Technology Meet.
                </p>
                <p className="mt-6 leading-relaxed text-ivory/80">
                  An evolving accounting and technology portfolio showcasing financial analysis,
                  accounting research, business problem-solving, and technology projects.
                </p>
                <a
                  href={links.ledgerLab}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Enter the Lab
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div
                className="flex h-40 w-full items-end gap-2 border-b border-l border-gold/30 p-3 md:w-72"
                aria-hidden="true"
              >
                {chartBars.map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-gold/20 to-gold/70"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {secondaryProjects.map((project, index) => (
            <Reveal key={project.number} delay={index * 100}>
              <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-colors hover:border-gold/60">
                <span className="font-mono text-sm text-gold">{project.number}</span>
                <h3 className="mt-5 font-serif text-2xl text-ivory md:text-3xl">{project.title}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{project.description}</p>
                <a
                  href={project.href}
                  className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-ivory"
                >
                  {project.cta}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
