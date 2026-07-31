import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Hot Stone Massage | Le Rêve',
  description: 'Wärmetherapie für hartnäckige Verspannungen.',
  path: '/treatments/hot-stone'
});

export default function HotStone() {
  const services = [
    { name: "Hot Stone Rücken", time: "45min", price: "60€" },
    { name: "Hot Stone Ganzkörper", time: "75min", price: "95€" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center space-y-6">
        <Link href="/treatments" className="text-secondary hover:text-primary transition-colors text-sm uppercase tracking-widest font-semibold">
          ← Zurück zur Übersicht
        </Link>
        <h1 className="font-serif text-5xl md:text-6xl text-primary">Hot Stone Massage</h1>
        <p className="text-text-light text-xl font-light">Wärmetherapie für hartnäckige Verspannungen.</p>
      </div>

      <div className="glass-panel p-8 md:p-16 rounded-[3rem] space-y-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 space-y-6">
          <p className="text-text-main text-lg leading-relaxed font-light mb-8 max-w-2xl mx-auto text-center">
            Erleben Sie die tiefe, wohltuende Wärme von vulkanischen Basaltsteinen. Die Wärme dringt bis in die tieferen Muskelschichten ein und sorgt für eine vollkommene Entspannung von Körper und Seele.
          </p>
          
          {services.map((s, i) => (
            <div 
              key={i} 
              className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-primary/10 last:border-0 hover:bg-white/40 transition-colors rounded-2xl px-4 -mx-4"
            >
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-primary">{s.name}</h2>
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
  );
}
