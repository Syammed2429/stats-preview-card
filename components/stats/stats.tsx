import React from 'react';
import Image from 'next/image';
import bitMap from '@/public/images/bitmap.png';
export const Stats = () => {
  const statsData = [
    {
      id: 1,
      value: '10k+',
      name: 'companies',
    },
    {
      id: 2,
      value: '314',
      name: 'Templates',
    },
    {
      id: 3,
      value: '12M+',
      name: 'Queries',
    },
  ];

  return (
    <div className='flex  flex-col-reverse xl:flex-row  w-[57dvw] h-[30rem] bg-[#1B1937] shadow-[0px_20px_20px_-10px_rgba(23,25,41,0.20)] rounded-lg'>
      <div className='flex flex-col my-20 space-y-10 w-[400px] mx-20'>
        <div className='text-4xl font-bold'>
          Get <span className='text-[#AB5CDB]'>insights </span>that help your
          business grow.
        </div>
        <div className='opacity-75 text-[0.93rem]'>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </div>
        <div className='flex gap-24'>
          {statsData?.map((stat) => (
            <div key={stat?.id} className='space-y-2'>
              <div className='text-2xl font-bold'>{stat?.value}</div>
              <div className='opacity-50 text-xs tracking-[0.0625rem] uppercase font-lexend-deca'>
                {stat?.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=' h-full '>
        <Image
          src={bitMap}
          alt='some image'
          className='object-cover  h-full mix-blend-multiply bg-purple-600'
        />
      </div>
    </div>
  );
};
