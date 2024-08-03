import { products } from '../lib/data';
import Link from 'next/link';
import ListaProductos from '../ui/listaProductos';

export default function Novedades() {
  return (
    <main className="m-4 flex flex-col items-center">

      <h1 className="mt-10 mb-8">Novedades</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ListaProductos products={products} novedades={true} />
      </div>    

      <div className="mt-10 mb-10">
        <Link className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-blue-600" href="/productos">
            Ver catálogo completo
        </Link>
      </div>

    </main>
  );
}
