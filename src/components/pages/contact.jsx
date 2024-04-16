import React from 'react'
import b19 from '../../img/about/banner.png'
import video from '../../img/about/1.mp4'
import Footer from '../../components/footer';


const contact = () => {
  return (
    <div>
         <div className='w-[100%] relative text-center mb-[30px]'>
            <img className='w-[99%] h-[200px] mt-[3px] mb-[20px] mx-[auto] object-cover' src={b19} alt="" />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='text-[white]  text-7xl font-serif my-[22px] tracking-widest'>#Know More</div> 
             </div>
        </div>

        <div className='flex w-4/5 my-[50px] mx-auto justify-around items-center'>
            <div>
                <div className='font-medium mb-[20px]'>GET IN TOUCH</div>
                <div  className='text-4xl font-medium mb-[20px]'>Vist one of our agency location or contact us</div>
                <div  className='font-medium mb-[20px]'>Head office</div>

                <div className='flex gap-10 items-center  mb-[10px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                    </svg>
                    <div>NO:166/50, busroad, Chennai</div>
                </div>

                <div className='flex gap-10 items-center mb-[10px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <div>carashopping@gmail.com</div>

                </div>

                <div className='flex gap-10 items-center mb-[10px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <div>9876543210</div>

                </div>
            </div>
            
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.652899174609!2d76.99885565!3d11.026377549999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8562665571b65%3A0xa84174cbb7442460!2sRadisson%20Blu%20Hotel%20Coimbatore!5e0!3m2!1sen!2sin!4v1711345497034!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

        <div className='w-1/2 my-[50px] mx-auto flex flex-col  items-center'>
            <div className='font-bold text-3xl mb-12 font-mono'>Try our app</div>
            <video  width="90%" height="200px" controls autoPlay loop >
                <source src={video} />
            </video>
        </div>
        <hr/>
        <Footer/>
    </div>
  )
}

export default contact