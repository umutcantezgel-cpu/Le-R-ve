import ImagePlaceholder from '@/components/ImagePlaceholder';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Philosophie | Le Rêve',
  description: 'Erfahren Sie mehr über die Philosophie und das Ambiente von Le Rêve.',
  path: '/philosophie'
});

export default function Philosophie() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="block text-label-caps tracking-widest text-secondary uppercase">
            Unsere Philosophie
          </span>
          <h1 className="font-headline-xl text-5xl md:text-6xl lg:text-[72px] text-primary leading-tight">
            Das Le Rêve Erlebnis
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Treten Sie ein in eine Welt, die darauf ausgerichtet ist, Ihre Sinne zu beruhigen und den Geist zu klären. Ein Ort, an dem Sie ganz bei sich ankommen dürfen.
          </p>
        </div>
      </section>

      {/* Content Section 1 */}
      <section className="w-full px-6 py-12 md:py-24 bg-surface relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-square lg:aspect-[4/5] rounded-[40px] overflow-hidden gold-inset-frame p-3 order-2 lg:order-1">
            <div className="relative w-full h-full rounded-[28px] overflow-hidden">
               <ImagePlaceholder 
                 className="w-full h-full"
                 icon="spa"
                 text="Entspannendes Ambiente im Spa"
               />
               <div className="absolute inset-0 sage-tint-overlay"></div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="font-headline-lg text-4xl md:text-5xl text-primary">Ein Ambiente zum Wohlfühlen</h2>
            <div className="gold-accent-line w-24"></div>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Jedes Detail in unserem Studio wurde mit größter Sorgfalt ausgewählt, um Ihnen sofort beim Betreten ein Gefühl von Wärme, Geborgenheit und Sicherheit zu vermitteln. Wir glauben, dass wahre Entspannung in der Umgebung beginnt.
            </p>
            
            <ul className="space-y-6 mt-8">
              {[
                { icon: 'music_note', text: 'Sorgfältig ausgewählte Entspannungsmusik, die beruhigt.' },
                { icon: 'dry_cleaning', text: 'Flauschige, wohlig warme Handtücher für absoluten Komfort.' },
                { icon: 'air', text: 'Ein zarter, beruhigender Raumduft aus reinen ätherischen Ölen.' },
                { icon: 'spa', text: 'Stilvolle, minimalistische Dekoration, die das Auge entspannt.' }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary gold-border">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </span>
                  <p className="font-body-md text-on-surface mt-3">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Content Section 2 - Glass Panel */}
      <section className="w-full px-6 py-24 md:py-32 relative">
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder 
            className="w-full h-full opacity-30"
            icon="emoji_food_beverage"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="glass-panel p-12 md:p-20 rounded-[40px] text-center space-y-8 ambient-shadow border border-surface-variant/40">
            <span className="block text-label-caps tracking-widest text-secondary uppercase">
              Mehr als nur Massage
            </span>
            <h2 className="font-headline-lg text-4xl md:text-5xl text-primary">Ihre Kaffee- & Tee-Station</h2>
            <div className="gold-accent-line w-24 mx-auto"></div>
            <p className="max-w-3xl mx-auto font-body-md text-on-surface-variant leading-relaxed text-lg">
              Nehmen Sie sich Zeit für sich – vor oder nach der Behandlung. Eine exklusive Auswahl an feinen Tees, frischem Kaffee und allem, was das Herz begehrt, steht für Sie in unserer Lounge bereit.
            </p>
            <p className="max-w-3xl mx-auto font-body-md text-on-surface-variant leading-relaxed text-lg">
              Um Ihr Rundum-Erlebnis perfekt abzurunden, bieten wir in unserem Erfrischungsbereich Kämme, zarten Reinigungsschaum und beruhigende Gesichtsmasken an. Sie verlassen das Studio erholt und strahlend.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
