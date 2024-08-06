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
                } transition-all w-48 bg-white`}
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    onClick={handleClose}
                    className="text-right p-4 cursor-pointer"
                >
                    X
                </div>
                <nav className="flex mt-4 flex-col gap-3 px-3">
                    <Link href="/productos" className="p-2"  onClick={handleClose}>
                        Catálogo
                    </Link>
                    <div className="p-2 cursor-pointer" onClick={toggleCategorias}>
                        Categorías
                    </div>                    
                    {mostrarCategorias && (
                        <div className="flex flex-col gap-2 pl-4">
                            {categories.map(category => (
                                <Link key={category} href={`/categorias/${category}`} className="p-2" onClick={handleClose}>
                                {category}
                                </Link>
                            ))}              
                        </div>
                    )}                    
                    <Link href="/destacados" className="p-2" onClick={handleClose}>
                        Destacados
                    </Link>
                    <Link href="/novedades" className="p-2" onClick={handleClose}>
                        Novedades
                    </Link>
                    <Link href="/carrito" className="p-2" onClick={handleClose}>
                        Carrito
                    </Link>
                </nav>
            </aside>
        </div>
    );
};

export default MenuList;
