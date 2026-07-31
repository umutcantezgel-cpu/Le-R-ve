'use client';

import ImagePlaceholder from '@/components/ImagePlaceholder';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import TenCard from '@/components/TenCard';
import HomeFAQ from '@/components/HomeFAQ';
import { constructMetadata } from '@/lib/seo';


const testimonials = [
  {
    name: "Sarah M.",
    role: "Werdende Mutter",
    text: "Die Schwangerschaftsmassage war ein absoluter Traum. Ich habe mich noch nie so geborgen und entspannt gefühlt. Ein wunderschönes Erlebnis in einer so besonderen Zeit."
  },
  {
    name: "Elena K.",
    role: "Stammkundin",
    text: "Das Head Spa ist mein persönliches Highlight. Der Alltagsstress fällt komplett von mir ab, sobald ich den Raum betrete. Die Liebe zum Detail hier ist unvergleichlich."
  },
  {
    name: "Julia W.",
    role: "Neu-Kundin",
    text: "Vom ersten Moment an fühlt man sich willkommen. Das Ambiente, die Düfte, die wundervolle Behandlung – es stimmt einfach alles. Ich komme definitiv wieder."
  }
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const introRef = useRef(null);
  const { scrollYProgress: introScrollYProgress } = useScroll({
    target: introRef,
    offset: ["start end", "end start"],
  });
  const introY = useTransform(introScrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-background">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.08] }} 
            transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full relative"
          >
            <ImagePlaceholder 
              className="w-full h-full opacity-60"
              icon="spa"
            />
            <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 sage-tint-overlay"></div>
          </motion.div>
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 xl:px-24 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-panel p-8 md:p-16 rounded-3xl ambient-shadow max-w-4xl w-full border border-surface-variant/50"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="block text-label-caps tracking-widest text-secondary mb-6 uppercase"
            >
              Willkommen bei Le Rêve
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="font-headline-xl text-5xl md:text-7xl lg:text-[80px] text-primary leading-tight mb-6"
            >
              Ein Wahrer Traum. <br />
              <span className="italic font-light text-primary/80">Nur für Sie.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Ein exklusiver Rückzugsort für Frauen und werdende Mütter. Entfliehen Sie dem Alltag, finden Sie tiefe Entspannung und lassen Sie sich in einer Oase der Ruhe rundum verwöhnen.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link 
                href="/treatments" 
                className="bg-primary text-on-primary px-8 py-4 rounded-full font-body-md hover:bg-primary-fixed-variant transition-colors w-full sm:w-auto text-center"
              >
                Treatments entdecken
              </Link>
              <Link 
                href="/kontakt" 
                className="gold-border text-on-surface px-8 py-4 rounded-full font-body-md hover:bg-surface-variant transition-colors w-full sm:w-auto text-center"
              >
                Termin vereinbaren
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro / Philosophy Snippet */}
      <section ref={introRef} className="w-full py-24 md:py-32 px-6 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-[3/4] rounded-t-full rounded-b-3xl overflow-hidden gold-inset-frame p-2 z-10">
            <motion.div style={{ y: introY }} className="relative w-full h-[120%] -top-[10%] rounded-t-full rounded-b-[20px] overflow-hidden">
              <motion.div 
                animate={{ scale: [1, 1.05] }} 
                transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                className="w-full h-full relative"
              >
                <ImagePlaceholder 
                  className="w-full h-full"
                  icon="water_drop"
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="flex flex-col items-start text-left z-10">
            <h2 className="font-headline-lg text-4xl md:text-5xl text-primary mb-8">Ihr persönlicher Rückzugsort</h2>
            <div className="gold-accent-line w-24 mb-8"></div>
            <p className="font-body-md text-on-surface-variant leading-relaxed mb-6">
              Le Rêve ist mehr als ein Studio – es ist ein Zufluchtsort in der Stadt. Wir haben einen Ort geschaffen, der speziell darauf ausgerichtet ist, Frauen eine tiefe, regenerative Auszeit zu bieten. 
            </p>
            <p className="font-body-md text-on-surface-variant leading-relaxed mb-10">
              Ob beruhigende Schwangerschaftsmassagen, revitalisierende Head Spa-Erlebnisse oder klassische Wellness-Behandlungen: Hier steht Ihr Wohlbefinden an erster Stelle. Atmen Sie den Duft unserer Aromaöle ein und lassen Sie den Stress hinter sich.
            </p>
            <Link 
              href="/philosophie" 
              className="text-secondary font-label-caps uppercase tracking-widest hover:text-secondary-fixed-dim transition-colors flex items-center gap-2"
            >
              Unsere Philosophie
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="w-full py-24 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-16 md:mb-24">
            <span className="block text-label-caps tracking-widest text-secondary mb-4 uppercase">Unser Angebot</span>
            <h2 className="font-headline-lg text-4xl md:text-5xl text-primary">Ausgewählte Treatments</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
            {[
              {
                title: 'Schwangerschaftsmassage',
                desc: 'Spezielle Techniken zur Entlastung und tiefen Entspannung für werdende Mütter in geborgener Atmosphäre.',
                img: 'spa-preg',
                href: '/treatments/massagen'
              },
              {
                title: 'Head Spa & Relax',
                desc: 'Eine revitalisierende Kopfhaut- und Nackenbehandlung, die Stress abbaut und den Geist klärt.',
                img: 'spa-head',
                href: '/treatments/head-spa'
              },
              {
                title: 'Aroma-Öl Massage',
                desc: 'Individuell abgestimmte ätherische Öle kombiniert mit fließenden Massagegriffen für ganzheitliches Wohlbefinden.',
                img: 'spa-aroma',
                href: '/treatments/massagen'
              }
            ].map((service, i) => (
              <div key={i} className="flex flex-col group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 gold-border">
                  <ImagePlaceholder 
                    className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                    icon="self_care"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h3 className="font-headline-md text-2xl text-primary mb-3">{service.title}</h3>
                <p className="font-body-md text-on-surface-variant mb-6 flex-grow">{service.desc}</p>
                <Link 
                  href={service.href} 
                  className="text-secondary font-label-caps uppercase tracking-widest hover:text-secondary-fixed-dim transition-colors flex items-center gap-2 mt-auto"
                >
                  Mehr über {service.title} erfahren
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="w-full py-24 md:py-32 px-6 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="block text-label-caps tracking-widest text-secondary mb-4 uppercase">Stimmen</span>
            <h2 className="font-headline-lg text-4xl md:text-5xl text-primary">Was unsere Kundinnen sagen</h2>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 -mx-6 px-6 md:mx-0 md:px-0">
            {testimonials.map((t, i) => (
              <div key={i} className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-background p-8 md:p-10 rounded-3xl ambient-shadow border border-surface-variant/40 flex flex-col justify-between">
                <div>
                  <div className="text-secondary mb-6">
                    <span className="material-symbols-outlined text-4xl opacity-50">format_quote</span>
                  </div>
                  <p className="font-body-lg text-on-surface-variant leading-relaxed mb-8 italic text-lg">
                    &quot;{t.text}&quot;
                  </p>
                </div>
                <div>
                  <p className="font-headline-md text-xl text-primary">{t.name}</p>
                  <p className="text-sm font-label-caps tracking-wider text-secondary mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="w-full py-24 md:py-32 px-6 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <span className="block text-label-caps tracking-widest text-secondary mb-4 uppercase">@lereve_spa</span>
          <h2 className="font-headline-lg text-4xl md:text-5xl text-primary mb-16">Le Rêve Moments</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              'spa-details-1',
              'spa-details-2',
              'spa-details-3',
              'spa-details-4'
            ].map((img, i) => (
              <div key={i} className="relative aspect-square rounded-3xl overflow-hidden group border border-outline-variant/30">
                <ImagePlaceholder 
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                  icon="photo_camera"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-4xl">favorite</span>
                </div>
              </div>
            ))}
          </div>
          
          <Link 
            href="#" 
            className="gold-border text-on-surface px-8 py-4 rounded-full font-body-md hover:bg-surface-variant transition-colors inline-flex items-center gap-2"
          >
            Follow for Inspiration
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </Link>
        </div>
      </section>

      {/* 10-er Karte Section */}
      <section className="w-full py-24 md:py-32 px-6 bg-background relative">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          <div className="flex flex-col items-start text-left order-2 lg:order-1">
            <span className="block text-label-caps tracking-widest text-secondary mb-4 uppercase">Treue wird belohnt</span>
            <h2 className="font-headline-lg text-4xl md:text-5xl text-primary mb-8">Die Le Rêve Treuekarte</h2>
            <div className="gold-accent-line w-24 mb-8"></div>
            <p className="font-body-md text-on-surface-variant leading-relaxed mb-6 text-lg">
              Regelmäßige Auszeiten sind Balsam für Körper und Seele. Mit unserer exklusiven 10er Karte möchten wir uns für Ihr Vertrauen bedanken.
            </p>
            <p className="font-body-md text-on-surface-variant leading-relaxed mb-10">
              Nach zehn genossenen Behandlungen laden wir Sie zu einer kostenlosen Entspannungsbehandlung Ihrer Wahl ein. Sichern Sie sich Ihre Karte bei Ihrem nächsten Besuch im Studio.
            </p>
            <Link 
              href="/kontakt" 
              className="bg-primary text-on-primary px-8 py-4 rounded-full font-body-md hover:bg-primary-fixed-variant transition-colors inline-block"
            >
              Termin anfragen
            </Link>
          </div>
          <div className="order-1 lg:order-2">
             <TenCard completedVisits={4} />
          </div>
        </div>
      </section>

    </div>
  );
}
