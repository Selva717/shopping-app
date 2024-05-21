import React from 'react'

const Newsletter = () => {
  return (
    <div className='relative bg-[#041e42] w-[100%] h-[300px]'>
        <div className='text-[white] w-full lg:w-[90%] flex flex-col lg:flex-row justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4 lg:gap-[30px] text-center lg:text-left '>
           <div className=' '>
                <div className='text-[30px] font-serif font-[bold]'> Sign up For Newsletters</div>
                <div className='text-[20px] font-serif font-[bold]'>Get E-mail updates about our latest shop and <span className='text-[gold]'>Special Offer</span> </div>
           </div>

            <div>
                <input className='w-[350px] p-[10px] focus:border focus:border-solid hover:border-none' type="text" placeholder='Your Email address' />
                <button className='border border-solid border-[#088178] bg-[#088178] p-[10px] font-bold'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter