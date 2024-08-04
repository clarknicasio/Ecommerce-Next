import DetalleProducto from '../../ui/detalleProducto';

export default function Producto({ params }) {
  const { id: id } = params;

  return (
    <main className="m-4 flex flex-col items-center w-full">
        <DetalleProducto id={id} />
    </main>
  );
}
