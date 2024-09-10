import { db, storage } from '@/app/config/firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { NextResponse } from 'next/server';

export async function POST(request) {
  const formData = await request.formData();
  
  const values = {
    title: formData.get('title'),
    description: formData.get('description'),
    category: formData.get('category'),
    slug: formData.get('slug'),
    price: formData.get('price'),
    stock: formData.get('stock'),
    destacado: formData.get('destacado') === 'true',
    novedad: formData.get('novedad') === 'true'
  };

  try {
    const productRef = doc(db, 'products', values.slug);

    const imageFile = formData.get('imageUrl');
    if (imageFile && imageFile.size > 0) {
      const storageRef = ref(storage, `${values.slug}`);
      const fileSnapshot = await uploadBytes(storageRef, imageFile);
      const fileURL = await getDownloadURL(fileSnapshot.ref);
      values.imageUrl = fileURL;
    }

    await setDoc(productRef, values);

    return NextResponse.json({ message: 'Producto agregado' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al agregar producto' }, { status: 500 });
  }
}
