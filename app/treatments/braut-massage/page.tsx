import ImagePlaceholder from '@/components/ImagePlaceholder';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Braut-Massage | Le Rêve',
  description: 'Exklusiv für Ihren großen Tag: Braut-Massage & Specials.',
  path: '/treatments/braut-massage'
});

export default function BrautMassage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-secondary tracking-widest uppercase text-sm font-semibold">Exklusiv für Ihren großen Tag</span>
          <h1 className="font-serif text-5xl md:text-6xl text-primary">Braut-Massage & Specials</h1>
          <p className="text-text-light text-xl font-light leading-relaxed">
            Bereiten Sie sich auf den wichtigsten Tag Ihres Lebens vor. Eine Sinfonie aus Entspannung, Pflege und strahlender Schönheit, kreiert für die moderne Braut. Lassen Sie den Stress der Vorbereitungen hinter sich und tauchen Sie ein in eine Oase der Ruhe.
          </p>
          <div className="pt-4">
            <Link href="/booking" className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-medium hover:scale-[1.02] transition-transform">
              Braut-Massage anfragen
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-xl overflow-hidden gold-border-inset">
           <ImagePlaceholder icon="favorite" text="Braut Specials" />
        </div>
      </section>

      <section className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-8 space-y-4">
            <h2 className="font-serif text-3xl text-primary">Die Signature Braut-Massage</h2>
            <p className="text-text-main font-light leading-relaxed">
              Ein 90-minütiges Ritual, das tiefgehende Entspannung mit luxuriöser Hautpflege verbindet. Warme, duftende Öle, sanfte Streichungen und gezielte Lösung von Verspannungen im Nacken- und Schulterbereich sorgen dafür, dass Sie an Ihrem Hochzeitstag von innen heraus strahlen.
            </p>
            <div className="flex items-center gap-2 pt-2 text-secondary-fixed-dim">
              <span className="material-symbols-outlined text-secondary">favorite</span>
              <span className="font-label-caps uppercase text-sm text-primary">90 Minuten • 150€</span>
            </div>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end">
            <Link href="/booking" className="border border-secondary text-secondary px-6 py-2 rounded-lg hover:bg-secondary/10 transition-colors">
              Braut-Massage buchen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
