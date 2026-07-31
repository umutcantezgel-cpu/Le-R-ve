import ImagePlaceholder from '@/components/ImagePlaceholder';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Gutscheine | Le Rêve',
  description: 'Verschenken Sie wertvolle Momente der Erholung mit einem Wellness-Gutschein von Le Rêve.',
  path: '/gutscheine'
});

export default function Gutscheine() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center space-y-6">
        <h1 className="font-serif text-5xl md:text-6xl text-primary">Gutscheine</h1>
        <p className="text-text-light text-xl font-light">Verschenken Sie wertvolle Momente der Erholung.</p>
      </div>

      <div className="glass-panel p-10 md:p-16 rounded-[3rem] shadow-xl flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2 space-y-8">
          <h2 className="font-serif text-3xl text-secondary">Das perfekte Geschenk</h2>
          <p className="text-text-main text-lg font-light leading-relaxed">
            Egal ob zum Muttertag, Geburtstag oder einfach als kleine Aufmerksamkeit zwischendurch – mit einem Gutschein für Le Rêve verschenken Sie eine exklusive Auszeit, die in Erinnerung bleibt.
          </p>
          <p className="text-text-main text-lg font-light leading-relaxed">
            Wählen Sie zwischen einem Wertgutschein für maximale Flexibilität oder verschenken Sie direkt eine spezifische Behandlung. Unsere Gutscheine werden liebevoll verpackt und können direkt im Studio abgeholt oder per Post versendet werden.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-colors shadow-lg">
            Gutschein anfragen
          </button>
        </div>
        <div className="lg:w-1/2 w-full relative aspect-video rounded-2xl overflow-hidden shadow-lg">
           <ImagePlaceholder 
             className="w-full h-full"
             icon="redeem"
             text="Gutschein"
           />
        </div>
      </div>
    </div>
  );
}
