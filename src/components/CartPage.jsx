import React from 'react';
import CartItem from './CartItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = ({ cart, onUpdateQuantity, onRemove }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemove = (item) => {
    onRemove(item.id);
    toast.info(`${item.name} removed from cart!`);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemove={() => handleRemove(item)} // Use the handleRemove function
          />
        ))}
      </div>
      <div className="mt-8 border-t pt-4">
        <div className="flex justify-between">
          <span className="font-bold">Total:</span>
          <span className="font-bold">${total.toFixed(2)}</span>
        </div>
        <button className="w-full checkout-button-bg text-white py-3 rounded-lg mt-4">
          Proceed to Checkout
        </button>
      </div>
    </div> 
  );
};

export default CartPage;