import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Vorbereitung | Le Rêve',
  description: 'Wichtige Informationen und Tipps zur Vorbereitung auf Ihren Wellness-Termin bei Le Rêve.',
  path: '/vorbereitung'
});

export default function Vorbereitung() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center space-y-6">
        <span className="text-secondary tracking-widest uppercase text-sm font-semibold">Ihre Reise beginnt</span>
        <h1 className="font-serif text-5xl md:text-6xl text-primary">Vorbereitung auf Ihren Termin</h1>
        <p className="text-text-light text-xl font-light">Damit Sie Ihre Auszeit bei Le Rêve von der ersten Minute an in vollen Zügen genießen können, haben wir einige Empfehlungen für Sie zusammengestellt.</p>
      </div>

      <div className="space-y-8">
        <div className="glass-panel p-8 rounded-2xl flex gap-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">schedule</span>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-primary mb-2">Pünktlichkeit & Ankommen</h2>
            <p className="text-text-main font-light leading-relaxed">
              Bitte planen Sie ein, etwa 10 Minuten vor Ihrem Termin bei uns einzutreffen. So haben Sie ausreichend Zeit, bei einem Begrüßungstee anzukommen und den Alltag hinter sich zu lassen. Bei Verspätungen müssen wir die Behandlungszeit leider entsprechend verkürzen, um nachfolgende Termine einhalten zu können.
            </p>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-2xl flex gap-6">
          <div className="w-12 h-12 rounded-full bg-secondary/10 flex-shrink-0 flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined">restaurant</span>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-primary mb-2">Essen & Trinken</h2>
            <p className="text-text-main font-light leading-relaxed">
              Vermeiden Sie schwere Mahlzeiten direkt vor Ihrer Massage. Eine leichte Stärkung 1-2 Stunden vorher ist ideal. Bitte trinken Sie ausreichend Wasser, sowohl vor als auch nach der Behandlung, um den Entschlackungsprozess zu unterstützen.
            </p>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-2xl flex gap-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">health_and_safety</span>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-primary mb-2">Gesundheitliche Besonderheiten</h2>
            <p className="text-text-main font-light leading-relaxed">
              Bitte informieren Sie uns vorab über eventuelle Allergien, körperliche Beschwerden, kürzliche Operationen oder eine bestehende Schwangerschaft. So können wir die Behandlung optimal und sicher auf Ihre Bedürfnisse abstimmen.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-primary/10">
         <p className="text-text-main mb-6">Sie haben noch Fragen? Zögern Sie nicht, uns zu kontaktieren.</p>
         <Link href="/kontakt" className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors">
           Zum Kontakt
         </Link>
      </div>
    </div>
  );
}
