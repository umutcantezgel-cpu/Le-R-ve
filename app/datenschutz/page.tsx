import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Datenschutz | Le Rêve',
  description: 'Datenschutzerklärung von Le Rêve Wellness-Studio.',
  path: '/datenschutz'
});

export default function Datenschutz() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
      <h1 className="font-serif text-4xl text-primary">Datenschutzerklärung</h1>
      
      <div className="space-y-8 text-text-main font-light leading-relaxed">
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-secondary">1. Datenschutz auf einen Blick</h2>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-secondary">2. Datenerfassung auf dieser Website</h2>
          <h3 className="text-xl font-semibold">Wer ist verantwortlich für die Datenerfassung?</h3>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-secondary">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <p>
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
        </section>
      </div>
    </div>
  );
}
