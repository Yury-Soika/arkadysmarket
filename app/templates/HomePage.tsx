"use client";

import { useEffect, useState } from "react";
import { content, type Language } from "../content/home";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { TextImage } from "../components/TextImage";
import { VisitSection } from "../components/VisitSection";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { business } from "../lib/business";

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("en");
  const copy = content[language];
  useEffect(() => { document.documentElement.lang = language; }, [language]);

  return <>
    <Header copy={copy} language={language} setLanguage={setLanguage} />
    <main id="main">
      <Hero copy={copy} />
      <div className="border-b border-line bg-paper"><div className="site-container grid grid-cols-2 gap-6 py-8 lg:grid-cols-3">{copy.proof.map(item => <div key={item.label} className="flex flex-col gap-2"><strong className="t-h3">{item.value}</strong><span className="t-small text-muted">{item.label}</span></div>)}</div></div>
      <Features copy={copy} />
      <TextImage id="story" eyebrow={copy.storyEyebrow} title={copy.storyTitle} text={copy.storyText} image="/images/candies.jpg" alt={copy.storyImageAlt} caption={copy.storyImageCaption} captionSmall={copy.storyImageSmall} points={copy.storyPoints} action={{ label: copy.storyAction, href: business.facebook, external: true }} />
      <TextImage eyebrow={copy.drinksEyebrow} title={copy.drinksTitle} text={copy.drinksText} image="/images/kvass.jpg" alt={copy.drinksImageAlt} side="right" tone="surface" action={{ label: copy.call, href: business.phoneHref }} />
      <section className="section bg-accent"><div className="site-container flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"><div><h2 className="t-h2">{copy.bandTitle}</h2><p className="mt-4">{copy.bandText}</p></div><Button href={business.directions} external variant="dark" className="shrink-0">{copy.directions}</Button></div></section>
      <VisitSection copy={copy} />
    </main>
    <Footer copy={copy} />
  </>;
}
