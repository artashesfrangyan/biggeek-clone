// src/data/products.ts
import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Смартфон премиум-класса',
    slug: 'premium-smartphone',
    price: 89990,
    oldPrice: 99990,
    description: 'Флагманский смартфон с процессором последнего поколения и тройной камерой',
    specifications: {
      'Экран': '6.7" AMOLED 120Hz',
      'Процессор': 'Snapdragon 8 Gen 2',
      'Память': '12/256GB',
      'Камера': '108MP + 12MP + 8MP',
      'Батарея': '5000 мАч'
    },
    images: [
      'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?auto=format&fit=crop&w=600',
      'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    rating: 4.8,
    reviewsCount: 45,
    availableCount: 15,
    isAvailable: true,
    isNew: true,
    isBestseller: true,
    categoryId: 1
  },
  {
    id: 2,
    name: 'Игровой ноутбук',
    slug: 'gaming-laptop',
    price: 149990,
    description: 'Мощный ноутбук для гейминга с RGB-подсветкой',
    specifications: {
      'Процессор': 'Intel Core i9-13900H',
      'Видеокарта': 'RTX 4080',
      'Экран': '17.3" QHD 240Hz',
      'Память': '32GB DDR5',
      'Накопитель': '2TB NVMe SSD'
    },
    images: [
      'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=600'
    ],
    rating: 4.9,
    reviewsCount: 32,
    availableCount: 7,
    isAvailable: true,
    isNew: false,
    isBestseller: true,
    categoryId: 2
  },
  {
    id: 3,
    name: 'Беспроводные наушники',
    slug: 'wireless-headphones',
    price: 19990,
    oldPrice: 24990,
    description: 'Наушники с активным шумоподавлением и 30-часовой работой',
    specifications: {
      'Тип': 'Накладные',
      'Зарядка': 'USB-C',
      'Время работы': '30 часов',
      'Водозащита': 'IPX4',
      'Вес': '265 г'
    },
    images: [
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?auto=format&fit=crop&w=600'
    ],
    rating: 4.7,
    reviewsCount: 68,
    availableCount: 23,
    isAvailable: true,
    isNew: false,
    isBestseller: true,
    categoryId: 3
  },
  {
    id: 4,
    name: 'Умные часы премиум',
    slug: 'smart-watch-premium',
    price: 34990,
    description: 'Смарт-часы с функцией ЭКГ и отслеживанием сна',
    specifications: {
      'Экран': '1.78" AMOLED',
      'Совместимость': 'iOS/Android',
      'Датчики': 'ЭКГ, SpO2, акселерометр',
      'Водозащита': '5ATM',
      'Батарея': '7 дней'
    },
    images: [
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600',
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    rating: 4.6,
    reviewsCount: 89,
    availableCount: 12,
    isAvailable: true,
    isNew: true,
    isBestseller: false,
    categoryId: 4
  },
  {
    id: 5,
    name: 'Планшет 10.9"',
    slug: '10-9-tablet',
    price: 65990,
    oldPrice: 75990,
    description: 'Планшет с мощным процессором и стилусом в комплекте',
    specifications: {
      'Экран': '10.9" Liquid Retina',
      'Процессор': 'Apple M1',
      'Память': '8/256GB',
      'Камера': '12MP + 12MP',
      'Стилус': 'Поддержка Apple Pencil 2'
    },
    images: [
      'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=600',
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    rating: 4.8,
    reviewsCount: 47,
    availableCount: 9,
    isAvailable: true,
    isNew: false,
    isBestseller: true,
    categoryId: 5
  },
  {
    id: 6,
    name: 'Игровая консоль',
    slug: 'gaming-console',
    price: 54990,
    description: 'Новейшая игровая консоль с 4K HDR',
    specifications: {
      'Процессор': 'Custom AMD Zen 2',
      'Графика': 'RDNA 2',
      'Хранилище': '825GB SSD',
      '4K': 'До 120 FPS',
      'Поддержка': 'Ray Tracing'
    },
    images: [
      'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600',
      'https://images.pexels.com/photos/4522994/pexels-photo-4522994.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    rating: 4.9,
    reviewsCount: 124,
    availableCount: 5,
    isAvailable: true,
    isNew: false,
    isBestseller: true,
    categoryId: 6
  },
  {
    id: 7,
    name: 'Экшн-камера 4K',
    slug: '4k-action-camera',
    price: 28990,
    description: 'Водонепроницаемая камера для экстремальной съемки',
    specifications: {
      'Разрешение': '4K/60fps',
      'Стабилизация': 'Электронная',
      'Водозащита': '10м без чехла',
      'Экран': '2.3" сенсорный',
      'Вес': '158 г'
    },
    images: [
      'https://images.unsplash.com/photo-1512790182412-b19e6d62a39d?auto=format&fit=crop&w=600',
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    rating: 4.5,
    reviewsCount: 56,
    availableCount: 18,
    isAvailable: true,
    isNew: true,
    isBestseller: false,
    categoryId: 7
  }
];