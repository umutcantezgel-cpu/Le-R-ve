'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface TenCardProps {
  completedVisits?: number;
}

export default function TenCard({ completedVisits = 4 }: TenCardProps) {
  const slots = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="glass-panel p-8 rounded-3xl ambient-shadow border border-surface-variant/50 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary-container/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-primary-fixed-dim/10 rounded-full blur-2xl"></div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <h3 className="font-headline-md text-2xl text-primary mb-2">Ihre 10er Karte</h3>
            <p className="text-sm text-on-surface-variant">Jeder Besuch ein Schritt zur Entspannung</p>
          </div>

          <div className="grid grid-cols-5 gap-4">
            {slots.map((slot, index) => {
              const isCompleted = index < completedVisits;
              return (
                <div 
                  key={slot}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 relative
                      ${isCompleted 
                        ? 'bg-surface shadow-[inset_0_0_10px_rgba(184,134,11,0.2)] border border-[#C5A059]' 
                        : 'bg-surface-container-low border border-outline-variant/30'
                      }
                    `}
                  >
                    {isCompleted ? (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: index * 0.1 
                        }}
                      >
                        <Star className="w-6 h-6 text-[#C5A059] fill-[#C5A059]" />
                      </motion.div>
                    ) : (
                      <span className="text-on-surface-variant/40 font-body-md text-sm">{slot}</span>
                    )}
                  </div>
                  {slot === 10 && (
                    <div className="text-[10px] uppercase font-label-caps tracking-wider text-secondary mt-1 text-center whitespace-nowrap absolute -bottom-4">
                      Gratis
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="mt-10 text-center">
            <div className="gold-accent-line w-16 mx-auto mb-4"></div>
            <p className="text-sm text-on-surface-variant">
              Noch <strong className="text-primary">{10 - completedVisits}</strong> Besuche bis zu Ihrer Gratis-Behandlung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
