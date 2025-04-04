type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};
  
export const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.price} ₽</p>
  </div>
);