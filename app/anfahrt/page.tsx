export default function Anfahrt() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center space-y-6">
        <span className="text-secondary tracking-widest uppercase text-sm font-semibold">Standort</span>
        <h1 className="font-serif text-5xl md:text-6xl text-primary">Anfahrt & Parken</h1>
        <p className="text-text-light text-xl font-light">Wellnessallee 1, 10115 Berlin</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-surface-container-low min-h-[300px] rounded-2xl flex items-center justify-center border border-primary/10">
          <p className="text-text-light">[Stylized Map Placeholder]</p>
        </div>

        <div className="space-y-8">
          <div className="glass-panel p-8 rounded-2xl space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">directions_transit</span>
              </div>
              <h2 className="font-serif text-2xl text-primary">Öffentliche Verkehrsmittel</h2>
            </div>
            <ul className="space-y-2 text-text-main font-light pl-16">
              <li><strong>U-Bahn:</strong> U6 (Naturkundemuseum) - 3 Min. Fußweg</li>
              <li><strong>Tram:</strong> M5, M8, M10 (Invalidenpark)</li>
              <li><strong>S-Bahn:</strong> Nordbahnhof - 8 Min. Fußweg</li>
            </ul>
          </div>

          <div className="glass-panel p-8 rounded-2xl space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">local_parking</span>
              </div>
              <h2 className="font-serif text-2xl text-primary">Parkmöglichkeiten</h2>
            </div>
            <div className="pl-16 space-y-4 text-text-main font-light">
              <div>
                <strong className="text-primary block">Eigene Kundenparkplätze</strong>
                Im Innenhof stehen 3 kostenfreie Parkplätze für die Dauer Ihres Aufenthalts zur Verfügung. Bitte bei Buchung reservieren.
              </div>
              <div>
                <strong className="text-primary block">Parkhaus in der Nähe</strong>
                Parkhaus &quot;Luisenstraße&quot; (2 Gehminuten entfernt). Wir erstatten Ihnen 50% der Parkgebühren für die Dauer Ihrer Behandlung.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
