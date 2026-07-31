import Link from 'next/link';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function Aroma() {
  const services = [
    { time: "60min", price: "65€" },
    { time: "90min", price: "90€" },
    { time: "120min", price: "115€" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center space-y-6">
        <Link href="/treatments" className="text-secondary hover:text-primary transition-colors text-sm uppercase tracking-widest font-semibold">
          ← Zurück zur Übersicht
        </Link>
        <h1 className="font-serif text-5xl md:text-6xl text-primary">Aroma-Therapie</h1>
        <p className="text-text-light text-xl font-light">Eine sinnliche Reise mit Fokus auf wohltuende Düfte.</p>
      </div>

      <div className="glass-panel p-8 md:p-16 rounded-[3rem] space-y-12 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-secondary">Die Kraft der Düfte</h2>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
            <p className="text-text-main text-lg leading-relaxed font-light">
              Unsere Aroma-Therapie vereint sanfte, fließende Massagetechniken mit den essenziellen, hochwirksamen Wirkstoffen erlesener Pflanzenöle. 
            </p>
            <p className="text-text-main text-lg leading-relaxed font-light">
              Ob beruhigender Lavendel für tiefen Schlaf, erfrischende Zitrusnoten für neue Energie oder erdende Hölzer für innere Stärke – wählen Sie intuitiv den Duft, den Ihr Körper heute braucht.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
             <ImagePlaceholder 
               className="w-full h-full"
               icon="spa"
               text="Aroma Öle"
             />
          </div>
        </div>

        <div className="pt-12 border-t border-primary/20">
          <h3 className="font-serif text-3xl text-primary mb-8 text-center">Aroma Therapie Massage</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div 
                key={i} 
                className="bg-white/60 hover:bg-white/80 transition-colors p-8 rounded-2xl flex flex-col items-center text-center space-y-4 shadow-sm"
              >
                <span className="text-text-light text-lg tracking-wide">{s.time}</span>
                <span className="font-serif text-4xl text-secondary">{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
