import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Entspannung im Alltag finden | Le Rêve Journal',
  description: 'Kleine Rituale und Tipps, die Ihnen helfen, auch an stressigen Tagen Ruhe zu bewahren.',
  path: '/blog/entspannung-im-alltag'
});

export default function BlogPost1() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
      <Link href="/blog" className="text-secondary hover:text-primary transition-colors text-sm uppercase tracking-widest font-semibold">
        ← Zurück zum Journal
      </Link>
      
      <div className="space-y-6">
        <span className="text-text-light">12. Mai 2024</span>
        <h1 className="font-serif text-4xl md:text-5xl text-primary">Entspannung im Alltag finden</h1>
      </div>

      <div className="space-y-6 text-text-main text-lg font-light leading-relaxed">
        <p>Der moderne Alltag fordert uns oft viel ab. Umso wichtiger ist es, kleine Inseln der Ruhe zu schaffen.</p>
        <p>Atemübungen, kurze Spaziergänge oder bewusstes Teetrinken – schon fünf Minuten können den Stresspegel signifikant senken. In unserem Studio Le Rêve unterstützen wir Sie dabei, dieses Gefühl der inneren Mitte wiederzufinden und nachhaltig in Ihren Alltag zu integrieren.</p>
      </div>
    </div>
  );
}
