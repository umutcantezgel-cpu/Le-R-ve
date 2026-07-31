'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Was soll ich zu meiner Behandlung anziehen?",
    answer: "Kommen Sie einfach so, wie Sie sich am wohlsten fühlen. Für die Behandlung selbst stellen wir Ihnen weiche Handtücher und bei Bedarf Einwegslips zur Verfügung. Sie können sich in Ruhe in Ihrem Behandlungsraum umziehen."
  },
  {
    question: "Wie lauten Ihre Stornierungsbedingungen?",
    answer: "Wir bitten Sie, Termine mindestens 24 Stunden im Voraus abzusagen oder zu verschieben. Bei kurzfristigeren Absagen müssen wir leider 50% des Behandlungspreises in Rechnung stellen, da wir die Zeit exklusiv für Sie reserviert haben."
  },
  {
    question: "Gibt es Parkmöglichkeiten vor Ort?",
    answer: "Ja, es befinden sich ausreichend kostenfreie Parkplätze direkt vor unserem Studio und in den umliegenden Seitenstraßen. Planen Sie am besten 5-10 Minuten vor Ihrem Termin ein, um in Ruhe anzukommen."
  },
  {
    question: "Bieten Sie auch Gutscheine an?",
    answer: "Selbstverständlich. Unsere elegant verpackten Geschenkgutscheine sind das perfekte Präsent für Ihre Liebsten. Sie können diese direkt im Studio erwerben oder bequem online bestellen."
  }
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-24 md:py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="block text-label-caps tracking-widest text-secondary mb-4 uppercase">Fragen & Antworten</span>
          <h2 className="font-headline-lg text-4xl md:text-5xl text-primary">Gut zu wissen</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-panel rounded-3xl border border-surface-variant/50 overflow-hidden transition-all duration-300 ambient-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 md:p-8 text-left focus:outline-none group"
              >
                <span className="font-headline-md text-xl text-primary group-hover:text-secondary-fixed-dim transition-colors">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-secondary flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-6 h-6 group-hover:text-secondary-fixed-dim transition-colors" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 text-on-surface-variant font-body-md leading-relaxed text-lg">
                      <div className="gold-accent-line w-12 mb-4 opacity-50"></div>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
