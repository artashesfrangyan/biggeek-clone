import { ProductCard } from './ProductCard';
import { mockProducts } from '../data/products';

export const ProductGrid = () => (
  <section className="product-grid">
    <h2>Популярные товары</h2>
    <div className="grid">
      {mockProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);