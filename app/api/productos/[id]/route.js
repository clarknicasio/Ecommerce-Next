import { db, storage } from '@/app/config/firebase';
import { collection, getDocs, query, where, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const productRef = collection(db, 'products');
    let q; 
    if (id === 'todos') {
      q = query(productRef); 
    } else {
      q = query(productRef, where('slug', '==', id)); 
    }
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {

      if (id === 'todos') {
        const products = querySnapshot.docs.map(doc => doc.data());
        return NextResponse.json(products, { status: 200 });
      } else {
        const product = querySnapshot.docs[0].data();
        revalidatePath(`/productos/${id}`);
        return NextResponse.json(product, { status: 200 });
      }      

    } else {
      return NextResponse.json({ message: 'Producto no encontrado' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Error fetcheando producto' }, { status: 500 });
  }
}


export async function DELETE(request, { params }) {

  const { id } = params;

  try {
    const productRef = doc(db, 'products', id);
    await deleteDoc(productRef);
    return NextResponse.json({ message: 'Producto eliminado' }, { status: 200 });
  } catch (error) {
    console.error('Error al intentar eliminar el producto:', error);
    return NextResponse.json({ error: 'Error al intentar eliminar producto' }, { status: 500 });
  }
}


export async function PUT(request, { params }) {
  const { id } = params;
  const formData = await request.formData();


  try {

    const productRef = doc(db, "products", id);

    let values = {
      title: formData.get('title'),
      description: formData.get('description'),
      category: formData.get('category'),
      slug: formData.get('slug'),
      price: formData.get('price'),
      stock: formData.get('stock'),
      destacado: formData.get('destacado') === 'true',
      novedad: formData.get('novedad') === 'true'
    };

    const imageFile = formData.get('imageUrl');
    if (imageFile && imageFile.size > 0) {
      const storageRef = ref(storage, `${formData.get('slug')}`);
      const fileSnapshot = await uploadBytes(storageRef, imageFile);
      const fileURL = await getDownloadURL(fileSnapshot.ref);

      values.imageUrl = fileURL; 
    }

    await updateDoc(productRef, values);

    return NextResponse.json({ message: 'Producto modificado correctamente.' });
  } catch (error) {
    console.error('Error al intentar modificar producto ', error);
    return NextResponse.json({ error: 'Error al intentar modificar producto.' }, { status: 500 });
  }
}
