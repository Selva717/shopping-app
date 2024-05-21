import React, {useState,useEffect } from 'react'


import Logo from '../img/logo.png'
import {Link,useLocation} from 'react-router-dom'
import './styles/Index.css'

const Navbar = ({size}) => {

  const [navOpen, setNav] = useState(false);
  const [logOpen,setlogOpen] = useState(false);


  const[cartCount,setCartCount]=useState(0);

  function handleNav(){
    setNav(!navOpen);
    console.log("done")
  }

  function handleLogin(){
    setlogOpen(!logOpen);
    console.log("login done")
  }
  const location  = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])



  const homeloc = location.pathname === '/'? 'text-[#23534f] border-b-[3px] border-[#088178]':'text-[black]'

  const shoploc = location.pathname === '/shop'? 'text-[#23534f] border-b-[3px] border-[#088178]':'text-[black]'

  const blogloc = location.pathname === '/blog'? 'text-[#23534f] border-b-[3px] border-[#088178]':'text-[black]'

  const contloc = location.pathname === '/contact'? 'text-[#23534f] border-b-[3px] border-[#088178]':'text-[black]'
  
  const cartloc = location.pathname === '/cart'? 'text-[#23534f] border-b-[3px] border-[#088178]':'text-[black]'
 
 

  return (
    <>

    <div className='sticky   z-50 top-0'>

        <div className='  flex gap-[60px] items-center p-[24px] px-[90px] bg-[#E3E6F3] justify-between shadow ' >
            
            <Link to='/'><img src={Logo} alt="" /></Link>



            <div className='max-[850px]:hidden min-[851px]: flex gap-10 font-[500] items-center ' >
              <Link to='/' className={`text-[#1a1a1a] hover:border-b-[3px] hover:text-[#23534f]   border-[#088178] duration-75 ${homeloc}	`} >  Home</Link>
              <Link to='/shop' className={`text-[#1a1a1a] hover:border-b-[3px] hover:text-[#23534f]   border-[#088178]  duration-75 ${shoploc}`} >Shop</Link>
              <Link to='/blog' className={`text-[#1a1a1a] hover:border-b-[3px] hover:text-[#23534f]   border-[#088178]  duration-75 ${blogloc}`}>Blog</Link>
              <Link to='/contact' className={`text-[#1a1a1a] hover:border-b-[3px] hover:text-[#23534f]   border-[#088178]  duration-75 ${contloc}`}>Contact Us</Link>
              <button onClick={handleLogin} className='mx-7 border border-solid 	rounded-[8px] py-1 px-3 text-[#ffffff] bg-[#088178] duration-75' >Login</button>
              <div className='relative'>
                <Link to='/cart'  ><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={` min-[850px]:lg:w-8 h-8 ${cartloc} `}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      
                </svg>
                <div className='absolute top-0 right-0 text-[white] bg-[#ff0000d2] rounded-[50%] px-[6px] text-[14px]  mr-[-7px] mt-[-5px] font-bold'>{size}</div>
                </Link> 
              </div>
            </div>

          <div  className='min-[851px]:hidden justify-center gap-6 items-center flex  '>{!navOpen &&(
              
              <svg onClick={handleNav}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-[851px]:hidden max-[850px]:w-6 h-6 cursor-pointer  duration-75 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />  
              </svg>
              )}
             <div className='relative'>
                <Link to='/cart'  ><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={` min-[850px]:lg:w-8 h-8 ${cartloc} `}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      
                </svg>
                <div className='absolute top-0 right-0 text-[white] bg-[#ff0000d2] rounded-[50%] px-[6px] text-[14px]  mr-[-7px] mt-[-5px] font-bold'>{size}</div>
                </Link> 
              </div>
              <button onClick={handleLogin} className='mx-7 border border-sol id 	rounded-[8px] py-1 px-3 text-[#ffffff] bg-[#088178] duration-75' >Login</button>

            <div className='min-[851px]:hidden ' >{navOpen&&(
              //cross
              <div className='flex flex-col items-center p-8 absolute top-0 right-0 bg-[#E3E6F3]  '>
                <svg onClick={handleNav} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer	 w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

                <Link to='/' onClick={handleNav} className='p-4 text-[#1a1a1a] hover:border-b-[3px] hover:text-[#23534f]   border-[#088178]  duration-75' >Home</Link>
                <Link to='/shop' onClick={handleNav} className='p-4 text-[#1a1a1a] hover:border-b-[3px] hover:text-[#23534f]   border-[#088178]  duration-75' >Shop</Link>
                <Link to='/blog'onClick={handleNav} className='p-4 text-[#1a1a1a] hover:border-b-[3px] hover:text-[#23534f]   border-[#088178]  duration-75' >Blog</Link>
                <Link to='/contact'onClick={handleNav} className='p-4 text-[#1a1a1a] hover:border-b-[3px] hover:text-[#23534f]   border-[#088178]  duration-75'>Contact Us</Link>
              </div>
                
            )}
            </div>
          </div>
        </div>



        {/* form */}
       
  {logOpen && (
  <div className='fixed inset-0 flex items-center justify-center z-50 '>
    <div className=' p-16 rounded-lg relative bg-[#dee1e2]'>
      <div className='absolute top-8 text-2xl font-bold text-[#088178]'>Login</div>
      <svg onClick={handleLogin} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-1 right-1 si cursor-pointer w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      <div className='my-[50px]'>
        <div className='flex gap-8 items-center border border-solid  shadow-2xl	 py-2 px-1 rounded-[6px] my-[10px] '>
          <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ea4335]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
          </span>
            <div className='text-2xl font-mono '>Continue with Gmail</div>
        </div>
        <div className='flex gap-8 items-center border border-solid  shadow-2xl	 py-2 px-1 rounded-[6px] my-[40px] '>
          <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#355fea]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
          </span>
            <div className='text-2xl font-mono '>Continue with Facebook</div>
        </div>
      </div>
      <div className='border border-solid mt-[120px]'></div>
      <div className='flex gap-8 w-[auto] justify-center mt-2'>
         <div className=''>new user?</div>
         <span className='text-[#088178] font-bold cursor-pointer '>Sign up</span>

      </div>
    </div>
  </div>
)}

    </div>

          
      
    </>
      

  )
}

export default Navbar