import React, {Suspense} from 'react';
import Producto from './producto/producto';

const ListaProductos = ({ products, destacados = false, novedades = false, categoria = '' }) => {

    const productsFilter = products
    .filter(product => !destacados || product.destacado)
    .filter(product => !novedades || product.novedad) 
    .filter(product => !categoria || product.category === categoria);

    return (
        <>
            {productsFilter
                .filter(product => !destacados || product.destacado)
                .map(product => (
                    <Producto key={product.id} product={product} />
                ))
            }    
        </>
    );
};

export default ListaProductos;
