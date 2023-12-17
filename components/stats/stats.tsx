import React from 'react';
import Image from 'next/image';
import bitMap from '@/public/images/bitmap.png';
export const Stats = () => {
  return (
    <div className='flex  w-[60dvw] h-[30rem] bg-[#1B1937] shadow-[0px_20px_20px_-10px_rgba(23,25,41,0.20)] rounded-lg'>
      <div className='flex flex-col my-20 space-y-10 w-[550px] mx-20'>
        <div className='text-4xl font-bold'>
          Get <span className='text-[#AB5CDB]'>insights </span>that help your
          business grow.
        </div>
        <div>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </div>
        <div className='flex gap-5'>
          <div>
            <div>10k+</div>
            <div>companies</div>
          </div>
          <div>
            <div>10k+</div>
            <div>companies</div>
          </div>
          <div>
            <div>10k+</div>
            <div>companies</div>
          </div>
        </div>
      </div>

      <div className='w-[40rem] h-full'>
        <Image
          src={bitMap}
          alt='some image'
          className='object-cover w-full h-full'
        />
      </div>
    </div>
  );
};
