import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { mockProducts } from './data/products';
import { Product } from './types';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [products, setProducts] = useState<{
    popular: Product[];
    newArrivals: Product[];
  }>({ popular: [], newArrivals: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Имитация API-запроса
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setProducts({
          popular: mockProducts.filter(p => p.isBestseller),
          newArrivals: mockProducts.filter(p => p.isNew)
        });
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Home
      popularProducts={products.popular}
      newArrivals={products.newArrivals}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default App;