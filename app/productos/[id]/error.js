"use client";
import Link from 'next/link';
import { useEffect } from "react";

export default function Error ({error, reset}) {

    useEffect(() =>{ 
        console.log(error);
    }, [error]);

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="text-center">
                <h2>Oops ...algo no salió bien intentando obtener el detalle del producto</h2>
                <hr className="my-6" />
                <button onClick={() => reset()} className="bg-green-500 text-white py-2 px-4 m-1 rounded">Intenta nuevamente</button>
                <Link className="" href="/">
                    <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-900 m-1">Volver al inicio</button>
                </Link>

            </div>
        </div>
    );    

}