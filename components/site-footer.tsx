import { links, profile } from '@/lib/site-config'

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
        <div>
          <p className="text-ivory">{profile.name} &copy; 2026</p>
          <p className="mt-1">Built with curiosity, strategy &amp; a whole lot of numbers.</p>
        </div>
        <a href={links.ledgerLab} className="text-gold underline-offset-4 hover:underline">
          The Ledger Lab
        </a>
      </div>
    </footer>
  )
}
