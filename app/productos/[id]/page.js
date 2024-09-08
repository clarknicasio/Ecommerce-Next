import { Suspense } from 'react';
import DetalleProducto from '../../ui/detalleProducto';

export async function generateMetadata({ params }) {
  const { id } = params;

  const response = await fetch(`${process.env.API_BASE_URL}/api/productos/${id}`);
  const product = await response.json();

  return {
    title: product.title, 
    description: product.description, 
    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: product.imageUrl,
          alt: product.title,
        },
      ],
    },
  };
}


export default function Producto({ params }) {
  const { id: id } = params;

  return (
    <main className="m-4 flex flex-col items-center w-full">
      <Suspense fallback={
        <div className="text-lg font-bold flex justify-center items-center min-h-screen">
          Cargando datos del producto ...
        </div>        
      }>
        <DetalleProducto id={id} />
      </Suspense>
    </main>
  );
}
