"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import {useCartContext} from '@/app/context/CartContext';
import Swal from 'sweetalert2';


export default function Checkout() {

  const { cart, clearCart } = useCartContext();
  const total = cart.reduce((suma, item) => suma + (item.quantity * item.price), 0).toFixed(2);
  
  const router = useRouter();

  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    dni: '',
    direccion: '',
    ciudad: '',
    provincia: '',
    codigopostal: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  
  function generarDetalle(cart) {
    return cart
      .map(item => `${item.title} (x${item.quantity})`)
      .join(' - ');
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const detalle = generarDetalle(cart);
    const carrito = JSON.stringify(cart);

    //console.log('Datos del formulario:', formData);
    // Crea una instancia de FormData
    const data = new FormData();
    data.append('nombre', formData.nombre);
    data.append('telefono', formData.telefono);
    data.append('email', formData.email);
    data.append('dni', formData.dni);
    data.append('detalle', detalle);
    data.append('direccion', formData.direccion+' '+formData.codigopostal+' '+formData.ciudad+'('+formData.provincia+')');
    data.append('total', total);
    data.append('cart', carrito);

    try {
      const response = await fetch('/api/compras', {
        method: 'POST',
        body: data,  
      });

      Swal.fire({
        title: '¡Compra Confirmada!',
        text: 'Tu compra ha sido realizada con éxito.',
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 5000,
      }).then(() => {
        clearCart();        
        router.push('/');
      });      

    } catch (error) {
      console.error('Error al agregar compra', error);
    }

  };
  
  return (
    
    <main className="m-4 flex flex-col items-center">
      <h1 className="mt-10 mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Información personal</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block">Nombre completo</label>
              <input
                id="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleChange}                
                placeholder="Nombre completo"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block">Teléfono</label>
              <input
                id="telefono"
                type="text"
                value={formData.telefono}
                onChange={handleChange}                
                placeholder="Teléfono"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block">Email</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}                
                placeholder="Email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block">DNI</label>
              <input
                id="dni"
                type="text"
                value={formData.dni}
                onChange={handleChange}                
                placeholder="DNI"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Información e envío</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block">Dirección</label>
              <input
                id="direccion"
                type="text"
                value={formData.direccion}
                onChange={handleChange}                
                placeholder="Dirección de envío"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block">Ciudad</label>
              <input
                id="ciudad"
                type="text"
                value={formData.ciudad}
                onChange={handleChange}                
                placeholder="Ciudad"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block">Provincia</label>
              <input
                id="provincia"
                type="text"
                value={formData.provincia}
                onChange={handleChange}                
                placeholder="Provincia"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block">Código Postal</label>
              <input
                id="codigopostal"
                type="text"
                value={formData.codigopostal}
                onChange={handleChange}
                placeholder="Código postal"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
        </div>

        <div className="mt-10 mb-10 flex flex-col space-y-3 items-center">
            <Link className="max-w-4xl bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-900" href="/productos">
            Seguir comprando
            </Link>
            <button type="submit" className="max-w-4xl bg-green-500 text-white py-2 px-4 rounded">
              Confirmar compra
            </button>
        </div>

      </form>

    </main>
  );
}
