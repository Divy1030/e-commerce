import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext'; // Adjust the path as needed
import { useTheme } from '../context/ThemeContext'; // Import useTheme

const Header = () => {
  const navigate = useNavigate();
  const { cartCount, wishlistCount } = useShop();
  const { theme, toggleTheme } = useTheme(); // Use theme context

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 
          onClick={() => navigate('/')} 
          className="text-xl font-bold cursor-pointer"
        >
          Home
        </h1>
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="bg-primary text-white px-2 py-2 rounded-2xl">
            <img className="h-4"src="https://img.icons8.com/?size=100&id=45475&format=png&color=000000" />
          </button>
          <div className="relative">
            <Heart 
              className="w-6 h-6 cursor-pointer" 
              onClick={() => navigate('/wishlist')} 
            />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 counter-bg counter-text rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </div>
          <div className="relative">
            <ShoppingCart 
              className="w-6 h-6 cursor-pointer" 
              onClick={() => navigate('/cart')} 
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 counter-bg counter-text rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;