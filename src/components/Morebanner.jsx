import React from 'react'
import b7 from '../img/banner/b7.jpg'
import b4 from '../img/banner/b4.jpg'
import b18 from '../img/banner/b18.jpg'

const arr =[
    {
        img:b7,
        heading:"Seasonal Sale",
        dec:"Winter Collection -50% off"
    },
    {
        img:b4,
        heading:"NEW FOOTWARE COLLECTION",
        dec:"Spring / Summer 2023"
    },
    {
        img:b18,
        heading:"T-Shirts",
        dec:"New designs -50% off"
    }
]

const Morebanner = () => {
  return (
    <div className='w-[auto] my-[20px] mx-[auto] flex  justify-evenly  sm:flex-col '>
        
        {
            arr.map((data=>(
                <div className='relative my-[20px] mx-[auto]  sm:w-[50%]' >
                    <img className='h-[270px] w-[100%] rounded-[8px]' src={data.img} alt="" />
                    
                            <div className= 'h-[270px] rounded-[8px] w-[100%] absolute bg-[#00000080] top-0 left-0 right-0 bottom-0'></div>
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mr-[20px]'>
                                <div className='text-[white] text-[30px] tracking-wide font-bold w-[300px] font-serif'> {data.heading} </div>
                                <div className='text-[red] text-[25px] tracking-wide font-bold w-[350px] font-mono'> {data.dec} </div>
                            </div>
                    
                </div>
            )))
        }
    </div>
  )
}

export default Morebanner