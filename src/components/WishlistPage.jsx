import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useShop } from '../context/ShopContext';

const WishlistPage = () => {
  const { wishlist, addAllToCart, onAddToCart, onToggleWishlist } = useShop();
  const navigate = useNavigate();

  const handleAddAllToCart = () => {
    addAllToCart();
    navigate('/cart'); // Redirect to the cart page
  };

  const handleContinueShopping = () => {
    navigate('/'); // Redirect to the home page
  };
 
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Wishlist</h1>
        {wishlist.length > 0 && (
          <button
            onClick={handleAddAllToCart}
            className="checkout-button-bg text-white px-4 py-2 rounded-lg"
          >
            Add All to Cart
          </button>
        )}
      </div>
      {wishlist.length === 0 ? (
        <div className="text-center">
          <p className="text-lg">Thank yooooouuuu...</p>
          <button
            onClick={handleContinueShopping}
            className="w-40 checkout-button-bg text-white py-3 rounded-lg mt-4"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isWishlist={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;