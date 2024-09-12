"use client";

import {createContext, useContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart,item]);
    }

    const clearCart = () => {
        setCart([]);
    };

    const removeItem = (slug) => {
        setCart(cart.filter(item => item.slug !== slug));
    };

    return <CartContext.Provider value= {{ cart, addToCart, clearCart, removeItem }}>
        {children}
    </CartContext.Provider>
}

export const useCartContext = () => useContext(CartContext);