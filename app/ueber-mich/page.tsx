import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function UeberMich() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="block text-label-caps tracking-widest text-secondary uppercase">
            Ihre Therapeutin
          </span>
          <h1 className="font-headline-xl text-5xl md:text-6xl lg:text-[72px] text-primary leading-tight">
            Über Mich
          </h1>
        </div>
      </section>

      {/* Main Content Profile */}
      <section className="w-full px-6 py-12 md:py-24 max-w-7xl mx-auto">
        <div className="glass-panel rounded-[40px] overflow-hidden ambient-shadow border border-surface-variant/40 grid grid-cols-1 lg:grid-cols-12 relative items-center">
          
          <div className="lg:col-span-5 relative h-[500px] lg:h-[800px] w-full p-4 lg:p-8">
            <div className="relative w-full h-full rounded-[32px] overflow-hidden gold-border">
              <ImagePlaceholder 
                className="w-full h-full"
                icon="face_3"
                text="Die Gründerin"
              />
              <div className="absolute inset-0 sage-tint-overlay"></div>
            </div>
          </div>
          
          <div className="lg:col-span-7 p-8 md:p-16 lg:pr-24 space-y-10 flex flex-col justify-center">
            
            <h2 className="font-headline-lg text-4xl md:text-5xl text-primary">Herzlich Willkommen bei Le Rêve</h2>
            <div className="gold-accent-line w-24"></div>
            
            <div className="space-y-6 font-body-md text-on-surface-variant leading-relaxed text-lg">
              <p>
                Mit einer tiefen Leidenschaft für echte Erholung und Achtsamkeit habe ich <strong>Le Rêve</strong> ins Leben gerufen. Mein Ziel ist es, Frauen einen exklusiven Raum zu geben, in dem sie den hektischen Alltag komplett loslassen können und einfach nur &bdquo;sein&ldquo; dürfen.
              </p>
              <p>
                Als erfahrene Therapeutin verstehe ich die besonderen und feinen Bedürfnisse des weiblichen Körpers. Jeder Körper erzählt seine eigene Geschichte und braucht eine individuelle Herangehensweise, um Blockaden zu lösen und die Energie wieder fließen zu lassen.
              </p>
              <p>
                Ob bei einer klassischen Entspannungsmassage, einem klärenden Head Spa oder bei einer einfühlsamen Behandlung während der Schwangerschaft – Ihre Gesundheit, Ihre Sicherheit und Ihr ganzheitliches Wohlbefinden stehen bei mir an allererster Stelle.
              </p>
            </div>
            
            <div className="pt-10 border-t border-outline-variant/30">
              <p className="font-headline-md italic text-2xl md:text-3xl text-secondary leading-snug">
                &bdquo;Ihre Auszeit ist meine Berufung. Ich freue mich von Herzen darauf, Sie auf Ihrer Reise zur inneren Ruhe begleiten zu dürfen.&ldquo;
              </p>
            </div>
          </div>
          
        </div>
      </section>
      
      {/* Qualifikationen / Werte (Optional Add-on for richness) */}
      <section className="w-full px-6 py-24 bg-surface mt-12">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <h3 className="font-headline-md text-3xl text-primary">Meine Werte in der Behandlung</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Achtsamkeit', desc: 'Volle Präsenz und ungeteilte Aufmerksamkeit in jeder Minute Ihrer Behandlung.' },
              { title: 'Individualität', desc: 'Jede Massage wird genau auf Ihre aktuellen Bedürfnisse abgestimmt.' },
              { title: 'Geborgenheit', desc: 'Ein sicherer Raum, in dem Sie sich fallen lassen und entspannen können.' }
            ].map((value, i) => (
              <div key={i} className="flex flex-col items-center space-y-4">
                <span className="w-16 h-16 rounded-full bg-background gold-border flex items-center justify-center text-secondary mb-4 shadow-sm">
                  <span className="material-symbols-outlined text-2xl">spa</span>
                </span>
                <h4 className="font-headline-md text-xl text-primary">{value.title}</h4>
                <p className="font-body-md text-on-surface-variant">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
