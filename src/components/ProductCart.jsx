import { useState } from 'react';
import { variants } from '../styles/ui.config';

function ProductCart({ title, price, image, setCartItems, addToCart }) {
  const [isFavorite, setIsFavorite] = useState(false); // favorite state
   const discount = 90;
    const oldPrice = price ? price / (1 - discount / 100) : null;

  return (
    <div className="p-4 bg-white text-red-800 shadow-md rounded-lg flex flex-col items-center w-full sm:w-60 md:w-64 justify-items-center" loading="lazy">
      <img src={image} alt={title} className="w-24 h-24 sm:w-32 sm:h-32 object-contain object-center mx-auto mb-4" />
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="text-gray-600">
        {oldPrice && (
          <p className="text-gray-400 text-sm line-through">
            ${oldPrice.toFixed(2)}
          </p>
        )}
        <p className="text-gray-800 text-lg font-semibold">
          ${price?.toFixed(2)} <span className="text-red-500 text-sm">({`${discount}% discount`})</span>
        </p>
      </div>

      <button
        onClick={() => addToCart({ title, price, image })}
        className={`mt-2 px-4 py-2 mr-4 rounded ${variants.addToCart}`}
      >
        {addToCart > 0 ? `In Cart: ${addToCart}` : 'Add to Cart'}
      </button>

      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className={`mt-2 px-4 py-2 rounded ${isFavorite ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-800'}`}
      >
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
    </div>
  );
}

export default ProductCart;