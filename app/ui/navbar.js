'use client';

import Link from 'next/link';
import { useState } from 'react';
import { categories } from '../lib/data';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Menu from './menu';

const Navbar = () => {
  const [mostrarCategorias, setMostrarCategorias] = useState(false);

  const handleCategorias = () => {
    setMostrarCategorias(!mostrarCategorias);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link href="/">Store NextJS</Link>
      </div>
      <div style={styles.menu} className="hidden lg:flex lg:gap-8">
        <Link href="/productos">Catálogo</Link>
        <div style={styles.dropdown} onMouseEnter={handleCategorias} onMouseLeave={handleCategorias}>
          <span style={styles.dropdownToggle}>Categorías</span>
          {mostrarCategorias && (
            <div style={styles.dropdownMenu}>
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
      <div style={styles.cart} className="flex">
        <Link href="/carrito" className="hidden lg:block"><ShoppingCartIcon className="h-7 w-7" /></Link>
        <div className="block lg:hidden">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#f8f8f8',
    borderBottom: '1px solid #ddd',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  dropdown: {
    position: 'relative',
  },
  dropdownToggle: {
    cursor: 'pointer',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    padding: '0.5rem',
    zIndex: 1,
  },
  /*cart: {
    minWeight: '200px',
    fontSize: '1.5rem',
  },*/
};

export default Navbar;
