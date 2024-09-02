//import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

const ProductsTable = async () => {
  //const [products, setProducts] = useState([]);

    const items = await fetch('http://localhost:3000/api/productos/todos', 
    { cache: 'no-store',
    }).then(r => r.json());

  /*const handleDelete = async (id) => {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      try {
        const response = await fetch(`/api/products/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setProducts(products.filter(product => product.id !== id));
        } else {
          console.error('Error al eliminar producto');
        }
      } catch (error) {
        console.error('Error al eliminar producto:', error);
      }
    }
  };*/


  return (
    <div className="p-4">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Slug</th>
            <th className="py-2">Nombre</th>
            <th className="py-2">Categoría</th>
            <th className="py-2">Destacado</th>
            <th className="py-2">Novedad</th>
            <th className="py-2">Precio</th>
            <th className="py-2">Imagen</th>            
            <th className="py-2">Acción</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.slug}>
                <td className="border px-4 py-2">{item.slug}</td>
                <td className="border px-4 py-2">{item.title}</td>
                <td className="border px-4 py-2">{item.category}</td>
                <td className="border px-4 py-2">
                    {item.destacado ? "SI" : "NO"}
                </td>
                <td className="border px-4 py-2">
                    {item.novedad ? "SI" : "NO"}
                </td>
                <td className="border px-4 py-2">${item.price}</td>
                <td className="border px-4 py-2">
                    <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={80}
                        height={80}
                    />
                </td>
                <td className="border px-4 py-2">
                    <Link href={`/admin/edit/${item.slug}`}>
                    <button className="bg-green-500 text-white py-1 px-3 rounded mr-2"><PencilSquareIcon className="h-6 w-6" /></button>
                    </Link>
                    <button 
                    //onClick={() => handleDelete(product.id)} 
                    className="bg-red-500 text-white py-1 px-3 rounded"
                    >
                    <TrashIcon className="h-6 w-6" />
                    </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
