import hero from '../img/hero4.png'
import '../index.css'
import button from '../img/button.png'
import Features from './features'
import ShopCard from './Shopcards'
import Fbanner from './Featurebanner'
import Dealbanner from './Dealsbanner'
import Homebanner from './Homebanner';
import Newarrivalsbanner from './Newarrivalsbanner'
import NewArrShopcard from './NewArrShopcard'
// import Morebanner from './components/Morebanner';
import Newsletter from './Newsletter';
import Footer from './footer';


const Index = ({handleClick}) => {
  return (
    <>
    <div className='relative text-center'>
        <img className='w-[100%] h-[90vh] object-cover ' src={hero} alt="" />
        <div className='absolute top-[20%] left-[20%] transform -translate-x-[20%] -translate-y-[20%] '>
              <h3 className='min-[851px]:font-serif text-[33px] max-[850px]:text-[18px]'>Trade-in-offer</h3>
              <div className='min-[851px]:font-serif font-semibold text-[53px] max-[850px]:text-[38px] max-[850px]:font-medium'>Super value deals</div>
              <div className='min-[851px]:font-serif font-semibold text-[53px] max-[850px]:text-[38px] max-[850px]:font-medium text-[#088178]'>on all products</div>
              <h3 className='min-[851px]:font-serif text-[23px] max-[850px]:text-[15px] text-[#7f7d7d]'>save more with coupon & up to 70% off!</h3>

              <div className='relative w-[100%] m-8'>
                  <img src={button} alt="" />
                  <button className='absolute top-0  left-0 transform -translate-x-[-80%] -translate-y-[-50%] text-[#088178] font-bold'>Shop Now!</button>
              </div>             
        </div>
       
    </div>
     <Features/>
     <Fbanner/>
     <ShopCard handleClick={handleClick}/>
     <Homebanner/>
     <Newarrivalsbanner />
     <NewArrShopcard handleClick={handleClick}/>
     <Dealbanner/>
     {/* <Morebanner/> */}
     <Newsletter/>
     <Footer/>

     </>
  )
}

export default Index