import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Philosophy() {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="py-32 px-6 lg:px-12 bg-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-t-full">
            <img
              src="https://picsum.photos/seed/medano-shop/1200/1600"
              alt="Cosas Monas Boutique"
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-12 -right-12 hidden lg:block w-64 h-64 border border-white/20 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-sans">
              Experience
            </span>
            <h2 className="text-5xl lg:text-7xl font-serif leading-tight">
              {t('philosophy.title')}
            </h2>
          </div>
          
          <div className="flex flex-col gap-8">
            <p className="text-lg lg:text-xl font-serif text-white/70 leading-relaxed font-light italic">
              {t('philosophy.text')}
            </p>
            <div className="w-24 h-px bg-sand" />
          </div>

          <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/10">
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">Location</h4>
              <p className="text-sm font-sans tracking-wide">Plaza de El Médano, Tenerife</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">Selection</h4>
              <p className="text-sm font-sans tracking-wide">Curated with heart and soul</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
