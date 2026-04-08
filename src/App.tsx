import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import FeaturedProducts from './components/FeaturedProducts';
import Philosophy from './components/Philosophy';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-offwhite selection:bg-sand selection:text-navy">
        <Navbar />
        
        <main>
          <Hero />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Collections />
            <FeaturedProducts />
            <Philosophy />
            <Reviews />
          </motion.div>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
