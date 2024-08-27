import React, { useState, useEffect } from 'react';

const Contador = ({onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const sumar = () => {
    setQuantity(quantity + 1);
  };

  const restar = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    if (onQuantityChange) {
      onQuantityChange(quantity);
    }
  }, [quantity, onQuantityChange]);

  return (
    <div className="flex items-center space-x-2 mt-2">
      <button 
        onClick={restar} 
        className="bg-gray-500 text-sm text-white px-2 py-1 rounded"
      >
        -
      </button>

      <span className="px-2">{quantity}</span>

      <button 
        onClick={sumar} 
        className="bg-gray-500 text-sm text-white px-2 py-1 rounded hover:bg-gray-900"
      >
        +
      </button>
    </div>
  );
};

export default Contador;
