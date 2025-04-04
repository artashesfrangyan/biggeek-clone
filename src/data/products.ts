export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating?: number;
}
  
export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 99990,
    image: '/assets/images/iphone.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'MacBook Air M2',
    price: 109990,
    image: '/assets/images/macbook.jpg',
    rating: 4,
  }
];