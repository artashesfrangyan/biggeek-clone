// components/ui/Loader.tsx
import React from 'react';
import './Loader.scss';

export const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="loader-spinner"></div>
    </div>
  );
};