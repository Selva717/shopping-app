import React from 'react'
import b19 from '../../img/banner/b19.jpg'
import b1 from '../../img/blog/b1.jpg'
import b2 from '../../img/blog/b2.jpg'
import b3 from '../../img/blog/b3.jpg'
import b4 from '../../img/blog/b4.jpg'
import b5 from '../../img/blog/b5.jpg'
import b6 from '../../img/blog/b6.jpg'
import b7 from '../../img/blog/b7.jpg'
import Footer from '../../components/footer';


const blogarr = [
    {
        img:b1,
        no:"13/01",
        title:"Cartoon Astronout T-Shirts & Hoodies",
        dec:"Hoodies embody the essence of comfort and versatility, seamlessly blending casual style with cozy warmth. They have become an essential piece in everyone's wardrobe, celebrated for their trendy appeal and the comfortable embrace they offer.",
        con:"Continue reading...."
    },
    {
        img: b2,
        no: "20/02",
        title: "Vintage Leather Jackets",
        dec: "Leather jackets stand as a symbol of timeless style and rugged durability. A staple in fashion history, they offer an unmatched blend of elegance and edge, making them a must-have for those who appreciate classic vibes with modern flair.",
        con: "Continue reading...."
    },
    {
        img: b3,
        no: "28/03",
        title: "Sleek Running Sneakers",
        dec: "Sneakers have revolutionized the way we think about footwear, blending performance with lifestyle to create shoes that are both functional for running and stylish for everyday wear. Their sleek designs and innovative technology support your feet with every step.",
        con: "Continue reading...."
    },
    {
        img: b4,
        no: "15/04",
        title: "Eco-Friendly Bamboo Watches",
        dec: "In an era where sustainability is more than a trend, bamboo watches emerge as eco-friendly accessories that don't compromise on style. Their unique construction and natural aesthetic offer a refreshing twist on timekeeping.",
        con: "Continue reading...."
    },
    {
        img: b5,
        no: "05/05",
        title: "Artisan Coffee Beans",
        dec: "Artisan coffee beans celebrate the craft of coffee making, offering a journey of flavors that are as rich and complex as their origins. Each bean tells a story of its land, making every cup a unique experience.",
        con: "Continue reading...."
    },
    {
        img: b6,
        no: "23/06",
        title: "Handcrafted Wooden Decor",
        dec: "Handcrafted wooden decor brings warmth and authenticity to any space, embodying the beauty of natural materials. Each piece, with its unique grains and textures, adds a touch of craftsmanship to the modern home.",
        con: "Continue reading...."
    },
    {
        img: b7,
        no: "12/07",
        title: "Organic Skincare Essentials",
        dec: "Organic skincare essentials offer a gentle yet effective approach to beauty, harnessing the power of natural ingredients. Their commitment to sustainability and skin health makes them a conscientious choice for mindful consumers.",
        con: "Continue reading...."
    }
    
]

const Blog = () => {
  return (
    <>
        <div className='w-[100%] relative text-center mb-[30px]'>
            <img className='w-[99%] h-[200px] mt-[3px] mb-[20px] mx-[auto] object-cover' src={b19} alt="" />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='text-[white]  text-7xl font-serif my-[22px] tracking-widest'>#BLOG</div> 
             </div>
        </div>

        <div>
            {
                blogarr.map((data=>(
                    <div className='w-3/4 my-[100px] mx-auto'>
                        <div className='text-8xl font-extrabold text-[#9e9b9b]'>{data.no}</div>
                        
                        <div className='flex items-center gap-12'>  
                            <img className='w-1/2 h-[400px] object-cover m-[-20px]'  src={data.img} alt="" />
                            <div>
                                <div className='font-bold text-4xl mb-11'>{data.title}</div>
                                <div  className='font-normal text-[#514f4f] text-2xl mb-11'>{data.dec}</div>
                            </div>
                        </div>
                    </div>
                )))
            }


        </div>
        <hr/>
        <Footer/>
    </>
  )
}

export default Blog