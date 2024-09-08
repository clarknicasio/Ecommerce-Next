"use client";

export default function GlobalError({ error, reset }) {

    return ( 
    <html>
        <body className="h-screen flex flex-col justify-center items-center text-center">
            <h2 className="font-bold mb-4">Oops ... algo no salió bien</h2>
            <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={() => reset()}>Recargar</button>
        </body>
    </html>
    )
}