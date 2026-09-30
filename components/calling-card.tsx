import { ArrowUpRight } from 'lucide-react'

const roles = ['Accounting Professional', 'Business Strategist', 'Emerging Technologist']

export function CallingCard() {
  return (
    <article className="w-full max-w-xl overflow-hidden rounded-2xl border bg-card shadow-sm">
      <div className="h-2 bg-primary" aria-hidden="true" />

      <div className="flex flex-col gap-8 p-8 sm:p-12">
        <header className="flex flex-col gap-4">
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
            Juanita E Gaynor
          </h1>
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-primary sm:text-base">
            {roles.map((role, index) => (
              <li key={role} className="flex items-center gap-3">
                {index > 0 && <span aria-hidden="true">{'•'}</span>}
                {role}
              </li>
            ))}
          </ul>
        </header>

        <p className="text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
          I bring together accounting experience, business strategy, continuous learning, and
          technology to solve problems, build better systems, and turn information into action.
        </p>

        <footer className="flex flex-col gap-3 border-t pt-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            How to reach me
          </p>
          <a
            href="https://www.linkedin.com/in/juanitaegaynor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Connect on LinkedIn
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <p className="text-sm text-muted-foreground break-all">linkedin.com/in/juanitaegaynor</p>
        </footer>
      </div>
    </article>
  )
}
