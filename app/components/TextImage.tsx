import Image from "next/image";
import { Check } from "lucide-react";
import { asset } from "../lib/business";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";

export function TextImage({ id, eyebrow, title, text, image, alt, caption, captionSmall, points, action, side = "left", tone = "white" }: {
  id?: string; eyebrow: string; title: string; text: string; image: string; alt: string;
  caption?: string; captionSmall?: string; points?: string[];
  action: { label: string; href: string; external?: boolean };
  side?: "left" | "right"; tone?: "white" | "surface";
}) {
  return <section id={id} className={`section ${tone === "surface" ? "bg-surface" : "bg-paper"}`}>
    <div className="site-container grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <div className={`image-frame relative aspect-[4/3] ${side === "right" ? "lg:order-last" : ""}`}>
        <Image src={asset(image)} alt={alt} fill sizes="(min-width: 1024px) 596px, 100vw" className="object-cover" />
        {caption && <div className="photo-caption"><p className="font-semibold">{caption}</p>{captionSmall && <p className="t-small text-muted">{captionSmall}</p>}</div>}
      </div>
      <div>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <p className="text-muted">{text}</p>
        {points && <ul className="mt-6 space-y-4">{points.map(point => <li key={point} className="flex items-start gap-3"><Check size={20} aria-hidden="true" className="mt-1 shrink-0" /><span>{point}</span></li>)}</ul>}
        <div className="mt-8"><Button href={action.href} variant="outline" external={action.external}>{action.label}</Button></div>
      </div>
    </div>
  </section>;
}
