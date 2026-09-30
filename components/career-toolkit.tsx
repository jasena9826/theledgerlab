import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const tools = [
  'NetSuite',
  'BlackLine',
  'QuickBooks',
  'Microsoft Excel',
  'Financial Reconciliation',
  'Accounts Payable',
  'General Ledger Support',
  'Financial Analysis',
  'GAAP Research',
  'Business Operations',
  'Process Improvement',
  'AI-Assisted Productivity',
]

export function CareerToolkit() {
  return (
    <section aria-labelledby="toolkit-title" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading id="toolkit-title" eyebrow="Career Toolkit" title="Systems, skills & tools." />
        </Reveal>

        <Reveal>
          <ul className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm text-ivory/90 transition-colors hover:border-gold hover:text-gold"
              >
                {tool}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
