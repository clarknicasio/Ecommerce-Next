'use client';

import Link from 'next/link';
import { useState } from 'react';
import { categories } from '../lib/data';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Menu from './menu';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  const [mostrarCategorias, setMostrarCategorias] = useState(false);

  const handleCategorias = () => {
    setMostrarCategorias(!mostrarCategorias);
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.logo}>
        <Link href="/">Store NextJS</Link>
      </div>
      <div className="hidden lg:flex lg:gap-8">
        <Link href="/productos">Catálogo</Link>
        <div className={styles.dropdown} onMouseEnter={handleCategorias} onMouseLeave={handleCategorias}>
          <span className={styles.dropdownToggle}>Categorías</span>
          {mostrarCategorias && (
            <div className={styles.dropdownMenu}>
              {categories.map(category => (
                <Link key={category} href={`/categorias/${category}`} className="block px-4 py-2 hover:bg-gray-300">
                  {category}
                </Link>
              ))}              
            </div>
          )}
        </div>
        <Link href="/destacados">Destacados</Link>
        <Link href="/novedades">Novedades</Link>
      </div>
      <div className="flex">
        <Link href="/carrito" className="hidden lg:block"><ShoppingCartIcon className="h-7 w-7" /></Link>
        <div className="block lg:hidden">
          <Menu />
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
