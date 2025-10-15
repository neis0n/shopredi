import { useState, useEffect } from 'react';
import Filters from '../components/Filters.jsx';
import ProductList from '../components/ProductList.jsx';
import { variants } from '../styles/ui.config.js';

function HomePage({ searchQuery, setCartItems, addToCart }) { // don't forget the curly braces !!!
  const [selectedCategory, setSelectedCategory] = useState('all'); // state for selected category

  return (
    <div className="flex flex-col min-h-screen">
      <Filters selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <main className="flex-grow">
        <ProductList 
          searchQuery={searchQuery}
          setCartItems={setCartItems}
          selectedCategory={selectedCategory}
          addToCart={addToCart}
        />
      </main>
    </div>
  );
}

export default HomePage;