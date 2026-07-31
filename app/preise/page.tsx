import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Preise | Le Rêve',
  description: 'Entdecken Sie die Preise für Massagen und Wellness-Anwendungen bei Le Rêve.',
  path: '/preise'
});

export default function Preise() {
  const categories = [
    {
      title: "Klassische Massagen",
      items: [
        { name: "Rücken-Massage", time: "30min", price: "40€" },
        { name: "Ganzkörper-Massage", time: "60min", price: "70€" },
        { name: "Ganzkörper-Massage Intensiv", time: "90min", price: "100€" },
      ]
    },
    {
      title: "Aroma-Therapie",
      items: [
        { name: "Aroma Rücken", time: "30min", price: "45€" },
        { name: "Aroma Ganzkörper", time: "60min", price: "65€" },
        { name: "Aroma Ganzkörper Intensiv", time: "90min", price: "90€" },
        { name: "Aroma Luxus Reise", time: "120min", price: "115€" },
      ]
    },
    {
      title: "Spezialbehandlungen",
      items: [
        { name: "Schwangerschaftsmassage Rücken", time: "45min", price: "55€" },
        { name: "Schwangerschaftsmassage Ganzkörper", time: "60min", price: "75€" },
        { name: "Schwangerschaftsmassage Verwöhnprogramm", time: "90min", price: "110€" },
        { name: "Klassisches Head Spa", time: "45min", price: "60€" },
        { name: "Premium Head Spa & Nacken", time: "60min", price: "80€" },
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center space-y-6">
        <h1 className="font-serif text-5xl md:text-6xl text-primary">Preise</h1>
        <p className="text-text-light text-xl font-light">Unsere Behandlungen im Überblick.</p>
        <div className="w-16 h-1 bg-secondary mx-auto rounded-full mt-4"></div>
      </div>

      <div className="space-y-12">
        {categories.map((cat, idx) => (
          <div key={idx} className="glass-panel p-8 md:p-12 rounded-[2rem] shadow-xl">
            <h2 className="font-serif text-3xl text-secondary mb-8 border-b border-primary/10 pb-4">{cat.title}</h2>
            <div className="space-y-4">
              {cat.items.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2 group">
                  <span className="text-lg text-text-main font-light group-hover:text-primary transition-colors">{item.name}</span>
                  <div className="flex items-center gap-6 mt-1 sm:mt-0 w-full sm:w-auto justify-between sm:justify-end border-b border-dashed border-primary/20 sm:border-0 flex-grow sm:flex-grow-0 ml-0 sm:ml-4">
                    <span className="text-text-light text-sm hidden sm:inline-block w-full sm:w-auto border-b border-dashed border-primary/20 sm:border-0 mx-4"></span>
                    <span className="text-text-light text-sm bg-surface px-3 py-1 rounded-full">{item.time}</span>
                    <span className="font-serif text-2xl text-primary min-w-[60px] text-right">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-text-light font-light italic">
          Alle Preise verstehen sich inkl. der gesetzlichen Mehrwertsteuer.<br/>
          Terminabsagen bitte mindestens 24 Stunden im Voraus.
        </p>
      </div>
    </div>
  );
}
