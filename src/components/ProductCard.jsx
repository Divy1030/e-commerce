import React from 'react';
import { Heart } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, onToggleWishlist, isWishlist }) => {
  return (
    <div className="relative card-bg rounded-lg shadow">
      <button 
        onClick={() => onToggleWishlist(product)}
        className="absolute top-2 right-2 z-10"
      >
        <Heart 
          className={`w-6 h-6 ${isWishlist ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
        />
      </button>
      <img 
        src={product.image} 
        alt={product.name}
        className="w-30 h-15 object-cover rounded-t-lg "
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold product-name">{product.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="product-price">${product.price}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="button-bg text-white px-4 py-2 rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;