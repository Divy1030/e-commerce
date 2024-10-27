import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import WishlistPage from './components/WishlistPage';
import { ShopProvider, useShop } from './context/ShopContext';
import { ThemeProvider } from './context/ThemeContext';

const AppContent = () => {
  const { 
    products, 
    cart, 
    wishlist, 
    addToCart, 
    toggleWishlist, 
    updateQuantity, 
    removeFromCart 
  } = useShop();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage
              products={products}
              onAddToCart={addToCart}
              onToggleWishlist={toggleWishlist}
              wishlist={wishlist}/>
          } 
        />
        <Route path="/cart" element={<CartPage
              cart={cart}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}/>
          } 
        />
        <Route path="/wishlist" element={
            <WishlistPage
              wishlist={wishlist}
              onAddToCart={addToCart}
              onToggleWishlist={toggleWishlist}/>
          } 
        />
      </Routes>
    </Layout>
  );
};
const App = () => {
  return (
    <Router>
      <ShopProvider>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </ShopProvider>
    </Router>
  );
};

export default App;