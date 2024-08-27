import { db } from '@/app/config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const productRef = collection(db, 'products');
    const q = query(productRef, where('slug', '==', id));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const product = querySnapshot.docs[0].data();

      revalidatePath(`/productos/${id}`);

      return NextResponse.json(product, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Producto no encontrado' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Error fetcheando producto' }, { status: 500 });
  }
}
