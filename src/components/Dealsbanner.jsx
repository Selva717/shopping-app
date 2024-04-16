import React from 'react'
import b17 from '../img/banner/b17.jpg'
import b10 from '../img/banner/b10.jpg'

let banner = [b17,b10]

const Dealsbanner = () => {
  return (
    <div className='w-[auto] my-[20px] mx-[auto] flex flex-wrap gap-[20px] justify-evenly'>
        {
            banner.map((data)=>(
                <div className='relative h-[100%]'>
                    <img className='h-[340px] rounded-[12px] object-cover' src={data} alt="" />
                    <div className='absolute top-0 left-0 right-0 bottom-0 h-[340px] rounded-[12px]   bg-[#0000003f]'></div>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center '>
                      <div className='text-4xl font-serif text-[white] mb-[16px] font-medium'>Crazy Deals</div>
                      <div className='text-4xl font-serif text-[white] mb-[16px] font-bold tracking-wider my-[32px] '>buy 1 get 1 free</div>
                      <div className='text-[16px] font-serif text-[white] mb-[16px] font-medium tracking-wide  my-[32px] '>The best classic dress is on sale at cara</div>
                      <button className='text-[20px] text-[white] border border-solid border-[white]  bg-[#ffffff00] rounded-[5px] py-[12px] px-[16px] hover:bg-[#088178] hover:scale-[0.95] hover:transition-transform'>Learn More</button>
                    </div>

                </div>
            ))
        }
    </div>
  )
}

export default Dealsbanner