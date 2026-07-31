import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full pt-section-gap pb-12 bg-primary dark:bg-on-primary-fixed mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-container-padding-mobile md:px-container-padding-desktop max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-2 mb-8 md:mb-0">
          <h3 className="font-headline-md text-headline-md text-on-primary font-bold mb-4 italic">Le Rêve</h3>
          <p className="font-body-md text-body-md text-on-primary/80 max-w-sm">
            Ein Wahrer Traum. Ihr Sanctuary für ganzheitliches Wohlbefinden und innere Balance in Berlin.
          </p>
        </div>
        <div className="col-span-1">
          <h4 className="font-headline-md text-[20px] text-on-primary mb-4">Navigation</h4>
          <ul className="flex flex-col gap-3">
            <li><Link href="/impressum" className="font-body-md text-body-md text-on-primary/60 hover:text-on-primary transition-colors hover:translate-x-1 duration-200">Impressum</Link></li>
            <li><Link href="/datenschutz" className="font-body-md text-body-md text-on-primary/60 hover:text-on-primary transition-colors hover:translate-x-1 duration-200">Datenschutz</Link></li>
            <li><Link href="/agb" className="font-body-md text-body-md text-on-primary/60 hover:text-on-primary transition-colors hover:translate-x-1 duration-200">AGB</Link></li>
            <li><Link href="/kontakt" className="font-body-md text-body-md text-on-primary/60 hover:text-on-primary transition-colors hover:translate-x-1 duration-200">Kontakt</Link></li>
          </ul>
        </div>
        <div className="col-span-1 mt-8 md:mt-0">
          <h4 className="font-headline-md text-[20px] text-on-primary mb-4">Kontakt</h4>
          <address className="not-italic text-on-primary/60 space-y-2">
            <p>Wellnessallee 1</p>
            <p>10115 Berlin</p>
            <p className="pt-2">hello@lereve.de</p>
            <p>+49 30 1234 5678</p>
          </address>
        </div>
      </div>
      <div className="px-container-padding-mobile md:px-container-padding-desktop max-w-7xl mx-auto mt-12 pt-8 border-t border-on-primary/10">
        <p className="font-body-md text-body-md text-on-primary/80 text-center md:text-left text-sm">
          © 2024 Le Rêve - Ein Wahrer Traum. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
