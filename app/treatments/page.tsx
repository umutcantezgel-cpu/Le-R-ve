import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Behandlungen | Le Rêve',
  description: 'Wählen Sie Ihre persönliche Auszeit aus unserem exklusiven Angebot.',
  path: '/treatments'
});

export default function Treatments() {
  const treatments = [
    {
      title: "Ganzkörper- & Rückenmassagen",
      desc: "Lösen Sie tiefe Verspannungen und finden Sie zur vollkommenen inneren Balance zurück. Ein absoluter Klassiker für Ihre Auszeit.",
      href: "/treatments/massagen",
      price: "ab 40€",
      icon: "spa"
    },
    {
      title: "Aroma-Therapie",
      desc: "Eine unvergessliche Reise für die Sinne mit feinsten, handverlesenen ätherischen Ölen. Spüren Sie, wie der Stress abfällt.",
      href: "/treatments/aroma",
      price: "ab 65€",
      icon: "local_florist"
    },
    {
      title: "Schwangerschaftsmassage",
      desc: "Sensible, sichere und umhüllende Geborgenheit für werdende Mütter. Wir lindern Ihre Beschwerden auf sanfte Weise.",
      href: "/treatments/massagen", // Merged into massagen generally or own page, keeping simple
      price: "ab 55€",
      icon: "pregnant_woman"
    },
    {
      title: "Head Spa",
      desc: "Japanische Kopfhautmassage für vollkommene mentale Entspannung und tiefe Ruhe. Klärt den Geist und nährt das Haar.",
      href: "/treatments/head-spa",
      price: "ab 60€",
      icon: "face_retouching_natural"
    },
    {
      title: "Gesichtsbehandlungen",
      desc: "Strahlende Haut und tiefenwirksame Pflegeprodukte, individuell abgestimmt auf Ihre Hautbedürfnisse.",
      href: "/treatments/gesichtsbehandlungen",
      price: "ab 45€",
      icon: "auto_awesome"
    },
    {
      title: "Hot Stone Massage",
      desc: "Wohltuende Wärmetherapie mit heißen Basaltsteinen für muskuläre Tiefenentspannung und wohlige Wärme.",
      href: "/treatments/hot-stone",
      price: "ab 60€",
      icon: "volcano"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 text-center relative overflow-hidden">
        {/* Subtle background blur blobs */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary-fixed-dim/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-secondary-container/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="block text-label-caps tracking-widest text-secondary uppercase">
            Unser Angebot
          </span>
          <h1 className="font-headline-xl text-5xl md:text-6xl lg:text-[72px] text-primary leading-tight">
            Behandlungsübersicht
          </h1>
          <div className="gold-accent-line w-24 mx-auto my-8"></div>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Wählen Sie Ihre persönliche Auszeit aus unserem exklusiven Angebot. Jede Behandlung wird individuell auf Ihre tagesaktuellen Bedürfnisse abgestimmt.
          </p>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="w-full px-6 pb-24 md:pb-32 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {treatments.map((t, i) => (
            <Link 
              key={i} 
              href={t.href} 
              className="glass-panel p-8 md:p-10 rounded-[32px] flex flex-col group transition-all duration-500 hover:-translate-y-2 border border-surface-variant/40 hover:border-secondary-fixed-dim/50 ambient-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-8 gold-border transition-colors duration-300 group-hover:bg-primary group-hover:text-on-primary">
                <span className="material-symbols-outlined text-3xl">{t.icon}</span>
              </div>
              <h2 className="font-headline-md text-3xl text-primary leading-tight mb-4 group-hover:text-secondary-fixed-dim transition-colors">
                {t.title}
              </h2>
              <p className="font-body-md text-on-surface-variant flex-grow text-base leading-relaxed mb-8">
                {t.desc}
              </p>
              <div className="pt-6 border-t border-outline-variant/30 flex justify-between items-center mt-auto">
                <span className="text-secondary font-headline-md text-xl">{t.price}</span>
                <span className="text-primary font-label-caps tracking-widest uppercase flex items-center gap-2 group-hover:text-secondary-fixed-dim transition-colors">
                  Details zu {t.title}
                  <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Booking Call to Action */}
      <section className="w-full py-24 bg-surface text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-headline-lg text-4xl text-primary">Sie sind sich unsicher?</h2>
          <p className="font-body-md text-on-surface-variant text-lg">
            Wir beraten Sie gerne unverbindlich, welche Behandlung am besten zu Ihren aktuellen Bedürfnissen passt.
          </p>
          <div className="pt-4">
            <Link 
              href="/kontakt" 
              className="inline-block bg-primary text-on-primary px-8 py-4 rounded-full font-body-md hover:bg-primary-fixed-variant transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
