"use client";

import PurchasesTable from "../../ui/admin/purchasesTable";
import Link from 'next/link';
import { useAuthContext } from "../../context/authContext";

export default function Purchases() {

  const { logout } = useAuthContext();

  return (
    
    <main className="m-4 flex flex-col items-center">
      <h1 className="mt-10 mb-8">Órdenes de Compra</h1>
      <div className="flex justify-between items-center mb-4">
        <div>
          <Link href="/admin">
            <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2">Volver</button>
          </Link>
          <button type="submit" onClick={()=> logout()} className="bg-red-500 text-white py-2 px-4 rounded">Logout</button>
        </div>
      </div>

      <PurchasesTable />
    </main>
  );

}
