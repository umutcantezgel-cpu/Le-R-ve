'use client';

import { useState } from 'react';
import Link from 'next/link';

type Step = 1 | 2 | 3;

interface Treatment {
  id: string;
  name: string;
  duration: string;
  price: string;
  category: string;
}

const treatments: Treatment[] = [
  { id: '1', name: 'Sanfte Pränatal-Massage', duration: '60 Min', price: '95 €', category: 'Massagen' },
  { id: '2', name: 'Aroma-Glow Gesichtsbehandlung', duration: '45 Min', price: '75 €', category: 'Aroma-Therapie' },
  { id: '3', name: 'Head Spa & Relax', duration: '60 Min', price: '85 €', category: 'Specials' },
];

const timeSlots = ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00'];

export default function Booking() {
  const [step, setStep] = useState<Step>(1);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  
  const handleTreatmentSelect = (t: Treatment) => {
    setSelectedTreatment(t);
    setStep(2);
  };

  const handleTimeSelect = (t: string) => {
    setSelectedTime(t);
    // Usually you'd select a date first, let's just set a mock date for now
    if (!selectedDate) setSelectedDate('2024-05-15');
    setStep(3);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Vielen Dank für Ihre Buchungsanfrage! Wir werden uns in Kürze bei Ihnen melden.');
    // Reset or redirect here
    setStep(1);
    setSelectedTreatment(null);
  };

  return (
    <div className="flex-grow flex flex-col items-center px-6 w-full max-w-7xl mx-auto py-16">
      
      {/* Header & Progress Tracker */}
      <header className="w-full max-w-4xl text-center mb-16">
        <h1 className="font-serif text-5xl md:text-6xl text-primary mb-4">Termin buchen</h1>
        <p className="text-text-light text-xl font-light mb-12">Ihre Reise zur Entspannung beginnt hier.</p>
        
        {/* Progress Bar */}
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-2">
            <span className={`font-label-caps uppercase tracking-widest text-xs ${step >= 1 ? 'text-primary' : 'text-on-surface-variant/50'}`}>1. Behandlung</span>
            <span className={`font-label-caps uppercase tracking-widest text-xs ${step >= 2 ? 'text-primary' : 'text-on-surface-variant/50'}`}>2. Zeit</span>
            <span className={`font-label-caps uppercase tracking-widest text-xs ${step >= 3 ? 'text-primary' : 'text-on-surface-variant/50'}`}>3. Details</span>
          </div>
          <div className="h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary-fixed transition-all duration-500 rounded-full"
              style={{ width: step === 1 ? '33.33%' : step === 2 ? '66.66%' : '100%' }}
            ></div>
          </div>
        </div>
      </header>

      {/* STEP 1: Treatment Selection */}
      {step === 1 && (
        <section className="w-full max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Alle', 'Massagen', 'Aroma-Therapie', 'Specials'].map(cat => (
              <button key={cat} className={`px-6 py-2 rounded-full font-label-caps uppercase tracking-widest text-xs transition-all ${cat === 'Alle' ? 'bg-primary text-white shadow-sm' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map(t => (
              <div 
                key={t.id} 
                onClick={() => handleTreatmentSelect(t)}
                className="group relative bg-white/60 backdrop-blur-md rounded-xl p-6 border-t border-secondary/30 shadow-[0_32px_64px_-15px_rgba(140,169,149,0.08)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer border-transparent hover:border-primary/20"
              >
                <div>
                  <h3 className="font-serif text-2xl text-primary mb-2">{t.name}</h3>
                  <span className="text-xs tracking-widest text-secondary uppercase font-semibold">{t.category}</span>
                </div>
                <div className="mt-6 pt-4 border-t border-primary/10 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-text-light text-sm">
                      <span className="material-symbols-outlined mr-1 text-[18px]">schedule</span>
                      <span>{t.duration}</span>
                    </div>
                    <div className="flex items-center text-primary font-semibold">
                      <span>{t.price}</span>
                    </div>
                  </div>
                  <button className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white text-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* STEP 2: Date & Time */}
      {step === 2 && (
        <section className="w-full max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500 glass-panel p-8 md:p-12 rounded-[2rem]">
          <div className="flex justify-between items-center mb-8 pb-6 border-b border-primary/10">
            <div>
              <h2 className="font-serif text-2xl text-primary">{selectedTreatment?.name}</h2>
              <p className="text-text-light">{selectedTreatment?.duration} • {selectedTreatment?.price}</p>
            </div>
            <button onClick={() => setStep(1)} className="text-sm text-secondary hover:underline">Ändern</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-xl mb-4 text-primary">Datum wählen</h3>
              <div className="bg-white/50 p-6 rounded-xl border border-primary/10 min-h-[300px] flex items-center justify-center">
                 <p className="text-text-light">[Kalender UI Platzhalter]</p>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4 text-primary">Uhrzeit wählen</h3>
              <div className="grid grid-cols-2 gap-4">
                {timeSlots.map(time => (
                  <button 
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className="py-3 px-4 rounded-lg border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* STEP 3: Details & Confirmation */}
      {step === 3 && (
        <section className="w-full max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
           <form onSubmit={handleBookingSubmit} className="glass-panel p-8 md:p-12 rounded-[2rem] space-y-8">
             <div className="mb-8 pb-6 border-b border-primary/10">
               <h2 className="font-serif text-2xl text-primary mb-2">Ihre Auswahl</h2>
               <p className="text-text-light mb-1">{selectedTreatment?.name} ({selectedTreatment?.duration})</p>
               <p className="text-text-main font-medium">Am {selectedDate} um {selectedTime} Uhr</p>
               <button type="button" onClick={() => setStep(2)} className="text-sm text-secondary hover:underline mt-2">Ändern</button>
             </div>

             <div className="space-y-6">
                <div>
                  <label className="block text-sm text-primary mb-2 uppercase tracking-widest">Name</label>
                  <input required type="text" className="w-full input-zen py-3 px-4 rounded-lg" placeholder="Vor- und Nachname" />
                </div>
                <div>
                  <label className="block text-sm text-primary mb-2 uppercase tracking-widest">E-Mail</label>
                  <input required type="email" className="w-full input-zen py-3 px-4 rounded-lg" placeholder="ihre@email.de" />
                </div>
                <div>
                  <label className="block text-sm text-primary mb-2 uppercase tracking-widest">Telefonnummer (für Rückfragen)</label>
                  <input required type="tel" className="w-full input-zen py-3 px-4 rounded-lg" placeholder="+49 ..." />
                </div>
                <div>
                  <label className="block text-sm text-primary mb-2 uppercase tracking-widest">Besondere Wünsche oder Notizen (Optional)</label>
                  <textarea className="w-full input-zen py-3 px-4 rounded-lg min-h-[100px]" placeholder="Schwangerschaftswoche, Allergien, ..."></textarea>
                </div>
             </div>

             <button type="submit" className="w-full bg-primary text-white py-4 rounded-full font-medium hover:bg-primary-dark transition-colors shadow-lg mt-8">
               Verbindlich anfragen
             </button>
             <p className="text-xs text-center text-text-light mt-4">
               Mit der Anfrage akzeptieren Sie unsere AGB und Datenschutzbestimmungen.
             </p>
           </form>
        </section>
      )}

    </div>
  );
}
