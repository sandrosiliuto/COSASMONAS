import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    'nav.home': 'Inicio',
    'nav.collections': 'Colecciones',
    'nav.philosophy': 'Filosofía',
    'nav.contact': 'Contacto',
    'hero.title': 'Cosas Monas',
    'hero.subtitle': 'Estilo junto al mar',
    'hero.cta': 'Descubrir colección',
    'collections.title': 'Nuestras Colecciones',
    'collections.pamelas': 'Pamelas',
    'collections.bolsos': 'Bolsos',
    'collections.bisuteria': 'Bisutería',
    'collections.complementos': 'Complementos',
    'featured.title': 'Piezas Seleccionadas',
    'philosophy.title': 'Moda con alma de mar',
    'philosophy.text': 'Cada pieza está elegida con mimo para hacerte sentir especial. En la plaza de El Médano, seleccionamos complementos con estilo, personalidad y ese toque artesanal que nos define.',
    'reviews.title': 'Lo que dicen de nosotros',
    'contact.title': 'Visítanos',
    'contact.whatsapp': 'Escríbenos por WhatsApp',
    'contact.location': 'Plaza de El Médano, Tenerife',
    'footer.rights': '© 2026 Cosas Monas. Todos los derechos reservados.',
    'footer.tagline': 'Complementos con alma de mar',
  },
  en: {
    'nav.home': 'Home',
    'nav.collections': 'Collections',
    'nav.philosophy': 'Philosophy',
    'nav.contact': 'Contact',
    'hero.title': 'Cosas Monas',
    'hero.subtitle': 'Style by the sea',
    'hero.cta': 'Discover collection',
    'collections.title': 'Our Collections',
    'collections.pamelas': 'Sun Hats',
    'collections.bolsos': 'Bags',
    'collections.bisuteria': 'Jewelry',
    'collections.complementos': 'Accessories',
    'featured.title': 'Selected Pieces',
    'philosophy.title': 'Fashion with a sea soul',
    'philosophy.text': 'Each piece is carefully chosen to make you feel special. In the square of El Médano, we select accessories with style, personality, and that artisanal touch that defines us.',
    'reviews.title': 'What they say about us',
    'contact.title': 'Visit us',
    'contact.whatsapp': 'Message us on WhatsApp',
    'contact.location': 'El Médano Square, Tenerife',
    'footer.rights': '© 2026 Cosas Monas. All rights reserved.',
    'footer.tagline': 'Accessories with a sea soul',
  },
  de: {
    'nav.home': 'Startseite',
    'nav.collections': 'Kollektionen',
    'nav.philosophy': 'Philosophie',
    'nav.contact': 'Kontakt',
    'hero.title': 'Cosas Monas',
    'hero.subtitle': 'Stil am Meer',
    'hero.cta': 'Kollektion entdecken',
    'collections.title': 'Unsere Kollektionen',
    'collections.pamelas': 'Sonnenhüte',
    'collections.bolsos': 'Taschen',
    'collections.bisuteria': 'Schmuck',
    'collections.complementos': 'Accessoires',
    'featured.title': 'Ausgewählte Stücke',
    'philosophy.title': 'Mode mit Seele des Meeres',
    'philosophy.text': 'Jedes Stück wird sorgfältig ausgewählt, damit Sie sich besonders fühlen. Auf dem Platz von El Médano wählen wir Accessoires mit Stil, Persönlichkeit und der handwerklichen Note aus, die uns auszeichnet.',
    'reviews.title': 'Was man über uns sagt',
    'contact.title': 'Besuchen Sie uns',
    'contact.whatsapp': 'Schreiben Sie uns auf WhatsApp',
    'contact.location': 'Platz von El Médano, Teneriffa',
    'footer.rights': '© 2026 Cosas Monas. Alle Rechte vorbehalten.',
    'footer.tagline': 'Accessoires mit Seele des Meeres',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
