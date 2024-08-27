'use client';

import React, { useState } from 'react'; 
import MenuList from './menuList';
import Image from 'next/image';

const Menu = () => { 
    const [open, setOpen] = useState(false); 
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
    <div onClick={handleOpen}>
      <Image src="/hamburger-menu.svg" alt="Hamburger Icon" width={40} height={40} />
        <MenuList handleClose={handleClose} open={open}/>
    </div>
)
}
export default Menu;