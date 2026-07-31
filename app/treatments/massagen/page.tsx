import Link from 'next/link';

export default function Massagen() {
  const services = [
    { name: "Ganzkörper-Massage", time: "60min", price: "70€" },
    { name: "Rücken-Nacken-Massage", time: "60min", price: "70€" },
    { name: "Rücken-Massage", time: "30min", price: "40€" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center space-y-6">
        <Link href="/treatments" className="text-secondary hover:text-primary transition-colors text-sm uppercase tracking-widest font-semibold">
          ← Zurück zur Übersicht
        </Link>
        <h1 className="font-serif text-5xl md:text-6xl text-primary">Klassische Massagen</h1>
        <p className="text-text-light text-xl font-light">Tiefenentspannung für Muskulatur und Geist.</p>
      </div>

      <div className="glass-panel p-8 md:p-16 rounded-[3rem] space-y-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 space-y-6">
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
  );
}
