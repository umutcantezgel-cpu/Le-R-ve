export default function FAQ() {
  const faqs = [
    {
      q: "Wann sollte ich zu meinem Termin erscheinen?",
      a: "Wir empfehlen Ihnen, etwa 10-15 Minuten vor Beginn Ihrer Behandlung bei uns zu sein. So können Sie in Ruhe ankommen, ein Getränk genießen und sich auf Ihre Auszeit einstimmen."
    },
    {
      q: "Was sollte ich zur Massage anziehen?",
      a: "Sie benötigen keine spezielle Kleidung. Während der Massage decken wir die Körperpartien ab, die gerade nicht massiert werden. Für Ihren Komfort empfehlen wir bequeme Kleidung für den Heimweg."
    },
    {
      q: "Darf ich als Schwangere massiert werden?",
      a: "Ja, wir bieten spezielle Schwangerschaftsmassagen an. Diese empfehlen wir ab der 13. Schwangerschaftswoche. Bitte informieren Sie uns vorab über Ihre Schwangerschaft."
    },
    {
      q: "Kann ich meinen Termin stornieren?",
      a: "Terminabsagen sind bis zu 24 Stunden vor dem vereinbarten Termin kostenfrei möglich. Bitte haben Sie Verständnis, dass wir bei späteren Absagen 50% des Behandlungspreises berechnen müssen."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center space-y-6">
        <h1 className="font-serif text-5xl md:text-6xl text-primary">Häufig gestellte Fragen</h1>
        <p className="text-text-light text-xl font-light">Hier finden Sie Antworten auf die wichtigsten Fragen.</p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="glass-panel p-8 rounded-2xl shadow-sm">
            <h3 className="font-serif text-2xl text-secondary mb-4">{faq.q}</h3>
            <p className="text-text-main font-light leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
