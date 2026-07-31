export default function Impressum() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
      <h1 className="font-serif text-4xl text-primary">Impressum</h1>
      
      <div className="space-y-8 text-text-main font-light leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif text-2xl text-secondary">Angaben gemäß § 5 TMG</h2>
          <p>
            Le Rêve - Ein Wahrer Traum<br />
            Wellnessallee 1<br />
            10115 Berlin
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-2xl text-secondary">Vertreten durch</h2>
          <p>Maximiliane Musterfrau</p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-2xl text-secondary">Kontakt</h2>
          <p>
            Telefon: +49 30 123 456<br />
            E-Mail: bonjour@lereve.de
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-2xl text-secondary">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE 123 456 789
          </p>
        </section>
      </div>
    </div>
  );
}
