import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/medano-beach/1920/1080?blur=2"
          alt="El Médano Beach"
          className="w-full h-full object-cover opacity-60 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.5em] text-white/80 mb-6 block font-sans">
            {t('hero.subtitle')}
          </span>
          <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-serif text-white leading-none mb-12 tracking-tight">
            {t('hero.title')}
          </h1>
          
          <div className="flex flex-col items-center gap-8">
            <motion.a
              href="#collections"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-navy text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-sand transition-colors duration-500"
            >
              {t('hero.cta')}
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[8px] uppercase tracking-[0.4em] text-white/40">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/40"
          >
            <ArrowDown size={16} strokeWidth={1} />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-12 bottom-12 hidden lg:block">
        <div className="flex flex-col gap-2">
          <div className="w-px h-24 bg-white/20" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 vertical-text rotate-180">
            Est. 2026
          </span>
        </div>
      </div>
    </section>
  );
}
