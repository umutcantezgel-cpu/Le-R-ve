import ImagePlaceholder from '@/components/ImagePlaceholder';
import Link from 'next/link';

export default function Hausbesuche() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-secondary tracking-widest uppercase text-sm font-semibold">Le Rêve at Home</span>
          <h1 className="font-serif text-5xl md:text-6xl text-primary">Hausbesuche</h1>
          <p className="text-text-light text-xl font-light leading-relaxed">
            Genießen Sie exklusive Wellness-Behandlungen in der vertrauten und ruhigen Umgebung Ihres eigenen Zuhauses. Wir bringen die entspannende Atmosphäre und professionelle Expertise von Le Rêve direkt zu Ihnen – für höchste Privatsphäre und maximalen Komfort, besonders während der Schwangerschaft.
          </p>
          <div className="pt-4">
            <Link href="/booking" className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-medium hover:scale-[1.02] transition-transform">
              Hausbesuch anfragen
            </Link>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
           <ImagePlaceholder icon="home" text="Le Rêve at Home" />
        </div>
      </section>

      <section className="bg-surface-container-low -mx-6 px-6 py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl text-primary mb-4">Der Ablauf eines Hausbesuchs</h2>
          <p className="text-text-main font-light text-lg">Wir kümmern uns um alles, damit Sie sich voll und ganz auf Ihre Entspannung konzentrieren können.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">event_available</span>
            </div>
            <h3 className="font-serif text-xl text-primary mb-3">1. Terminvereinbarung</h3>
            <p className="text-text-main font-light">Sie fragen Ihren Wunschtermin bequem online an. Wir bestätigen die Details und besprechen vorab Ihre individuellen Bedürfnisse.</p>
          </div>
          
          <div className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">local_shipping</span>
            </div>
            <h3 className="font-serif text-xl text-primary mb-3">2. Ankunft & Aufbau</h3>
            <p className="text-text-main font-light">Ihre Therapeutin bringt alles mit: eine komfortable Liege, hochwertige Öle, weiche Handtücher und entspannende Musik.</p>
          </div>

          <div className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">spa</span>
            </div>
            <h3 className="font-serif text-xl text-primary mb-3">3. Entspannung pur</h3>
            <p className="text-text-main font-light">Sie genießen Ihre maßgeschneiderte Behandlung in gewohnter Umgebung und können im Anschluss direkt weiter entspannen, ohne Heimweg.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
