import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header({ searchQuery, setSearchQuery, cartItems }) {
  const location = useLocation();


  /* total number of items in cart */
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
   const item = cartItems[i];
   total += item.quantity;
  }
  const cartItemCount = total;

  return (
    <header className="bg-amber-200 text-red-800 p-4 flex justify-between items-center w-full">
      <nav className="flex items-center justify-between flex-grow shrink basis-100px">
        <Link to="/" className="text-2xl font-bold">Best Shop</Link>

        {location.pathname === '/' && (
          <div className="flex-1 flex justify-center mx-4">
            <input
             type="text"
             placeholder="Search products..."
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)} // updates search query state
             className="px-4 py-2 w-1/2 rounded border border-gray-300"
            />
          </div>
        )
        }

        <div className="flex items-center">
          <Link to="/cart" className="text-white ml-4 flex items-center rounded-full">
            <span className="mr-2">Cart:</span> 
            {cartItemCount}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;