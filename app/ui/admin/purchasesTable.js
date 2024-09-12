import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


const PurchasesTable =  () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const response = await fetch('/api/compras/todos', { cache: 'no-store' });
        const data = await response.json();
        setItems(data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetcheando compras:', error);
      }
    };

    fetchPurchases();
  }, []);


  if (loading) {
    return (
      <div className="text-lg font-bold fixed top-0 left-0 w-full h-full flex justify-center items-center">
        Cargando Órdenes de Compra ...
      </div>
    )
  }

  return (
    <div className="p-4">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Fecha</th>
            <th className="py-2">Cliente</th>
            <th className="py-2">Teléfono</th>
            <th className="py-2">Email</th>
            <th className="py-2">DNI</th>
            <th className="py-2">Dirección</th>
            <th className="py-2">Detalle</th>
            <th className="py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.slug}>
                <td className="border px-4 py-2">{new Date(item.fecha.seconds * 1000).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{item.nombre}</td>
                <td className="border px-4 py-2">{item.telefono}</td>
                <td className="border px-4 py-2">{item.email}</td>                
                <td className="border px-4 py-2">{item.dni}</td>         
                <td className="border px-4 py-2">{item.direccion}</td>         
                { item.detalle ?
                <td className="border px-4 py-2" dangerouslySetInnerHTML={{ __html: item.detalle.replace(/ - /g, '<br />') }}></td>             
                :
                <td></td>
                }
                <td className="border px-4 py-2">${item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchasesTable;
