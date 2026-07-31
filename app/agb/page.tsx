import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'AGB | Le Rêve',
  description: 'Allgemeine Geschäftsbedingungen von Le Rêve Wellness-Studio.',
  path: '/agb'
});

export default function AGB() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
      <h1 className="font-serif text-4xl text-primary">Allgemeine Geschäftsbedingungen</h1>
      
      <div className="space-y-8 text-text-main font-light leading-relaxed">
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-secondary">§ 1 Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Dienstleistungen, die vom Wellness-Studio &quot;Le Rêve&quot; angeboten werden.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-secondary">§ 2 Terminvereinbarung & Stornierung</h2>
          <p>
            Termine werden verbindlich gebucht. Sollten Sie einen Termin nicht wahrnehmen können, bitten wir Sie, diesen mindestens 24 Stunden vorher abzusagen. Bei einer späteren Absage behalten wir uns vor, 50% des Behandlungspreises in Rechnung zu stellen.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-secondary">§ 3 Gesundheitliche Einschränkungen</h2>
          <p>
            Bitte informieren Sie uns vor Behandlungsbeginn über mögliche gesundheitliche Einschränkungen (wie z.B. Schwangerschaft, Allergien, Operationen, Bluthochdruck).
          </p>
        </section>
      </div>
    </div>
  );
}
