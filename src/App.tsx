import React from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { CartProvider } from './contexts/CartContext';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Layout>
        <Home />
      </Layout>
    </CartProvider>
  );
};

export default App;