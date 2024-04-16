import React from 'react'
import b2 from '../img/banner/b2.jpg'

const Homebanner = () => {
  return (
    <div className='w-[100%] relative text-center mb-[30px]'>
        <img className='w-[99%] h-[260px] my-[20px] mx-[auto]' src={b2} alt="" />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className='text-[white]  text-4xl font-serif my-[22px]'>Repair Service</div>
            <div className='text-[white] text-3xl font-serif my-[22px]'>Up to <span className='text-[red]'>70% OFF</span>-All t-Shits & Accessories</div>
            <button className='text-[20px] text-[black] border border-solid border-[white]  bg-[white] rounded-[5px] py-[8px] px-[16px] hover:bg-[#088178] hover:scale-[0.95] hover:transition-transform hover:text-[white]' >Explore Now</button>
        </div>
    </div>
  )
}

export default Homebanner