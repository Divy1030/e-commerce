import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onAddToCart, onToggleWishlist, wishlist }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          isWishlist={wishlist.some(item => item.id === product.id)}
        />
      ))}
    </div>
  );
}; 

export default ProductGrid;