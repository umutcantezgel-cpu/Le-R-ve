'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CalendarHeart } from 'lucide-react';

export default function StickyBookNow() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {/* Floating Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="bg-primary text-on-primary rounded-full p-4 ambient-shadow flex items-center justify-center border border-primary/20"
        >
          <CalendarHeart className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-surface rounded-t-[32px] p-6 shadow-2xl border-t border-surface-variant/50 md:hidden flex flex-col max-h-[85vh]"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-headline-md text-2xl text-primary">Termin anfragen</h3>
                  <p className="text-sm text-on-surface-variant mt-1">Wir melden uns in Kürze bei Ihnen.</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-surface-container-high rounded-full text-on-surface-variant hover:text-primary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto pb-4">
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
                  <div>
                    <label htmlFor="drawer-name" className="block text-sm font-label-caps tracking-widest text-secondary uppercase mb-2">Name</label>
                    <input 
                      type="text" 
                      id="drawer-name" 
                      className="w-full bg-background border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-on-surface"
                      placeholder="Ihr Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="drawer-tel" className="block text-sm font-label-caps tracking-widest text-secondary uppercase mb-2">Telefon</label>
                    <input 
                      type="tel" 
                      id="drawer-tel" 
                      className="w-full bg-background border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-on-surface"
                      placeholder="Ihre Telefonnummer"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="drawer-treatment" className="block text-sm font-label-caps tracking-widest text-secondary uppercase mb-2">Wunschbehandlung</label>
                    <select 
                      id="drawer-treatment" 
                      className="w-full bg-background border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-on-surface appearance-none"
                    >
                      <option>Bitte wählen...</option>
                      <option>Schwangerschaftsmassage</option>
                      <option>Aroma-Therapie</option>
                      <option>Head Spa</option>
                      <option>Ganzkörpermassage</option>
                    </select>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary text-on-primary py-4 rounded-full font-body-md hover:bg-primary-fixed-variant transition-colors mt-4"
                  >
                    Jetzt anfragen
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
