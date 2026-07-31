import TenCard from '@/components/TenCard';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Treueprogramm | Le Rêve',
  description: 'Werden Sie Mitglied im Le Rêve Circle und profitieren Sie von unserem Treueprogramm.',
  path: '/treueprogramm'
});

export default function Treueprogramm() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <span className="text-secondary tracking-widest uppercase text-sm font-semibold">Le Rêve Circle</span>
        <h1 className="font-serif text-5xl md:text-6xl text-primary">Treueprogramm & Empfehlungen</h1>
        <p className="text-text-light text-xl font-light">Ihre Loyalität und Ihr Vertrauen sind unser größtes Kompliment. Als Dankeschön haben wir den Le Rêve Circle ins Leben gerufen.</p>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <TenCard />
        </div>
        <div className="space-y-6">
          <h2 className="font-serif text-3xl text-primary">Die digitale 10er Karte</h2>
          <p className="text-text-main font-light leading-relaxed">
            Für jede Behandlung ab 60 Minuten erhalten Sie einen digitalen Stempel. Nach 10 Stempeln schenken wir Ihnen eine 60-minütige Behandlung Ihrer Wahl als Dankeschön für Ihre Treue.
          </p>
          <ul className="space-y-4 pt-4">
            <li className="flex items-start gap-3">
               <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
               <div>
                 <strong className="text-primary block">Einfach sammeln</strong>
                 <span className="text-text-light text-sm">Der Stempel wird automatisch nach Ihrem Termin in Ihrem Profil hinterlegt.</span>
               </div>
            </li>
            <li className="flex items-start gap-3">
               <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
               <div>
                 <strong className="text-primary block">Freie Wahl</strong>
                 <span className="text-text-light text-sm">Die Gratis-Behandlung gilt für alle Massagen und Facials bis 60 Minuten.</span>
               </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="glass-panel p-10 md:p-16 rounded-[3rem] text-center max-w-4xl mx-auto space-y-8 relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <h2 className="font-serif text-3xl text-primary">Freunde werben Freunde</h2>
          <p className="text-text-main font-light text-lg">
            Teilen Sie Ihr Wohlbefinden. Wenn Sie Le Rêve an eine Freundin oder Familie empfehlen, erhalten beide ein besonderes Geschenk.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 pt-6">
            <div className="bg-white/50 p-6 rounded-2xl flex-1">
              <span className="material-symbols-outlined text-4xl text-secondary mb-4">card_giftcard</span>
              <h3 className="font-serif text-xl text-primary mb-2">Für Ihre Freundin</h3>
              <p className="text-text-light text-sm">15% Rabatt auf die allererste Behandlung.</p>
            </div>
            <div className="bg-white/50 p-6 rounded-2xl flex-1">
              <span className="material-symbols-outlined text-4xl text-secondary mb-4">stars</span>
              <h3 className="font-serif text-xl text-primary mb-2">Für Sie</h3>
              <p className="text-text-light text-sm">Ein extra Stempel auf Ihrer 10er Karte oder ein kostenloses Upgrade.</p>
            </div>
          </div>
          <div className="pt-8">
             <Link href="/kontakt" className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors inline-block">
               Jetzt Empfehlungs-Link anfordern
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
