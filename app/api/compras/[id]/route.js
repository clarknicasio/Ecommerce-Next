import { db } from '@/app/config/firebase';
import { collection, getDocs, query, where, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const compraRef = collection(db, 'purchases');
    let q; 
    if (id === 'todos') {
      q = query(compraRef); 
    } else {
      q = query(compraRef, where('id', '==', id)); 
    }
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {

      if (id === 'todos') {
        const compras = querySnapshot.docs.map(doc => doc.data());
        return NextResponse.json(compras, { status: 200 });
      } else {
        const compra = querySnapshot.docs[0].data();
        revalidatePath(`/compras/${id}`);
        return NextResponse.json(compra, { status: 200 });
      }      

    } else {
      return NextResponse.json({ message: 'Orden de compra no encontrada' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Error fetcheando Orden de compra' }, { status: 500 });
  }
}


