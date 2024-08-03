'use client';

import Link from 'next/link';
import { useState } from 'react';
import { categories } from '../lib/data';

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);

  const handleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link href="/">Logo</Link>
      </div>
      <div style={styles.menu}>
        <Link href="/productos">Catálogo</Link>
        <div style={styles.dropdown} onMouseEnter={handleCategories} onMouseLeave={handleCategories}>
          <span style={styles.dropdownToggle}>Categorías</span>
          {showCategories && (
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
      <div style={styles.cart}>
        <Link href="/carrito">🛒</Link>
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
  menu: {
    display: 'flex',
    gap: '2rem',
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
  cart: {
    fontSize: '1.5rem',
  },
};

export default Navbar;
