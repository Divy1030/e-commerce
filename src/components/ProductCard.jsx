import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const ProductCard = ({ product, onAddToCart, onToggleWishlist, isWishlist }) => {
  const { cart, removeFromCart } = useShop();
  const [quantity, setQuantity] = useState(() => {
    const savedQuantity = localStorage.getItem(`product-${product.id}-quantity`);
    return savedQuantity ? parseInt(savedQuantity, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem(`product-${product.id}-quantity`, quantity);
  }, [quantity, product.id]);

  useEffect(() => {
    const cartItem = cart.find(item => item.id === product.id);
    if (cartItem) {
      setQuantity(cartItem.quantity);
    } else {
      setQuantity(0);
    }
  }, [cart, product.id]);

  const handleAddToCart = () => {
    if (quantity === 0) {
      setQuantity(1);
      onAddToCart(product);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    onAddToCart(product);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      onAddToCart(product);
    } else {
      setQuantity(0);
      removeFromCart(product.id);
    }
  };

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
          {quantity === 0 ? (
            <button
              onClick={handleAddToCart}
              className="button-bg text-white px-4 py-2 rounded-lg"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center">
              <button
                onClick={handleDecreaseQuantity}
                className="button-bg text-white px-2 py-1 rounded-lg"
              >
                -
              </button>
              <span className="mx-2">{quantity}</span>
              <button
                onClick={handleIncreaseQuantity}
                className="button-bg text-white px-2 py-1 rounded-lg"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;