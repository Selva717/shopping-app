import React from 'react';

const FeatureCard = (props) => {
  return (
    <div className='w-[auto] border border-solid border-[#f3efef] flex flex-col items-center gap-[20px] p-[25px] rounded shadow my-[22px] mx-[10px] '>
      <img src={props.img} alt="" />
      <div className='border border-solid  px-[10px] py-[3px] rounded-[5px] text-[16px] font-semibold text-[#088178]' style={{ backgroundColor: props.bg }}>{props.name}</div>
    </div>
  );
}

export default FeatureCard;
