import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
// import { useContext } from 'react'

import f1 from '../img/products/n1.jpg'
import f2 from '../img/products/n2.jpg'
import f3 from '../img/products/n3.jpg'
import f4 from '../img/products/n4.jpg'
import f5 from '../img/products/n5.jpg'
import f6 from '../img/products/n6.jpg'
import f7 from '../img/products/n7.jpg'
import f8 from '../img/products/n8.jpg'
import Navbar from './Navbar'
let shop=[
    {
        "id": 9,
        "img": f1,
        "brand": "AdiGalaxy",
        "name": "Stellar Explorer Tee",
        "price": "799",
        "que":1
    },
    {
        "id": 10,
        "img": f2,
        "brand": "GAPPY Stars",
        "name": "Astronaut Emblem Shirt",
        "price": "6999",
        "que":1
    },
    {
        "id": 11,
        "img": f3,
        "brand": "PUMA Cosmic",
        "name": "Space Journey Tee",
        "price": "2999",
        "que":1
    },
    {
        "id": 12,
        "img": f4,
        "brand": "NIKE Orbit",
        "name": "Lunar Landing T-Shirt",
        "price": "1799",
        "que":1
    },
    {
        "id": 13,
        "img": f5,
        "brand": "Ooto Universe",
        "name": "Cosmic Voyage Tee",
        "price": "699",
        "que":1
    },
    {
        "id": 14,
        "img": f6,
        "brand": "Zudio Space",
        "name": "Galactic Traveler T-Shirt",
        "price": "1099",
        "que":1
    },
    {
        "id": 15,
        "img": f7,
        "brand": "Ooto Planetary",
        "name": "Interstellar Explorer Tee",
        "price": "699",
        "que":1
    },
    {
        "id": 16,
        "img": f8,
        "brand": "Ooto Galaxy",
        "name": "Star Wanderer T-Shirt",
        "price": "699",
        "que":1
    }
]




 

const NewArrShopcard = ({handleClick}) => {


    const [cartAlert, setCartAlert] = useState(false);
    function handleAddToCart(data) {
        setCartAlert(true);

        if (typeof handleClick === 'function') {
            handleClick(data);
        } else {
            console.error('handleClick is not a function');
        }    
    }

    useEffect(() => {
        if (cartAlert) {
            const timeout = setTimeout(() => {
                setCartAlert(false);
            }, 2000);

        }
    });
    
    
  return (
    <div className='relative w-[auto] my-[20px] mx-[auto] flex flex-wrap  justify-evenly '>
            

            {shop.map((data) => (
            <div  className='hover:scale-[0.95] duration-150 w-full max-w-[280px] m-[30px] border border-solid border-[lightgray] shadow-2xl rounded-[12px] py-[10px] px-[20px]'>
                <img className='w-full rounded-[12px]' src={data.img} alt={data.name} />
                <div className='mt-4 text-[#646161] text-[18px]'>{data.brand}</div>
                <div className='font-semibold text-[20px] mb-[20px]'>{data.name}</div>
                <div className='flex justify-between items-center mb-[12px]'>
                    <div>
                        <div className='mb-[12px]'>⭐⭐⭐⭐</div>
                        <div className='text-[#088178] font-[700] text-[20px]'>₹{data.price}</div>
                    </div>
                    <div className='border border-solid bg-[#088178] rounded-[50%] hover:border hover:border-solid hover:border-[#ff6464]'>
                        <svg onClick={()=>handleAddToCart(data)}  className='w-[30px] cursor-pointer  m-[10px] text-[#fffdfd]' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                        </svg>
                    </div>
                </div>
               
                
            </div>
            ))}
                 {cartAlert && (
                <div className='fixed top-20 right-10 z-[10000]'>
                    <div className='  px-6 py-3 bg-green-500 text-white rounded'>
                        Added to cart successfully!
                    </div>
                </div>
            )}

        
            

    </div>
  );
}

export default NewArrShopcard