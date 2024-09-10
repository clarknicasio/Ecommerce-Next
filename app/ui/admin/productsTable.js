import Image from 'next/image';
import Link from 'next/link';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


const ProductsTable =  () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/productos/todos', { cache: 'no-store' });
        const data = await response.json();
        setItems(data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetcheando productos:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (slug) => {
    if (confirm('Vas a eliminar este producto ¿Estás Seguro?')) {
      try {
        const response = await fetch(`/api/productos/${slug}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          //console.log('Elimine el producto '+slug)
          //setProducts(products.filter(product => product.id !== id));
          router.refresh();
        } else {
          console.error('Error al eliminar producto');
        }
      } catch (error) {
        console.error('Error al eliminar producto:', error);
      }
    }
  };


  if (loading) {
    return (
      <div className="text-lg font-bold fixed top-0 left-0 w-full h-full flex justify-center items-center">
        Cargando productos ...
      </div>
    )
  }

  return (
    <div className="p-4">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Slug</th>
            <th className="py-2">Nombre</th>
            <th className="py-2">Categoría</th>
            <th className="py-2">Dest.</th>
            <th className="py-2">Nov.</th>
            <th className="py-2">Precio</th>
            <th className="py-2">Stock</th>
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
                <td className="border px-4 py-2">{item.stock}</td>
                <td className="border px-4 py-2">
                    <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={80}
                        height={80}
                    />
                </td>
                <td className="border px-4 py-2">
                    <Link href={`/admin/update/${item.slug}`}>
                    <button className="bg-green-500 text-white py-1 px-3 rounded mr-2"><PencilSquareIcon className="h-6 w-6" /></button>
                    </Link>
                    <button 
                    onClick={() => handleDelete(item.slug)} 
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
