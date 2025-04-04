import React from 'react';
import './Layout.css';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      <header>{/* Header будет здесь */}</header>
      <main>{children}</main>
      <footer>{/* Footer будет здесь */}</footer>
    </div>
  );
};