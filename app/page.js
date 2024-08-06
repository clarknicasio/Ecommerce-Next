import { products } from './lib/data';
import Link from 'next/link';
import ListaProductos from './ui/listaProductos';
import Banners from './ui/Banners';

export default function Home() {
  return (
    <main className="m-10 flex flex-col items-center">

      <Banners className="mt-10"/>

      <h1 className="mt-10 mb-8">Novedades</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ListaProductos products={products} novedades={true} />
      </div>    

      <h1 className="mt-20 mb-8">Productos destacados</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ListaProductos products={products} destacados={true} />
      </div>    

      <div className="mt-20 mb-10">
        <Link className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-900" href="/productos">
            Ver catálogo completo
        </Link>
      </div>

    </main>
  );
}
