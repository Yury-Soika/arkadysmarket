import Image from "next/image";
import type { HomeContent } from "../content/home";
import { asset, business } from "../lib/business";

export function Footer({ copy }: { copy: HomeContent }) {
  return <footer className="bg-dark py-12 text-paper lg:py-16"><div className="site-container">
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div><a href="#main" className="flex min-h-11 items-center gap-3"><Image src={asset("/images/logo.jpg")} alt="" width={40} height={40} className="site-logo" /><span className="font-semibold">{business.name}</span></a><p className="t-small mt-4 max-w-sm text-dark-muted">{copy.footer}</p></div>
      <div><address className="not-italic">{business.street}<br />{business.city}</address><a className="mt-4 inline-flex min-h-11 items-center underline underline-offset-4" href={business.directions} target="_blank" rel="noopener noreferrer">{copy.directions}</a></div>
      <div><a className="inline-flex min-h-11 items-center" href={business.phoneHref}>{business.phoneDisplay}</a><br /><a className="inline-flex min-h-11 items-center break-all t-small text-dark-muted" href={`mailto:${business.email}`}>{business.email}</a><br /><a className="inline-flex min-h-11 items-center underline underline-offset-4" href={business.facebook} target="_blank" rel="noopener noreferrer">{copy.facebook}</a></div>
    </div>
    <div className="t-small mt-8 border-t border-dark-muted pt-6 text-dark-muted">© {new Date().getFullYear()} {copy.copyright}</div>
  </div></footer>;
}
