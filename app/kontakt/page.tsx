import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Kontakt & Anfahrt | Le Rêve',
  description: 'Kontaktieren Sie Le Rêve in Berlin für Terminvereinbarungen und Fragen.',
  path: '/kontakt'
});

export default function Kontakt() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center space-y-6">
        <h1 className="font-serif text-5xl md:text-6xl text-primary">Kontakt & Anfahrt</h1>
        <p className="text-text-light text-xl font-light">Wir freuen uns auf Ihren Besuch.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="glass-panel p-10 md:p-12 rounded-[3rem] shadow-xl space-y-10">
          <h2 className="font-serif text-3xl text-secondary">Schreiben Sie uns</h2>
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-text-main uppercase tracking-widest">Name</label>
              <input type="text" id="name" className="w-full bg-white/50 border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors" placeholder="Ihr Name" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-text-main uppercase tracking-widest">E-Mail</label>
              <input type="email" id="email" className="w-full bg-white/50 border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors" placeholder="Ihre E-Mail-Adresse" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-text-main uppercase tracking-widest">Nachricht</label>
              <textarea id="message" rows={5} className="w-full bg-white/50 border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors resize-none" placeholder="Wie können wir Ihnen helfen?"></textarea>
            </div>
            <button type="button" className="w-full bg-primary text-white py-4 rounded-full text-lg tracking-wide hover:bg-primary-dark transition-colors shadow-lg">
              Nachricht Senden
            </button>
          </form>
        </div>

        <div className="space-y-12 flex flex-col">
          <div className="glass-panel p-10 md:p-12 rounded-[3rem] shadow-xl space-y-8 flex-grow">
            <h2 className="font-serif text-3xl text-secondary">Informationen</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm text-primary uppercase tracking-widest mb-2">Adresse</h3>
                <p className="text-lg text-text-main font-light">
                  Wellnessallee 1<br />
                  10115 Berlin<br />
                  Deutschland
                </p>
              </div>
              
              <div>
                <h3 className="text-sm text-primary uppercase tracking-widest mb-2">Kontakt</h3>
                <p className="text-lg text-text-main font-light">
                  Tel: +49 30 123 456<br />
                  E-Mail: bonjour@lereve.de
                </p>
              </div>

              <div>
                <h3 className="text-sm text-primary uppercase tracking-widest mb-2">Öffnungszeiten</h3>
                <ul className="text-lg text-text-main font-light space-y-1">
                  <li className="flex justify-between w-64"><span>Mo - Fr:</span> <span>10:00 - 20:00 Uhr</span></li>
                  <li className="flex justify-between w-64"><span>Sa:</span> <span>10:00 - 18:00 Uhr</span></li>
                  <li className="flex justify-between w-64"><span>So:</span> <span>Ruhetag</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
