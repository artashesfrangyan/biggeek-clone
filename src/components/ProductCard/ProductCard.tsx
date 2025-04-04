import React from 'react';
import { Product } from '../../types';
import { useCart } from '../../contexts/CartContext';
import './ProductCard.scss';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart, isInCart } = useCart();
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="product-card">
      <div className="product-card__badges">
        {product.isNew && <span className="badge-new">New</span>}
        {product.isBestseller && <span className="badge-bestseller">Хит</span>}
      </div>

      <img 
        src={product.images[0]} 
        alt={product.name} 
        className="product-card__image"
      />

      <h3 className="product-card__title">{product.name}</h3>

      <div className="product-card__price">
        {product.oldPrice && (
          <span className="price-old">{product.oldPrice} ₽</span>
        )}
        <span className="price-current">{product.price} ₽</span>
      </div>

      <div className="product-card__rating">
        {'★'.repeat(Math.round(product.rating))}
        {'☆'.repeat(5 - Math.round(product.rating))}
        <span>({product.reviewsCount})</span>
      </div>

      <div className="product-card__actions">
        <button
          onClick={handleAddToCart}
          className={`add-to-cart ${isInCart(product.id) ? 'in-cart' : ''}`}
          disabled={isInCart(product.id)}
        >
          {isInCart(product.id) ? 'В корзине' : 'Купить'}
        </button>

        <button
          onClick={toggleFavorite}
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          aria-label={isFavorite ? 'Удалить из избранного' : 'В избранное'}
        >
          ♥
        </button>
      </div>
    </div>
  );
};