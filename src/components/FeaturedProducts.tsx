import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/siteData';

export default function FeaturedProducts() {
  const { t } = useLanguage();
  const featured = products.filter(p => p.isFeatured);

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-navy/40 mb-4 block font-sans">
            The Selection
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif">
            {t('featured.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-offwhite">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-[8px] uppercase tracking-[0.3em] text-navy/40 mb-2">
                  {t(`collections.${product.category}`)}
                </span>
                <h3 className="text-sm uppercase tracking-[0.1em] font-medium mb-2 group-hover:text-sand transition-colors">
                  {product.name}
                </h3>
                <div className="w-8 h-px bg-navy/10 group-hover:w-12 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
