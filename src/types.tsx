export type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  oldPrice?: number;
  description: string;
  specifications: {
    [key: string]: string;
  };
  images: string[];
  rating: number;
  reviewsCount: number;
  availableCount: number;
  isAvailable: boolean;
  isNew: boolean;
  isBestseller: boolean;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
};
  