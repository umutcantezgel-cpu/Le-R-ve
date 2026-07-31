"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Philosophie', href: '/philosophie' },
  { name: 'Treatments', href: '/treatments' },
  { name: 'Über mich', href: '/ueber-mich' },
  { name: 'Journal', href: '/blog' },
  { name: 'Preise', href: '/preise' },
];

const extraMobileLinks = [
  { name: 'Specials', href: '/specials' },
  { name: 'Gutscheine', href: '/gutscheine' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-black/70 backdrop-blur-2xl border-b border-secondary/20 shadow-[0_32px_64px_-15px_rgba(140,169,149,0.08)] transition-colors duration-300">
        <div className="flex justify-between items-center px-container-padding-mobile md:px-container-padding-desktop py-4 max-w-full mx-auto">
          <Link href="/" className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-secondary-fixed-variant dark:text-secondary-fixed italic font-semibold hover:scale-[1.02] transition-transform duration-300 relative z-50">
            Le Rêve
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center font-headline-md text-headline-md font-medium tracking-tight">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`transition-colors hover:scale-[1.02] duration-300 ${pathname === link.href ? 'text-secondary' : 'text-on-surface-variant dark:text-surface-variant hover:text-secondary'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 relative z-50">
            <Link href="/booking" className="hidden md:flex bg-primary text-on-primary font-body-md text-body-md px-6 py-2 rounded-lg hover:border-secondary-fixed hover:border cursor-pointer active:scale-95 transition-all shadow-sm">
              Termin buchen
            </Link>
            
            {/* Hamburger Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-primary p-2 -mr-2 rounded-full hover:bg-primary/5 transition-colors focus:outline-none"
              aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            >
              <motion.span 
                className="material-symbols-outlined block"
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                {isOpen ? 'close' : 'menu'}
              </motion.span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-3xl md:hidden flex flex-col pt-28 pb-8 px-8 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.4 }}
                >
                  <Link 
                    href={link.href}
                    className={`font-serif text-4xl block ${pathname === link.href ? 'text-secondary' : 'text-primary'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.4 }}
                className="h-px w-full bg-secondary/20 my-4"
              />

              {extraMobileLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.4, duration: 0.4 }}
                >
                  <Link 
                    href={link.href}
                    className="font-body-md text-xl text-text-main hover:text-secondary block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mt-auto pt-12"
            >
              <Link 
                href="/booking" 
                className="flex items-center justify-center w-full bg-primary text-white font-medium py-4 rounded-xl active:scale-95 transition-transform text-lg shadow-lg shadow-primary/20"
              >
                Termin buchen
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
