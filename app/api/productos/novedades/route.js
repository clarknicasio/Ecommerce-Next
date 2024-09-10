import { db } from '@/app/config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function GET(request) {

  try {
    const productRef = collection(db, 'products');
    let q; 
    q = query(productRef, where('novedad', '==', true)); 
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {

        const products = querySnapshot.docs.map(doc => doc.data());
        return NextResponse.json(products, { status: 200 });

    } else {
      return NextResponse.json({ message: 'No se encontraron productos' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Error fetcheando productos' }, { status: 500 });
  }
}


