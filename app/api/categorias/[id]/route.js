import { db } from '@/app/config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const categoriaRef = collection(db, 'categories');
    let q; 
    if (id === 'todas') {
      q = query(categoriaRef); 
    } else {
      q = query(categoriaRef, where('name', '==', id)); 
    }
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {

      if (id === 'todas') {
        const categories = querySnapshot.docs.map(doc => doc.data());
        return NextResponse.json(categories, { status: 200 });
      } else {
        const categoria = querySnapshot.docs[0].data();
        revalidatePath(`/categorias/${id}`);
        return NextResponse.json(categoria, { status: 200 });
      }      

    } else {
      return NextResponse.json({ message: 'Categoria no encontrada' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Error fetcheando categoria' }, { status: 500 });
  }
}
