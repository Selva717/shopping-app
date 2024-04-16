import React, { useState } from 'react'
import { useEffect } from 'react'
// import Fbanner from './Featurebanner'

import f1 from '../img/products/f1.jpg'
import f2 from '../img/products/f2.jpg'
import f3 from '../img/products/f3.jpg'
import f4 from '../img/products/f4.jpg'
import f5 from '../img/products/f5.jpg'
import f6 from '../img/products/f6.jpg'
import f7 from '../img/products/f7.jpg'
import f8 from '../img/products/f8.jpg'
let shop=[
    {
        "id": 1,
        "img": f1,
        "brand": "AdiSpace",
        "name": "Galactic Explorer Tee",
        "price": "599",
        "que":1
    },
    {
        "id": 2,
        "img": f2,
        "brand": "GAPPY",
        "name": "Space Odyssey Shirt",
        "price": "5599",
        "que":1
    },
    {
        "id": 3,
        "img": f3,
        "brand": "PUMAX",
        "name": "Astronautic Adventure Tee",
        "price": "2199",
        "que":1
    },
    {
        "id": 4,
        "img": f4,
        "brand": "NIKEx",
        "name": "Star Voyager T-Shirt",
        "price": "1599"
        ,
        "que":1
    },
    {
        "id": 5,
        "img": f5,
        "brand": "OotoX",
        "name": "Celestial Traveller Tee",
        "price": "499",
        "que":1
    },
    {
        "id": 6,
        "img": f6,
        "brand": "ZudioX",
        "name": "Orbit Surfer T-Shirt",
        "price": "929",
        "que":1
    },
    {
        "id": 7,
        "img": f7,
        "brand": "OotoX",
        "name": "Galaxy Pioneer Tee",
        "price": "499",
        "que":1
    },
    {
        "id": 8,
        "img": f8,
        "brand": "OotoX",
        "name": "Universal Explorer Shirt",
        "price": "499",
        "que":1
    }
]





const Shopcards = ({handleClick}) => {
    
    
    

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
      
    <div className=' w-[auto] my-[20px] mx-[auto] flex flex-wrap  justify-evenly '>
       
            {shop.map((data) => (
            <div  className=' relative hover:scale-[0.95] duration-150 w-full max-w-[280px] m-[30px] border border-solid border-[lightgray] shadow-2xl rounded-[12px] py-[10px] px-[20px]'>
                <img className='w-full rounded-[12px]' src={data.img} alt={data.name} />
                <div className='mt-4 text-[#646161] text-[18px]'>{data.brand}</div>
                <div className='font-semibold text-[20px] mb-[20px]'>{data.name}</div>
                <div className='flex justify-between items-center mb-[12px]'>
                    <div>
                        <div className='mb-[12px]'>⭐⭐⭐⭐</div>
                        <div className='text-[#088178] font-[700] text-[20px]'>₹{data.price}</div>
                    </div>
                    <div  className='border border-solid bg-[#088178] rounded-[50%] hover:border hover:border-solid hover:border-[#ff6464]'>
                        <svg onClick={()=>handleAddToCart(data)} className='w-[30px] cursor-pointer  m-[10px] text-[#fffdfd]' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
  };
  

export default Shopcards