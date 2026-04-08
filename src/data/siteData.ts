export interface Product {
  id: string;
  name: string;
  category: 'bolsos' | 'pamelas' | 'bisuteria' | 'complementos';
  image: string;
  price?: string;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Pamela de Paja Natural',
    category: 'pamelas',
    image: 'https://picsum.photos/seed/hat1/800/1000',
    isFeatured: true,
  },
  {
    id: 'p2',
    name: 'Bolso Artesanal de Rafia',
    category: 'bolsos',
    image: 'https://picsum.photos/seed/bag1/800/1000',
    isFeatured: true,
  },
  {
    id: 'p3',
    name: 'Collar de Plata y Piedra Volcánica',
    category: 'bisuteria',
    image: 'https://picsum.photos/seed/jewelry1/800/1000',
    isFeatured: true,
  },
  {
    id: 'p4',
    name: 'Mochila Hecha a Mano',
    category: 'bolsos',
    image: 'https://picsum.photos/seed/backpack1/800/1000',
    isFeatured: true,
  },
  {
    id: 'p5',
    name: 'Pendientes de Acero Elegantes',
    category: 'bisuteria',
    image: 'https://picsum.photos/seed/earrings1/800/1000',
  },
  {
    id: 'p6',
    name: 'Pañuelo de Seda Estampado',
    category: 'complementos',
    image: 'https://picsum.photos/seed/scarf1/800/1000',
  },
];

export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Elena G.',
    text: 'Tienda preciosa con mucho estilo. Siempre encuentro algo especial.',
    rating: 5,
  },
  {
    id: 'r2',
    name: 'Marco S.',
    text: 'Muy diferente a las típicas tiendas de playa. Productos con mucho gusto.',
    rating: 5,
  },
  {
    id: 'r3',
    name: 'Sarah W.',
    text: 'Always find something unique here. The volcanic jewelry is stunning.',
    rating: 5,
  },
  {
    id: 'r4',
    name: 'Klaus M.',
    text: 'Wunderschöner Laden mit einer tollen Auswahl an Accessoires.',
    rating: 5,
  },
];
