"use client";

import { products } from '../lib/data';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const DetalleProducto = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(product => product.id.toString() === id);
    setProduct(foundProduct);
  }, [id]);


  return (
    <>
    { product &&
    <div className="product-detail flex flex-col md:flex-row items-start">
      <div className="md:w-1/2 p-4">
        <Image src={product.imageUrl} alt={product.title} width={300} height={200} className="w-full h-auto" />
      </div>
      <div className="md:w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        <p className="mb-4">{product.description}</p>
        <p className="text-lg font-semibold mb-4">{product.price}</p>
        <p className="mb-4">Categoría: {product.category}</p>
        {product.destacado && <p className="mb-4 text-green-500">Destacado</p>}
        {product.novedad && <p className="mb-4 text-blue-500">Novedad</p>}
        
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Cantidad
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={1}
            min="1"
            className="mt-1 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
    }
    </>
  );
};

export default DetalleProducto;