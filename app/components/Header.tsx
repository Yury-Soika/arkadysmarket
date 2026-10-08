"use client";

import Image from "next/image";
import { useRef } from "react";
import { Menu, Phone, X } from "lucide-react";
import { business, asset } from "../lib/business";
import type { HomeContent, Language } from "../content/home";
import { Button } from "./Button";

export function Header({ copy, language, setLanguage }: { copy: HomeContent; language: Language; setLanguage: (language: Language) => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const targets = ["#shelves", "#story", "#visit"];
  return <>
    <a className="skip-link" href="#main">{copy.skip}</a>
    <div className="bg-accent-tint"><div className="site-container py-2 t-small text-center">{copy.location}</div></div>
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="site-container site-header flex items-center justify-between gap-4">
        <a href="#main" className="flex min-h-11 min-w-0 items-center gap-3" aria-label={business.name}>
          <Image src={asset("/images/logo.jpg")} alt="" width={40} height={40} className="site-logo" priority />
          <span className="font-semibold tracking-tight">{business.name}</span>
        </a>
        <nav aria-label={language === "en" ? "Main navigation" : "Основное меню"} className="hidden lg:flex">
          {copy.nav.map((label, i) => <a key={targets[i]} href={targets[i]} className="nav-link">{label}</a>)}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <div className="flex" role="group" aria-label="Language / Язык">{(["en", "ru"] as const).map(lang => <button key={lang} type="button" className="language-button" lang={lang} aria-label={lang === "en" ? "English" : "Русский"} aria-pressed={language === lang} onClick={() => setLanguage(lang)}>{lang.toUpperCase()}</button>)}</div>
          <a href={business.phoneHref} className="hidden 2xl:inline-flex nav-link">{business.phoneDisplay}</a>
          <Button href={business.phoneHref} className="hidden sm:inline-flex"><Phone size={16} aria-hidden="true" />{copy.call}</Button>
          <button className="grid min-h-11 min-w-11 place-items-center lg:hidden" aria-label={copy.menu} aria-haspopup="dialog" onClick={() => dialog.current?.showModal()}><Menu aria-hidden="true" size={24} /></button>
        </div>
      </div>
    </header>
    <dialog ref={dialog} className="mobile-menu" aria-label={copy.menu}>
      <div className="flex items-center justify-between gap-4"><span className="font-semibold">{business.name}</span><button onClick={() => dialog.current?.close()} aria-label={copy.close} className="grid min-h-11 min-w-11 place-items-center"><X aria-hidden="true" /></button></div>
      <nav className="mt-12 flex flex-col gap-6">{copy.nav.map((label, i) => <a key={targets[i]} href={targets[i]} className="t-h2 py-2" onClick={() => dialog.current?.close()}>{label}</a>)}</nav>
      <div className="mt-12"><Button href={business.phoneHref}><Phone size={18} aria-hidden="true" />{copy.call}</Button></div>
    </dialog>
  </>;
}
