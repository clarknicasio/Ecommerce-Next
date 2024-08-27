"use client";

import { useCartContext } from '@/app/context/CartContext';
import Contador from '../ui/contador';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';


const DetalleProducto = ({ id }) => {
  const [singleProduct, setSingleProduct] = useState(null);
  const [loading, setLoading] = useState();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartContext();

  const fetchProduct = async (id) => {
    try {    
      const response = await fetch(`/api/productos/${id}`, {cache: 'no-store'});
      if (response.ok) {
        const product = await response.json();
        setSingleProduct(product);
      } else {
        console.error('Producto no encontrado');
      }
    } catch (error) {
      console.error('Error fetcheando producto:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProduct(id);
  },  [id]);

  const handleAddToCart = () => {
    addToCart({ ...singleProduct, quantity });
  };

  return (
    <>
      {loading ? 
        <div className="text-lg font-bold flex justify-center items-center min-h-screen">
          Cargando datos del producto ...
        </div>
        :
        singleProduct &&
        <div className="product-detail flex flex-col md:flex-row items-center  min-h-screen">
          <div className="md:w-1/2 p-4 relative z-10">
            <div className="relative w-full h-auto">
              <Image src={singleProduct.imageUrl} alt={singleProduct.title} width={500} height={500} className="w-full h-auto" />
              {singleProduct.destacado && (
                <span className="absolute top-1 left-1 bg-green-500 text-white text-xs px-2 py-1 z-20">
                  Destacado
                </span>
              )}
              {singleProduct.novedad && (
                <span className="absolute top-1 left-1 bg-yellow-500 text-white text-xs px-2 py-1 z-20">
                  Novedad
                </span>
              )}
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <h1 className="text-2xl font-bold mb-4">{singleProduct.title}</h1>
            <p className="mb-4">{singleProduct.description}</p>
            <p className="text-lg font-semibold mb-4">${singleProduct.price}</p>
            <p className="mb-4">Categoría: {singleProduct.category}</p>
            
            <div className="mt-4 mb-4">
              <label htmlFor="quantity" className="block">
                Cantidad
              </label>
              <Contador onQuantityChange={(newQuantity) => setQuantity(newQuantity)} />
            </div>

            <Link href="/carrito">
              <button
                className="my-5 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-900"
                onClick={handleAddToCart}
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
