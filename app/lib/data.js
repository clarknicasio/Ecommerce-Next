import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '@/app/config/firebase';

export const categories = ['Celulares', 'Smartwatches', 'Memorias', 'Auriculares'];

export const getProducts = async (categoria, destacados, novedades) => {
  try {
    const productRef = collection(db, "products");
    let q;
    if (!categoria && !destacados && !novedades) {
      q = query(productRef);
    } else {
      if (categoria)
        q = query(productRef, where('category', '==', categoria));
      if (destacados)
        q = query(productRef, where('destacado', '==', true));
      if (novedades)
        q = query(productRef, where('novedad', '==', true));
    }
    const querySnapshots = await getDocs(q);
    const docs = querySnapshots.docs.map(doc => doc.data());
    return docs;
  } catch (error) {
    console.error('Error fetcheando productos:', error);
    return [];
  }
}

