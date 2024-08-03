// /lib/data.ts

export const categories = ['Celulares', 'Smartwatches', 'Memorias', 'Auriculares'];

export const products = [
  {
    id: 1,
    title: 'Producto 1',
    description: 'Descripción del producto 1',
    price: '$29.99',
    category: 'Smartwatches',      
    destacado: true,
    novedad: false,
    imageUrl: 'https://via.placeholder.com/300x200'
  },
  {
    id: 2,
    title: 'Producto 2',
    description: 'Descripción del producto 2',
    price: '$39.99',
    category: 'Auriculares',
    destacado: true,
    novedad: false,
    imageUrl: 'https://via.placeholder.com/300x200'
  },
  {
    id: 3,
    title: 'Producto 3',
    description: 'Descripción del producto 3',
    category: 'Celulares',        
    price: '$29.99',
    destacado: true,
    novedad: false,  
    imageUrl: 'https://via.placeholder.com/300x200'
  },
  {
    id: 4,
    title: 'Producto 4',
    description: 'Descripción del producto 4',
    price: '$39.99',
    category: 'Memorias',        
    destacado: false,
    novedad: true,  
    imageUrl: 'https://via.placeholder.com/300x200'
  },  
];
