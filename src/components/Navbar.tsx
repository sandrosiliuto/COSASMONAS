import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe, Instagram, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
  ];

  const navLinks = [
    { href: '#collections', label: t('nav.collections') },
    { href: '#philosophy', label: t('nav.philosophy') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 flex items-center justify-between',
        isScrolled ? 'bg-offwhite/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="flex items-center gap-8">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="lg:hidden text-navy hover:opacity-70 transition-opacity"
        >
          <Menu size={24} />
        </button>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-medium hover:opacity-50 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <a href="/" className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-2xl lg:text-3xl tracking-[0.15em] uppercase font-serif">
          Cosas Monas
        </h1>
      </a>

      <div className="flex items-center gap-4 lg:gap-6">
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-1 text-xs font-medium tracking-widest uppercase hover:opacity-50 transition-opacity"
          >
            <Globe size={14} />
            <span className="hidden sm:inline">{language}</span>
          </button>
          
          <AnimatePresence>
            {isLangOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 bg-white border border-navy/10 shadow-xl p-2 min-w-[80px]"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as any);
                      setIsLangOpen(false);
                    }}
                    className={cn(
                      'block w-full text-left px-3 py-2 text-[10px] tracking-widest uppercase hover:bg-offwhite transition-colors',
                      language === lang.code ? 'font-bold' : 'font-normal'
                    )}
                  >
                    {lang.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">
            <Instagram size={18} />
          </a>
          <a href="https://wa.me/346710167" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">
            <MessageCircle size={18} />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-offwhite z-[60] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-xl tracking-widest uppercase font-serif">Menu</h2>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl uppercase tracking-widest font-serif border-b border-navy/10 pb-4"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-auto flex gap-6">
              <a href="https://instagram.com" className="text-navy/60 hover:text-navy transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://wa.me/346710167" className="text-navy/60 hover:text-navy transition-colors">
                <MessageCircle size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
