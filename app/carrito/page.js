"use client";

import Link from 'next/link';
import {useCartContext} from '@/app/context/CartContext';
import { TrashIcon } from '@heroicons/react/24/outline';

export default function Carrito() {

  const { cart, clearCart, removeItem } = useCartContext();

  const total = cart.reduce((suma, item) => suma + (item.quantity * item.price), 0).toFixed(2);

  return (
    
    <main className="m-4 flex flex-col items-center">
      <h1 className="mt-10 mb-8">Su carrito</h1>

      <div className="w-full max-w-4xl mx-auto p-4">
        {cart.map(item => (
          <div key={item.slug} className="flex justify-between items-center py-2 border-b">
            <div className="flex-1 flex flex-col">
              <span className="font-semibold">{item.title}</span>
              <span className="text-gray-600">x{item.quantity}</span>
              <span className="text-gray-600">${item.price}</span>
            </div>
            <span className="text-lg font-semibold mr-2">${(item.quantity * item.price).toFixed(2)}</span>
            <button
                onClick={() => removeItem(item.slug)} 
                className="text-red-500 hover:text-red-700"
            >
                <TrashIcon className="h-4 w-4" />
            </button>            
          </div>
        ))}
        <div className="flex justify-between items-center py-2 border-b">
          <div className="flex flex-col">
            <span className="font-semibold">Total</span>
          </div>
          <span className="text-lg font-semibold mr-5">${total}</span>
        </div>
      </div>


      <div className="mt-10 mb-10 flex flex-col space-y-3 items-center">
        <button onClick={clearCart} className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
          Vaciar carrito
        </button>        
        <Link className="w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-900" href="/productos">
          Seguir comprando
        </Link>
        <Link className="w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-900" href="/checkout">
          Finalizar compra
        </Link>
      </div>
    </main>
  );
}
