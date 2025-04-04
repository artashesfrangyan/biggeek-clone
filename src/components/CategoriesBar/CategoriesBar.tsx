import React from 'react';
import { Category } from '../../types';
import '../styles/CategoriesBar.scss';

const mockCategories: Category[] = [
  { id: 1, name: 'Смартфоны', slug: 'smartphones', icon: '📱' },
  { id: 2, name: 'Ноутбуки', slug: 'laptops', icon: '💻' },
  { id: 3, name: 'Наушники', slug: 'headphones', icon: '🎧' },
  { id: 4, name: 'Часы', slug: 'watches', icon: '⌚' },
  { id: 5, name: 'Планшеты', slug: 'tablets', icon: '📟' },
  { id: 6, name: 'Гаджеты', slug: 'gadgets', icon: '🕹️' },
  { id: 7, name: 'Аксессуары', slug: 'accessories', icon: '⌨️' },
];

export const CategoriesBar: React.FC = () => {
  return (
    <div className="categories-bar">
      <div className="categories-scroll-container">
        {mockCategories.map((category) => (
          <div key={category.id} className="category-item">
            <div className="category-icon">{category.icon}</div>
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};