import Link from 'next/link';

export default function Checkout() {

  return (
    
    <main className="m-4 flex flex-col items-center">
      <h1 className="mt-10 mb-8">Checkout</h1>

      <form className="space-y-6">
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Información personal</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block">Nombre completo</label>
              <input
                id="nombre"
                type="text"
                placeholder="Nombre completo"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block">Teléfono</label>
              <input
                id="telefono"
                type="text"
                placeholder="Teléfono"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block">DNI</label>
              <input
                id="dni"
                type="text"
                placeholder="DNI"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Información e envío</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block">Dirección</label>
              <input
                id="address"
                type="text"
                placeholder="Dirección de envío"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block">Ciudad</label>
              <input
                id="city"
                type="text"
                placeholder="Ciudad"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block">Provincia</label>
              <input
                id="state"
                type="text"
                placeholder="Provincia"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block">Código Postal</label>
              <input
                id="zip"
                type="text"
                placeholder="Código postal"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 mb-10 flex flex-col space-y-3 items-center">
            <Link className="max-w-4xl bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-900" href="/productos">
            Seguir comprando
            </Link>
            <Link className="max-w-4xl bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-900" href="">
            Confirmar compra
            </Link>
        </div>

      </form>

    </main>
  );
}
