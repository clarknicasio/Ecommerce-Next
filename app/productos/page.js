"use client";

import { getProducts } from '../lib/data';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ListaProductos from '../ui/listaProductos';

export default function Catalogo() {

  const [filter, setFilter] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    loading ?
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-lg font-bold">Cargando catálogo...</div>
    </div>
    :
    <main className="m-4 flex flex-col items-center">

      <h1 className="mt-10 mb-8">Catálogo completo</h1>

      <input
        type="text"
        placeholder="Buscar ..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
        autofocus
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ListaProductos products={filteredProducts} />
      </div>    

      <div className="mt-10 mb-10">
        <Link className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-900" href="/">
            Volver a la página principal
        </Link>
      </div>

    </main>
  );
}
