import type { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Royal Silk Scarf',
    description:
      'A luxurious silk scarf with traditional patterns, hand-woven by master artisans. Perfect for adding a touch of elegance to any outfit.',
    price: 75.0,
    images: [
      'https://images.unsplash.com/photo-1457545195570-67f207084966?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzY2FyZnxlbnwwfHx8fDE3NTM2MTIzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    category: 'Accessories',
    sku: 'TJ-S-001',
    stock: 25,
  },
  {
    id: '2',
    name: 'Embroidered Cotton Kurta',
    description:
      'A comfortable and stylish cotton kurta featuring intricate embroidery. Ideal for casual wear or festive occasions.',
    price: 120.0,
    images: [
      'https://images.unsplash.com/photo-1622780432053-767528938f34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxrdXJ0YXxlbnwwfHx8fDE3NTM2MTIzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    category: 'Apparel',
    sku: 'TJ-K-002',
    stock: 40,
  },
  {
    id: '3',
    name: 'Linen Trousers',
    description:
      'Breathable and lightweight linen trousers, tailored for a perfect fit. A versatile addition to your wardrobe for both formal and informal settings.',
    price: 95.0,
    images: [
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    category: 'Apparel',
    sku: 'TJ-T-003',
    stock: 50,
  },
  {
    id: '4',
    name: 'Golden Zari Shawl',
    description:
      'An opulent shawl woven with golden zari threads, showcasing timeless craftsmanship. A statement piece for weddings and grand events.',
    price: 250.0,
    images: [
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    category: 'Accessories',
    sku: 'TJ-SH-004',
    stock: 15,
  },
  {
    id: '5',
    name: 'Classic Bandhgala Jacket',
    description:
      'A sophisticated Bandhgala jacket crafted from premium wool blend fabric. Its sharp silhouette and regal buttons make it a must-have for formal wear.',
    price: 350.0,
    images: [
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    category: 'Apparel',
    sku: 'TJ-J-005',
    stock: 20,
  },
  {
    id: '6',
    name: 'Printed Chiffon Saree',
    description:
      'An elegant chiffon saree with contemporary prints. Lightweight and easy to drape, it comes with a matching blouse piece.',
    price: 180.0,
    images: [
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    category: 'Apparel',
    sku: 'TJ-SA-006',
    stock: 30,
  },
  {
    id: '7',
    name: 'Leather Jutti Shoes',
    description:
      'Handcrafted traditional leather juttis with detailed thread work. Comfortable and durable, they pair perfectly with ethnic attire.',
    price: 85.0,
    images: [
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    category: 'Footwear',
    sku: 'TJ-F-007',
    stock: 60,
  },
  {
    id: '8',
    name: 'Pashmina Stole',
    description:
      'An incredibly soft and warm pashmina stole, sourced from the finest cashmere wool. A timeless accessory for chilly evenings.',
    price: 190.0,
    images: [
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    category: 'Accessories',
    sku: 'TJ-ST-008',
    stock: 22,
  },
];
