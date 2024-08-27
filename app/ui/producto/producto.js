import Image from 'next/image';
import Link from 'next/link';

const Producto = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden bg-white">
      <Image
        src={product.imageUrl}
        alt={product.title}
        width={500}
        height={500}
        className="w-full object-cover p-4"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.category}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${product.price}</span>
          <Link href={`/productos/${product.slug}`} className="hover:underline">
              + Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Producto;
