import React from 'react'
import f1 from '../img/features/f1.png'
import f2 from '../img/features/f2.png'
import f3 from '../img/features/f3.png'
import f4 from '../img/features/f4.png'
import f5 from '../img/features/f5.png'
import f6 from '../img/features/f6.png'
import FeatureCard from './FeatureCard'

let featuresArray=[
    {
        img :f1,
        name:"Free Shipping",
        bg:"#f6dbf6"
    },
    {
        img :f2,
        name:"Online Order",
        bg:"#cdebbc"
    },
    {
        img :f3,
        name:"Save Money",
        bg:"#d1e8f2"
    },
    {
        img :f4,
        name:"Promotion",
        bg:"#cdd4f8"
    },
    {
        img :f5,
        name:"Happy Sell",
        bg:"#f6dbf6"
    },
    {
        img :f6,
        name:"24/7 Support",
        bg:"#fff2e5"
    },
    

]


const features = () => {
    return (
      <div className="w-[auto] my-[20px] mx-[auto] flex flex-wrap gap-[20px] justify-evenly ">
            
            {featuresArray.map((data) => (
                <FeatureCard className="border border-solid border-black" key={data.name} img={data.img} name={data.name} bg={data.bg} />
            ))}
            
      </div>
    );
    
  }

export default features