export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className="section-heading max-w-3xl"><p className="eyebrow text-muted">{eyebrow}</p><h2 className="t-h2">{title}</h2>{intro && <p className="t-lead text-muted">{intro}</p>}</div>;
}
