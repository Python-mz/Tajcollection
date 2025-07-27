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
      'https://images.unsplash.com/photo-1649566650740-cb0a625e1b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMXx8bGluZW4lMjB0cm91c2VyfGVufDB8fHx8MTc1MzYxMjQ3MXww&ixlib=rb-4.1.0&q=80&w=1080',
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
      'https://images.unsplash.com/photo-1707467885365-14ca6cc08bd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8Z29sZGVuJTIwc2hhd2x8ZW58MHx8fHwxNzUzNjEyNDM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
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
      'https://images.unsplash.com/photo-1592878849122-facb97520f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNXx8YmFuZGhnYWxhJTIwamFja2V0fGVufDB8fHx8MTc1MzYxMjY2NHww&ixlib=rb-4.1.0&q=80&w=1080',
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
      'https://images.unsplash.com/photo-1693987646600-c911a3f571b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxwcmludGVkJTIwc2FyZWV8ZW58MHx8fHwxNzUzNjEyNjk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
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
      'https://images.unsplash.com/photo-1616696038562-574c18066055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxsZXRoZWFyJTIwc2hvZXN8ZW58MHx8fHwxNzUzNjEyNzI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
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
      'data:image/jpeg;base64,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',
      'https://placehold.co/600x600.png',
    ],
    category: 'Accessories',
    sku: 'TJ-ST-008',
    stock: 22,
  },
];
