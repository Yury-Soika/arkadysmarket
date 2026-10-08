import { Croissant, ShoppingBasket, Utensils } from "lucide-react";
import type { HomeContent } from "../content/home";
import { SectionHeading } from "./SectionHeading";

const icons = { bread: Croissant, deli: Utensils, pantry: ShoppingBasket };

export function Features({ copy }: { copy: HomeContent }) {
  return <section id="shelves" className="section bg-surface">
    <div className="site-container">
      <SectionHeading eyebrow={copy.shelvesEyebrow} title={copy.shelvesTitle} intro={copy.shelvesIntro} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{copy.shelves.map(item => {
        const Icon = icons[item.icon as keyof typeof icons];
        return <article key={item.icon} className="feature-card"><div className="icon-plate"><Icon size={24} strokeWidth={1.6} aria-hidden="true" /></div><h3 className="t-h3 mt-6">{item.title}</h3><p className="mt-4 text-muted">{item.text}</p></article>;
      })}</div>
    </div>
  </section>;
}
