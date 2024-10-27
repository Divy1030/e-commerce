import React from 'react';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex items-center space-x-4">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h3 className="font-semibold item-name">{item.name}</h3> {/* Use the CSS variable for item name color */}
          <p className="item-price">${item.price}</p> {/* Use the CSS variable for item price color */}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center border rounded">
          <button 
            className="px-3 py-1 border-r"
            onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
          >
            -
          </button>
          <span className="px-4 py-1">{item.quantity}</span>
          <button 
            className="px-3 py-1 border-l"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <button 
          onClick={() => onRemove(item.id)}
          className="text-red-500"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;