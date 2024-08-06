"use client";

import { products } from '../lib/data';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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
    <div className="md:w-1/2 p-4 relative">
            <div className="relative w-full h-auto">
              <Image src={product.imageUrl} alt={product.title} width={300} height={200} className="w-full h-auto" />
              {product.destacado && (
                <span className="absolute top-1 left-1 bg-green-500 text-white text-xs px-2 py-1">
                  Destacado
                </span>
              )}
              {product.novedad && (
                <span className="absolute top-1 left-1 bg-yellow-500 text-white text-xs px-2 py-1">
                  Novedad
                </span>
              )}
            </div>
          </div>      
      <div className="md:w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        <p className="mb-4">{product.description}</p>
        <p className="text-lg font-semibold mb-4">{product.price}</p>
        <p className="mb-4">Categoría: {product.category}</p>
        
        <div className="mt-4 mb-4">
          <label htmlFor="quantity" className="block">
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

        <Link href="/carrito">
          <button
            className="my-5 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-900"
          >
            Agregar al carrito
          </button>
        </Link>
      </div>
    </div>
    }
    </>
  );
};

export default DetalleProducto;