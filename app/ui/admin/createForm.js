"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
//import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
//import { doc, setDoc } from "firebase/firestore";
//import { db, storage } from '@/app/config/firebase';

/*const createProduct = async (values, file, router)  => {

    const storageRef = ref(storage, values.slug);
    const fileSnapshot = await uploadBytes(storageRef,file);
    const fileURL = await getDownloadURL(fileSnapshot.ref);
    const docRef = doc(db, "products", values.slug);

    return setDoc(docRef, {
        ...values,
        imageUrl: fileURL
    })
    
    .then(() => {
        console.log("Producto agregado");
        router.push('/admin'); 
    })
    .catch((error) => console.error("Error al agregar producto: ", error));

}*/

const CreateForm = ()  => {

    const router = useRouter();

    const [values, setValues] = useState({
        title: '',
        description: '',
        category: '',
        slug: '',
        price: '',
        stock: '',
        destacado: false,
        novedad: false,
    })

    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === "imageUrl" && e.target.files) {
            setFile(e.target.files[0]); 
        } else {
            setValues({
                ...values,
                [name]: type === 'checkbox' ? checked : value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(values)
        //await createProduct(values, file, router);
        const formData = new FormData();

        formData.append('title', values.title);
        formData.append('description', values.description);
        formData.append('category', values.category);
        formData.append('slug', values.slug);
        formData.append('price', values.price);
        formData.append('stock', values.stock);
        formData.append('destacado', values.destacado);
        formData.append('novedad', values.novedad);        
        
        if (file) {
            formData.append('imageUrl', file);
        }
        
        try {
            const response = await fetch('/api/productos', {
                method: 'POST',
                body: formData,
            });
      
            if (response.ok) {
                router.push('/admin');
            } else {
                console.error('Error al agregar producto');
            }
        } catch (error) {
            console.error('Error al agregar producto', error);
        }        
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
            <div className="mb-4">
                <h1 className="mt-4 mb-4">Agregar producto</h1>
                <label htmlFor="title" className="block text-gray-700">Título</label>
                <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    value={values.title} 
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700">Descripción</label>
                <textarea 
                    id="description" 
                    name="description" 
                    value={values.description} 
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700">Categoría</label>
                <input 
                    type="text" 
                    id="category" 
                    name="category" 
                    value={values.category} 
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="slug" className="block text-gray-700">Slug</label>
                <input 
                    type="text" 
                    id="slug" 
                    name="slug" 
                    value={values.slug} 
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700">Precio</label>
                <input 
                    type="number" 
                    id="price" 
                    name="price" 
                    value={values.price} 
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="stock" className="block text-gray-700">Stock</label>
                <input 
                    type="number" 
                    id="stock" 
                    name="stock" 
                    value={values.stock} 
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="slug" className="block text-gray-700">Imagen</label>
                <input 
                    type="file" 
                    id="imageUrl" 
                    name="imageUrl" 
                    value={values.imageUrl} 
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>

            <div className="flex mb-4">
                <div className="w-1/2">
                    <label className="block text-gray-700">Destacado</label>
                    <input 
                        type="checkbox" 
                        id="destacado" 
                        name="destacado" 
                        checked={values.destacado} 
                        onChange={handleChange}
                        className="mr-2 leading-tight"
                    />
                    <label htmlFor="destacado" className="text-gray-700">Sí</label>
                </div>

                <div className="w-1/2">
                    <label className="block text-gray-700">Novedad</label>
                    <input 
                        type="checkbox" 
                        id="novedad" 
                        name="novedad" 
                        checked={values.novedad} 
                        onChange={handleChange}
                        className="mr-2 leading-tight"
                    />
                    <label htmlFor="novedad" className="text-gray-700">Sí</label>
                </div>
            </div>

            <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
                Guardar
            </button>
        </form>
    )

}

export default CreateForm;
