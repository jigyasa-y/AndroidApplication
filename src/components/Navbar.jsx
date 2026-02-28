import React from 'react';

import Cart from '../assets/icons/38.svg?react';
import Search from '../assets/icons/37.svg?react';

function Navbar({ onCartOpen }) {
    return (
        <>
            <div className='bg-white flex justify-around items-center h-16'>
                <select name="category" id="category" className='font-bold text-xs p-2  rounded-md'>
                    <option value="shop" className='font-bold'>SHOP</option>
                    <option value="about">About</option>
                    <option value="faq">FAQ</option>
                </select>
                
                <div className=' w-20 '>
                    <img src="../../public/Images/1.jpeg" alt="" />
                </div>
                <div className="flex gap-4">
                    <Cart onClick={onCartOpen} className="w-6 h-6 cursor-pointer" />
                    <Search className="w-6 h-6" />
                </div>
            </div>
        </>
    )
}

export default Navbar;
