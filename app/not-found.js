import Link from 'next/link';

const Pagina404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-lg text-gray-700 mb-4">La página que buscas no existe.</p>
      <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Pagina404;
