"use client";

import React, {useState} from 'react';
import Link from 'next/link';
import { categories } from '../lib/data';

const MenuList = ({ open, handleClose }) => {

    const [mostrarCategorias, setMostrarCategorias] = useState(false);

    const toggleCategorias = () => {
        setMostrarCategorias(!mostrarCategorias);
    };

    return (
        <div
            className={`${
                open ? 'opacity-100 visible' : 'opacity-0 invisible'
            } transition-all fixed inset-0 bg-black/50 flex justify-end`}
            onClick={handleClose}
        >
            <aside
                className={`${
                    !open ? 'translate-x-48' : ''
                } transition-all w-48 bg-gray-500`}
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    onClick={handleClose}
                    className="text-white text-right p-4 cursor-pointer"
                >
                    X
                </div>
                <nav className="flex mt-4 flex-col gap-3 px-3">
                    <Link href="/productos" className="text-white p-2">
                        Catálogo
                    </Link>
                    <div className="text-white p-2 cursor-pointer" onClick={toggleCategorias}>
                        Categorías
                    </div>                    
                    {mostrarCategorias && (
                        <div className="flex flex-col gap-2 pl-4">
                            {categories.map(category => (
                                <Link key={category} href={`/categorias/${category}`} className="text-white p-2">
                                {category}
                                </Link>
                            ))}              
                        </div>
                    )}                    
                    <Link href="/destacados" className="text-white p-2">
                        Destacados
                    </Link>
                    <Link href="/novedades" className="text-white p-2">
                        Novedades
                    </Link>
                    <Link href="/carrito" className="text-white p-2">
                        Carrito
                    </Link>
                </nav>
            </aside>
        </div>
    );
};

export default MenuList;
