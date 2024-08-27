import { Suspense } from 'react';
import DetalleProducto from '../../ui/detalleProducto';

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
