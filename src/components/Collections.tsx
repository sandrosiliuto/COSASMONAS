import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

const collections = [
  {
    id: 'pamelas',
    title: 'collections.pamelas',
    image: 'https://picsum.photos/seed/pamelas/1200/1600',
    grid: 'col-span-12 lg:col-span-7',
  },
  {
    id: 'bolsos',
    title: 'collections.bolsos',
    image: 'https://picsum.photos/seed/bolsos/1200/1600',
    grid: 'col-span-12 lg:col-span-5',
  },
  {
    id: 'bisuteria',
    title: 'collections.bisuteria',
    image: 'https://picsum.photos/seed/bisuteria/1200/1600',
    grid: 'col-span-12 lg:col-span-5',
  },
  {
    id: 'complementos',
    title: 'collections.complementos',
    image: 'https://picsum.photos/seed/complementos/1200/1600',
    grid: 'col-span-12 lg:col-span-7',
  },
];

export default function Collections() {
  const { t } = useLanguage();

  return (
    <section id="collections" className="py-24 px-6 lg:px-12 bg-offwhite">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-navy/40 mb-4 block font-sans">
              Curated Selection
            </span>
            <h2 className="text-4xl lg:text-6xl font-serif leading-tight">
              {t('collections.title')}
            </h2>
          </div>
          <div className="hidden lg:block w-32 h-px bg-navy/20 mb-4" />
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={cn('group relative overflow-hidden aspect-[4/5] cursor-pointer', collection.grid)}
            >
              <img
                src={collection.image}
                alt={t(collection.title)}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/40 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                <h3 className="text-3xl lg:text-5xl font-serif mb-6 tracking-wide">
                  {t(collection.title)}
                </h3>
                <div className="w-0 group-hover:w-16 h-px bg-white transition-all duration-500" />
                <span className="mt-4 text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Explore
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
