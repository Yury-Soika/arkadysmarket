import { Clock, MapPin, Phone } from "lucide-react";
import type { HomeContent } from "../content/home";
import { business } from "../lib/business";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";

export function VisitSection({ copy }: { copy: HomeContent }) {
  return <section id="visit" className="section bg-paper">
    <div className="site-container grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
      <div>
        <SectionHeading eyebrow={copy.visitEyebrow} title={copy.visitTitle} intro={copy.visitText} />
        <div className="space-y-6">
          <div className="flex gap-4"><MapPin className="mt-1 shrink-0" size={22} aria-hidden="true" /><div><h3 className="font-semibold">{copy.addressLabel}</h3><address className="not-italic text-muted">{business.street}<br />{business.city}</address></div></div>
          <div className="flex gap-4"><Clock className="mt-1 shrink-0" size={22} aria-hidden="true" /><div><h3 className="font-semibold">{copy.hoursLabel}</h3><p className="text-muted">{copy.hoursDays} · {copy.hoursText}</p><p className="t-small mt-2 text-muted">{copy.hoursNote}</p></div></div>
          <div className="flex gap-4"><Phone className="mt-1 shrink-0" size={22} aria-hidden="true" /><div><h3 className="font-semibold">{copy.contactLabel}</h3><a href={business.phoneHref} className="inline-flex min-h-11 items-center underline underline-offset-4">{business.phoneDisplay}</a><br /><a href={`mailto:${business.email}`} className="inline-flex min-h-11 items-center break-all text-muted underline underline-offset-4">{business.email}</a></div></div>
        </div>
      </div>
      <div className="visit-card lg:mt-12">
        <div className="icon-plate"><MapPin aria-hidden="true" size={24} /></div>
        <p className="t-small mt-6 text-muted">{copy.visitCardLabel}</p>
        <h3 className="t-h2 mt-3">{copy.visitCardTitle}</h3>
        <p className="mt-6 font-medium">{copy.visitCardText}</p>
        <p className="text-muted">{business.city}</p>
        <div className="mt-8"><Button href={business.directions} external>{copy.directions}</Button></div>
        <div className="mt-6 border-t border-line pt-6"><a href={business.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center t-small underline underline-offset-4">{copy.storyAction}</a></div>
      </div>
    </div>
  </section>;
}
