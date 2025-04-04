import React from 'react';
import './HeroBanner.scss';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
  overlayOpacity?: number;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  imageUrl,
  ctaText,
  ctaLink,
  overlayOpacity = 0.4
}) => {
  return (
    <div 
      className="hero-banner"
      style={{ 
        backgroundImage: `url(${imageUrl})`,
        position: 'relative'
      }}
    >
      <div 
        className="hero-overlay"
        style={{ opacity: overlayOpacity }}
      />
      
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        
        {subtitle && (
          <p className="hero-subtitle">{subtitle}</p>
        )}
        
        {ctaText && (
          <a 
            href={ctaLink || '#'} 
            className="hero-cta-button"
          >
            {ctaText}
          </a>
        )}
      </div>
    </div>
  );
};