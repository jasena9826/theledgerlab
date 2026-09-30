type SectionHeadingProps = {
  eyebrow: string
  title: string
  id?: string
}

export function SectionHeading({ eyebrow, title, id }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-col gap-4">
      <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
        <span className="h-px w-8 bg-gold" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="font-serif text-3xl leading-tight text-ivory text-balance md:text-5xl">
        {title}
      </h2>
    </div>
  )
}
