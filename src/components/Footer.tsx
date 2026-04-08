import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, MessageCircle, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-navy text-white pt-24 pb-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16 mb-24">
          {/* Brand */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-serif tracking-[0.2em] uppercase">Cosas Monas</h2>
            <p className="text-white/50 text-sm max-w-xs leading-relaxed font-light">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-6">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-sand transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/346710167" target="_blank" rel="noreferrer" className="hover:text-sand transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30">Contact</h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-sand shrink-0" />
                <span className="text-sm font-light text-white/70">{t('contact.location')}</span>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-sand shrink-0" />
                <span className="text-sm font-light text-white/70">+34 671 01 67</span>
              </div>
              <a 
                href="https://wa.me/346710167" 
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-sand hover:underline"
              >
                {t('contact.whatsapp')}
              </a>
            </div>
          </div>

          {/* Newsletter / Placeholder */}
          <div className="flex flex-col gap-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30">Visit Us</h4>
            <div className="aspect-video w-full bg-white/5 relative overflow-hidden group">
              <img 
                src="https://picsum.photos/seed/medano-map/600/400?grayscale" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold border border-white/20 px-4 py-2">
                  View Map
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            {t('footer.rights')}
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
