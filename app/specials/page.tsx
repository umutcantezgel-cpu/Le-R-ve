import ImagePlaceholder from '@/components/ImagePlaceholder';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Specials & Pakete | Le Rêve',
  description: 'Kombinierte Auszeiten und Wellness-Pakete für maximale Erholung bei Le Rêve.',
  path: '/specials'
});

export default function Specials() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl text-primary">Specials & Pakete</h1>
        <p className="text-text-light text-xl font-light">Kombinierte Auszeiten für maximale Erholung.</p>
        <div className="w-16 h-1 bg-secondary mx-auto rounded-full mt-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="glass-panel rounded-[2rem] overflow-hidden flex flex-col">
          <div className="relative h-64 w-full">
             <ImagePlaceholder 
               className="w-full h-full"
               icon="volunteer_activism"
               text="Me Time Paket"
             />
          </div>
          <div className="p-10 flex-grow flex flex-col space-y-6">
            <span className="text-secondary tracking-widest uppercase text-sm font-semibold">Bestseller</span>
            <h2 className="font-serif text-3xl text-primary">Die &quot;Me-Time&quot; Auszeit</h2>
            <p className="text-text-main font-light leading-relaxed flex-grow">
              Eine harmonische Kombination aus einer 60-minütigen Aroma-Massage und einer 30-minütigen Head Spa Behandlung. Perfekt, um Körper und Geist in Einklang zu bringen. Inklusive einem Glas Champagner oder frischem Detox-Tee im Anschluss.
            </p>
            <div className="flex justify-between items-center pt-6 border-t border-primary/10">
              <span className="text-text-light bg-surface px-4 py-1 rounded-full text-sm">90 Min</span>
              <span className="font-serif text-2xl text-secondary">135€</span>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] overflow-hidden flex flex-col">
          <div className="relative h-64 w-full">
             <ImagePlaceholder 
               className="w-full h-full"
               icon="diversity_1"
               text="Freundinnen Paket"
             />
          </div>
          <div className="p-10 flex-grow flex flex-col space-y-6">
            <span className="text-secondary tracking-widest uppercase text-sm font-semibold">Für Zwei</span>
            <h2 className="font-serif text-3xl text-primary">Freundinnen-Tag</h2>
            <p className="text-text-main font-light leading-relaxed flex-grow">
              Genießen Sie zeitgleich mit Ihrer besten Freundin, Schwester oder Mutter in unserem Doppelbehandlungsraum eine 60-minütige Entspannungsmassage. Danach verweilen Sie gemeinsam bei exklusiven Snacks und Getränken in unserer Lounge.
            </p>
            <div className="flex justify-between items-center pt-6 border-t border-primary/10">
              <span className="text-text-light bg-surface px-4 py-1 rounded-full text-sm">pro Person</span>
              <span className="font-serif text-2xl text-secondary">85€</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
