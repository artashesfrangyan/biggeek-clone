// Основные типы данных приложения

export type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number; // Для отображения старой цены
  imageUrl: string;
  rating: number;
  reviewsCount: number;
  isAvailable: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  categoryId: number;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  imageUrl?: string;
  parentId?: number | null;
};

export type CartItem = {
  product: Product;
  quantity: number;
  addedAt: number; // timestamp
};

export type PromoBanner = {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
  isActive: boolean;
};

export type Review = {
  id: number;
  userName: string;
  rating: number;
  text: string;
  date: string;
  productId: number;
};

// Типы для API-ответов
export type ApiResponse<T> = {
  data: T;
  success: boolean;
  message?: string;
  total?: number; // Для пагинации
};

// Типы для фильтров
export type PriceRange = {
  min: number;
  max: number;
};

export type ProductFilters = {
  priceRange: PriceRange;
  availableOnly: boolean;
  categories: number[];
};

// Типы для UI
export type DropdownOption = {
  value: string | number;
  label: string;
};

// Типы для форм
export type OrderFormData = {
  name: string;
  phone: string;
  email: string;
  address: string;
  comment?: string;
  paymentMethod: 'card' | 'cash';
  deliveryType: 'courier' | 'pickup';
};