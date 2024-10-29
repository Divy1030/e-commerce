import React, { createContext, useState, useContext, useEffect } from 'react';
import head from '../assets/head.jpg';
import control from '../assets/control.jpg';
import graphic from '../assets/graphic.jpg';
import chip from '../assets/chip.jpg';

const ShopContext = createContext();

const getLocalStorage = (key, defaultValue) => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading ${key} from localStorage:`, error);
    return defaultValue;
  }
};

const setLocalStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
};

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState(() => getLocalStorage('cart', []));
  const [wishlist, setWishlist] = useState(() => getLocalStorage('wishlist', []));
  const [products] = useState([
    {
      id: 1,
      name: "AMD Ryzen 9 7950X3D",
      price: 99.99,
      image: chip
    },
    {
      id: 2,
      name: "Gaming Headset",
      price: 149.99,
      image: head
    },
    {
      id: 3,
      name: "Gaming Controller",
      price: 59.99,
      image: control
    },
    {
      id: 4,
      name: "RTX 4090",
      price: 199.99,
      image: graphic
    }
  ]);

  useEffect(() => {
    setLocalStorage('cart', cart);
  }, [cart]);

  useEffect(() => {
    setLocalStorage('wishlist', wishlist);
  }, [wishlist]);

  const addAllToCart = () => {
    setCart(prevCart => {
      const newCart = [...prevCart, ...wishlist.map(item => ({ ...item, quantity: 1 }))];
      setWishlist([]);
      return newCart;
    });
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        const updatedCart = prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return updatedCart;
      }
      const newCart = [...prevCart, { ...product, quantity: 1 }];
      return newCart;
    });
  };

  const toggleWishlist = (product) => {
    setWishlist(prevWishlist => {
      const exists = prevWishlist.some(item => item.id === product.id);
      if (exists) {
        const newWishlist = prevWishlist.filter(item => item.id !== product.id);
        return newWishlist;
      }
      const newWishlist = [...prevWishlist, product];
      return newWishlist;
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart(prevCart => {
      if (newQuantity === 0) {
        const newCart = prevCart.filter(item => item.id !== productId);
        return newCart;
      }
      const updatedCart = prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      );
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const newCart = prevCart.filter(item => item.id !== productId);
      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    setLocalStorage('cart', []);
  };

  const clearWishlist = () => {
    setWishlist([]);
    setLocalStorage('wishlist', []);
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        products,
        addToCart,
        toggleWishlist,
        updateQuantity,
        removeFromCart,
        clearCart,
        clearWishlist,
        addAllToCart,
        cartCount: cart.reduce((count, item) => count + item.quantity, 0),
        wishlistCount: wishlist.length
      }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};