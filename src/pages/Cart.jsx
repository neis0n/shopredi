import React from 'react';
import increaseQty from '../utils/increaseQty.js';
import decreaseQty from '../utils/decreaseQty.js';
import { variants } from '../styles/ui.config.js';

function Cart({ cartItems, setCartItems, removeFromCart }) {
  if (!Array.isArray(cartItems)) {
    return <div className="p-4">Cart data is invalid. Please connect with support.</div>;
  }

  function handleIncrease(itemTitle) {
    const newCart = increaseQty(cartItems, itemTitle);
    setCartItems(newCart);
  }

  function handleDecrease(itemTitle) {
    const newCart = decreaseQty(cartItems, itemTitle);
    setCartItems(newCart);
  } 

  /* total price of items in cart */
  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    totalPrice += item.price * item.quantity;
  }

  return (
     <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="flex items-center justify-between border-b pb-4">
                {/* Left side: image + info */}
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                  <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-white text-xl mb-2">${item.price.toFixed(2)}</p>

                    {/* Quantity controls */}
                    <div className="text-white font-bold flex items-center space-x-2">
                      <span>Quantity: {item.quantity}</span>
                      <button onClick={() => handleDecrease(item.title)} className={`ml-2 ${variants.addToCart}`}>-</button>
                      <button onClick={() => handleIncrease(item.title)} className={variants.addToCart}>+</button>
                    </div>
                  </div>
                </div>

                {/* Remove button */}
                <button onClick={() => removeFromCart(item.title)} className={`${variants.danger} px-3 py-1 rounded ml-16 mt-16`}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Total price + Buy button */}
          <div className="mt-6 text-right">
            <p className="text-2xl font-semibold mb-2">Total: ${totalPrice.toFixed(2)}</p>
            <button
              onClick={() => alert(`$${totalPrice.toFixed(2)} you should send to following account: 5739 6465 1984 5678`)}
              className={`${variants.addToCart} mt-2 px-6 py-3 rounded-md text-lg font-semibold hover:scale-105 transition-transform duration-200`}
            >
              Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;