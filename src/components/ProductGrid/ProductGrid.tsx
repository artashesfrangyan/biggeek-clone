import React from 'react';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard/ProductCard';
import { useCart } from '../../contexts/CartContext';
import './ProductGrid.scss';

interface ProductGridProps {
  products: Product[];
  title?: string;
  loading?: boolean;
  itemsPerRow?: 3 | 4 | 5;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  title = 'Популярные товары',
  loading = false,
  itemsPerRow = 4,
}) => {

  if (loading) {
    return (
      <div className="product-grid loading">
        <h2 className="section-title">{title}</h2>
        <div className={`grid-container items-${itemsPerRow}`}>
          {[...Array(8)].map((_, index) => (
            <div key={index} className="product-skeleton">
              <div className="skeleton-image" />
              <div className="skeleton-line short" />
              <div className="skeleton-line medium" />
              <div className="skeleton-line long" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="product-grid">
      <h2 className="section-title">{title}</h2>
      <div className={`grid-container items-${itemsPerRow}`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};