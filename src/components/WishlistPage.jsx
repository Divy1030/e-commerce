import React from 'react';
import ProductCard from './ProductCard';
const WishlistPage = ({ wishlist, onAddToCart, onToggleWishlist }) => {
  const handleAddAllToCart = () => {
    wishlist.forEach(item => onAddToCart(item));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Wishlist</h1>
        <button
          onClick={handleAddAllToCart}
          className="add-all-to-cart-button-bg text-white px-4 py-2 rounded-lg"
        >
          Add All to Cart
        </button>
      </div>
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
    </div>
  );
};

export default WishlistPage;