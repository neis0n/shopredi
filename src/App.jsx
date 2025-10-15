import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NotFound from './pages/NotFound.jsx';
import Cart from "./pages/Cart.jsx";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';


function App() {
  const [cartItems, setCartItems] = useState(() => { // get cart from localStorage
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => { // save cart to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart (item) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.title === item.title);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  function removeFromCart(itemTitle) {
    setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.title !== itemTitle));
  }

  return (
    <Router>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Routes>
        <Route path='/' element={<HomePage 
          addToCart={addToCart}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setCartItems={setCartItems}
        />} />
        <Route path="/cart" element={<Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          removeFromCart={removeFromCart}/>}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;