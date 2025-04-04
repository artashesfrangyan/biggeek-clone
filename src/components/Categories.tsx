const categories = ['Смартфоны', 'Ноутбуки', 'Наушники'];

export const Categories = () => (
  <div className="categories">
    {categories.map(cat => (
      <div key={cat} className="category">{cat}</div>
    ))}
  </div>
);