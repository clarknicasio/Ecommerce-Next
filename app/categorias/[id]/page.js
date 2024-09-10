import Link from 'next/link';
import ListaProductos from '../../ui/listaProductos';

export function generateStaticParams () {
  return [
    { categoria: 'Celulares'},
    { categoria: 'Smartwatches'},
    { categoria: 'Memorias'},
    { categoria: 'Auriculares'},            
  ];
}

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { categoria } = params;

  return {
    title: `${categoria}`,
    description: `¿Estás buscando ${categoria}? Tenemos los mejores productos y los mejores precios`,
    keywords: `${categoria}`,
    openGraph: {
      title: `Catálogo de ${categoria}`,
      description: `${categoria}. Tenemos los mejores productos y los mejores precios`,
      site_name: 'STORENextJS',
    },
  };
}

export default async function Categoria({ params }) {
  const { id: categoria } = params;

  try {

    console.log(`Fetching category: ${categoria}`);
    console.log(process.env.API_BASE_URL)
    
  const response = await fetch(`${process.env.API_BASE_URL}/api/productos/categoria/${categoria}`, {cache: 'no-store'});
  
  if (!response.ok) {
    console.error(`Error ${response.status}: ${response.statusText}`);
    throw new Error(`Error al obtener la categoria ${categoria}`);
  }

  const products = await response.json();

  return (
    <main className="m-4 flex flex-col items-center">
      <h1 className="mt-10 mb-8">{categoria}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ListaProductos products={products} categoria={categoria} />
      </div>    

      <div className="mt-10 mb-10">
        <Link className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-900" href="/productos">
          Ver catálogo completo
        </Link>
      </div>
    </main>
  );

  } catch (error) {
    console.error(`Error en la categoria ${categoria}:`, error.message);
    return <h1>Error al cargar los productos de la categoria</h1>;
  }

}
