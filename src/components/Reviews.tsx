import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { reviews } from '../data/siteData';
import { Star } from 'lucide-react';

export default function Reviews() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 lg:px-12 bg-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-navy/40 mb-4 block font-sans">
            Client Stories
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif">
            {t('reviews.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 border border-navy/5 flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={12} className="fill-sand text-sand" />
                ))}
              </div>
              
              <p className="text-sm font-serif italic text-navy/80 leading-relaxed flex-grow">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 pt-4 border-t border-navy/5">
                <div className="w-8 h-8 rounded-full bg-sand/30 flex items-center justify-center text-[10px] font-bold">
                  {review.name[0]}
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold">
                  {review.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
