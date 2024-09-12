import { db } from '@/app/config/firebase';
import { collection, addDoc, updateDoc, Timestamp, query, where, getDocs } from "firebase/firestore";
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    const values = {
      detalle: formData.get('detalle'),
      direccion: formData.get('direccion'),
      dni: formData.get('dni'),
      email: formData.get('email'),
      nombre: formData.get('nombre'),
      telefono: formData.get('telefono'),
      total: formData.get('total'),
      fecha: Timestamp.now(),     
    };

    const jsonCarrito = formData.get('cart'); 
    const cart = JSON.parse(jsonCarrito);

    await addDoc(collection(db, 'purchases'), values);

    // Actualizar stock
    for (const item of cart) {

      const productQuery = query(collection(db, "products"), where("slug", "==", item.slug));
      const querySnapshot = await getDocs(productQuery);

      const productDoc = querySnapshot.docs[0];
      const productRef = productDoc.ref;
      const productData = productDoc.data();
      const stock = Number(productData.stock); 
      const quantity = Number(item.quantity); 

      const updatedStock = stock - quantity;
      await updateDoc(productRef, { stock: updatedStock });
    }

    return NextResponse.json({ message: 'Orden de compra agregada y stock actualizado' }, { status: 201 });

  } catch (error) {
    console.error('Error al agregar compra:', error);
    return NextResponse.json({ error: 'Error al agregar Orden de compra' }, { status: 500 });
  }
}
