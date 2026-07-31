import Link from 'next/link';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Schwangerschaftsmassage | Le Rêve',
  description: 'Sanfte Geborgenheit und Linderung für werdende Mütter.',
  path: '/treatments/schwangerschaftsmassage'
});

export default function Schwangerschaftsmassage() {
  const services = [
    { name: "Sanfte Rücken- & Nackenmassage", time: "45min", price: "55€" },
    { name: "Ganzkörper Schwangerschaftsmassage", time: "60min", price: "75€" },
    { name: "Verwöhnprogramm (Körper & Gesicht)", time: "90min", price: "110€" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center space-y-6">
        <Link href="/treatments" className="text-secondary hover:text-primary transition-colors text-sm uppercase tracking-widest font-semibold">
          ← Zurück zur Übersicht
        </Link>
        <h1 className="font-serif text-5xl md:text-6xl text-primary">Schwangerschaftsmassage</h1>
        <p className="text-text-light text-xl font-light">Sanfte Geborgenheit und Linderung für werdende Mütter.</p>
      </div>

      <div className="glass-panel p-8 md:p-16 rounded-[3rem] space-y-12 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
             <ImagePlaceholder 
               className="w-full h-full"
               icon="pregnant_woman"
               text="Schwangerschaftsmassage"
             />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-secondary">Zeit für Zwei</h2>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
            <p className="text-text-main text-lg leading-relaxed font-light">
              Eine Schwangerschaft ist ein Wunder, das den Körper jedoch auch beansprucht. Unsere spezielle Schwangerschaftsmassage ist darauf ausgelegt, typische Beschwerden wie Rücken- und Nackenschmerzen zu lindern und Wassereinlagerungen sanft zu reduzieren.
            </p>
            <p className="text-text-main text-lg leading-relaxed font-light">
              In einer bequemen und sicheren Seitenlage, gestützt durch weiche Kissen, können Sie vollkommen loslassen. Wir verwenden ausschließlich reine, naturbelassene Öle, die für Mutter und Kind absolut sicher und pflegend sind.
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-primary/20 relative z-10">
          <div className="space-y-6">
            {services.map((s, i) => (
              <div 
                key={i} 
                className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-primary/10 last:border-0 hover:bg-white/40 transition-colors rounded-2xl px-4 -mx-4"
              >
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-primary">{s.name}</h3>
                </div>
                <div className="flex items-center gap-8 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                  <span className="text-text-light text-lg bg-surface px-4 py-1 rounded-full">{s.time}</span>
                  <span className="font-serif text-3xl text-secondary">{s.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
