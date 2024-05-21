import React from 'react'
import { useState,useEffect } from 'react'
import {useLocation} from 'react-router-dom'

import Shopcards from '../Shopcards'
import NewArrShopcard from '../NewArrShopcard'
import b1 from '../../img/banner/b1.jpg'
import Footer from '../../components/footer';





const shop = ({handleClick}) => {
    const [shopPage,setShop] = useState(true);
    const location  = useLocation();


    function handleShop(){
        setShop(!shopPage);
        
    }

    const [newArrivals,setNewArrivals] = useState(false);


    function handleNew(){
        setNewArrivals(!newArrivals)
        
    }

    const smoothScrollToTop = () => {
        window.scrollTo({
          top: 180, 
          behavior: 'smooth'
        });
      };

    useEffect(() => {
    smoothScrollToTop();
  }, [shopPage, newArrivals]);

  return (
    <div>
        <div className='w-[100%] relative text-center mb-[30px]'>
            <img className='w-[99%] h-[260px] my-[20px] mx-[auto]' src={b1} alt="" />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='text-[white]  text-7xl font-serif my-[22px] tracking-widest'>#SHOP</div> 
             </div>
        </div>
       { shopPage&&(
            <div>< Shopcards handleClick={handleClick} /></div>
       )
        }
        {
            newArrivals&&(
                <div> <NewArrShopcard key={1} handleClick={handleClick}/> </div>
            )
        }

        <div className='text-center'>
            <button onClick={()=> {handleNew();handleShop();scroll()}}  className='bg-[#088178] px-[10px] py-[5px] text-[white] mx-[10px] my-[20px]'>1</button>
            <button onClick={()=> {handleShop();handleNew();scroll()}} className='bg-[#088178] px-[10px] py-[5px] text-[white]  my-[20px]'>2</button>
        </div>
        <hr/>
      <Footer/>
    </div>
  )
}

export default shop