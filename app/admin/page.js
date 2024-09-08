"use client";

import ProductsTable from "../ui/admin/productsTable";
import Link from 'next/link';
import { useAuthContext } from "../context/authContext";

export default function Admin() {

  const { logout } = useAuthContext();

  return (
    
    <main className="m-4 flex flex-col items-center">
      <h1 className="mt-10 mb-8">Panel de administración</h1>
      <div className="flex justify-between items-center mb-4">
        <div>
          <Link href="/admin/create">
            <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2">Agregar producto</button>
          </Link>
          <button type="submit" onClick={()=> logout()} className="bg-red-500 text-white py-2 px-4 rounded">Logout</button>
        </div>
      </div>

      <ProductsTable />
    </main>
  );

}
