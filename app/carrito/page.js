"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Carrito() {

  const itemsCarrito = [
    { id: 1, title: 'Producto 1', quantity: 2, price: 20.00 },
    { id: 2, title: 'Producto 2', quantity: 1, price: 15.00 },
  ];

  const [items, setItems] = useState(itemsCarrito);

  return (
    
    <main className="m-4 flex flex-col items-center">
      <h1 className="mt-10 mb-8">Su carrito</h1>

      <div className="w-full max-w-4xl mx-auto p-4">
        {items.map(item => (
          <div key={item.id} className="flex justify-between items-center py-2 border-b">
            <div className="flex flex-col">
              <span className="font-semibold">{item.title}</span>
              <span className="text-gray-600">x{item.quantity}</span>
              <span className="text-gray-600">${item.price.toFixed(2)}</span>
            </div>
            <span className="text-lg font-semibold">${(item.quantity * item.price).toFixed(2)}</span>
          </div>
        ))}
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
