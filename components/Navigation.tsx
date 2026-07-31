"use client";
import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/60 dark:bg-black/60 backdrop-blur-xl border-b border-secondary/20 shadow-[0_32px_64px_-15px_rgba(140,169,149,0.08)]">
      <div className="flex justify-between items-center px-container-padding-mobile md:px-container-padding-desktop py-4 max-w-full mx-auto">
        <Link href="/" className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-secondary-fixed-variant dark:text-secondary-fixed italic font-semibold hover:scale-[1.02] transition-transform duration-300">
          Le Rêve
        </Link>
        <nav className="hidden md:flex gap-8 items-center font-headline-md text-headline-md font-medium tracking-tight">
          <Link href="/philosophie" className="text-on-surface-variant dark:text-surface-variant hover:text-secondary transition-colors hover:scale-[1.02] duration-300">Philosophie</Link>
          <Link href="/treatments" className="text-on-surface-variant dark:text-surface-variant hover:text-secondary transition-colors hover:scale-[1.02] duration-300">Treatments</Link>
          <Link href="/ueber-mich" className="text-on-surface-variant dark:text-surface-variant hover:text-secondary transition-colors hover:scale-[1.02] duration-300">Über mich</Link>
          <Link href="/blog" className="text-on-surface-variant dark:text-surface-variant hover:text-secondary transition-colors hover:scale-[1.02] duration-300">Journal</Link>
          <Link href="/preise" className="text-on-surface-variant dark:text-surface-variant hover:text-secondary transition-colors hover:scale-[1.02] duration-300">Preise</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/booking" className="hidden md:flex bg-primary text-on-primary font-body-md text-body-md px-6 py-2 rounded-lg hover:border-secondary-fixed hover:border cursor-pointer active:scale-95 transition-all">
            Termin buchen
          </Link>
          <button className="md:hidden text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
