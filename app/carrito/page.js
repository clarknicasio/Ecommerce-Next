"use client";

import Link from 'next/link';
import {useCartContext} from '@/app/context/CartContext';

export default function Carrito() {

  const { cart } = useCartContext();

  const total = cart.reduce((suma, item) => suma + (item.quantity * item.price), 0).toFixed(2);

  return (
    
    <main className="m-4 flex flex-col items-center">
      <h1 className="mt-10 mb-8">Su carrito</h1>

      <div className="w-full max-w-4xl mx-auto p-4">
        {cart.map(item => (
          <div key={item.slug} className="flex justify-between items-center py-2 border-b">
            <div className="flex flex-col">
              <span className="font-semibold">{item.title}</span>
              <span className="text-gray-600">x{item.quantity}</span>
              <span className="text-gray-600">${item.price}</span>
            </div>
            <span className="text-lg font-semibold">${(item.quantity * item.price).toFixed(2)}</span>
          </div>
        ))}
        <div className="flex justify-between items-center py-2 border-b">
          <div className="flex flex-col">
            <span className="font-semibold">Total</span>
          </div>
          <span className="text-lg font-semibold">${total}</span>
        </div>
      </div>


      <div className="mt-10 mb-10 flex flex-col space-y-3 items-center">
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
