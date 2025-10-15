import { useState, useEffect } from 'react';
import ProductCart from './ProductCart.jsx';

function ProductList({ searchQuery, setCartItems, selectedCategory, addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Component ProductList has been rendered!");

    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
       } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []); // runs only once

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === 'all' ? true : product.category.toLowerCase() === selectedCategory.toLowerCase();
    const searchTermMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchTermMatch;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-amber-50 ">
      {filteredProducts.map((product) => (
        <ProductCart
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          setCartItems={setCartItems}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;