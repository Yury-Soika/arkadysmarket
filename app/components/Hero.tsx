import Image from "next/image";
import { MapPin } from "lucide-react";
import { asset, business } from "../lib/business";
import type { HomeContent } from "../content/home";
import { Button } from "./Button";

export function Hero({ copy }: { copy: HomeContent }) {
  return <section className="hero bg-dark text-paper">
    <div className="site-container grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="image-frame relative order-first aspect-[4/3] bg-surface lg:order-last">
        <Image src={asset("/images/bread.jpg")} alt={copy.heroAlt} fill sizes="(min-width: 1650px) 696px, (min-width: 1024px) 596px, 100vw" className="object-cover" priority />
        <div className="photo-caption"><p className="font-semibold">{copy.heroCaption}</p><p className="t-small text-muted">{copy.heroCaptionSmall}</p></div>
      </div>
      <div>
        <p className="eyebrow text-accent">{copy.eyebrow}</p>
        <h1 className="t-display mt-6">{copy.title}</h1>
        <p className="t-lead mt-6 text-dark-muted">{copy.intro}</p>
        <div className="hero-actions mt-8 flex flex-wrap gap-4"><Button href={business.directions} external><MapPin size={18} aria-hidden="true" />{copy.directions}</Button><Button href="#shelves" variant="outline-light">{copy.browse}</Button></div>
      </div>
    </div>
  </section>;
}
