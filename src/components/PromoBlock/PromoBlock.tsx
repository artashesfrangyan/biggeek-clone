import React from 'react';
import '../styles/PromoBlock.scss';

export interface PromoItem {
  title: string;
  description: string;
  icon: string | React.ReactNode;
}

interface PromoBlockProps {
  items: PromoItem[];
}

export const PromoBlock: React.FC<PromoBlockProps> = ({ items }) => {
  return (
    <div className="promo-block">
      {items.map((item, index) => (
        <div key={index} className="promo-item">
          <div className="promo-icon">{item.icon}</div>
          <div className="promo-content">
            <h3 className="promo-title">{item.title}</h3>
            <p className="promo-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};