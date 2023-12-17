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
    <div className='flex  flex-col-reverse justify-center items-center  mt-[25rem] xl:mt-0  xl:justify-normal xl:items-stretch h-[100dvh] w-auto  xl:flex-row  xl:w-[60rem] xl:h-[27rem] bg-[#1B1937] shadow-[0px_20px_20px_-10px_rgba(23,25,41,0.20)] rounded-lg '>
      <div className='flex flex-col justify-center items-center pt-[2rem] xl:my-20 space-y-8 xl:space-y-10 w-auto md:w-[350px]  xl:w-[400px] mx-20 text-center xl:text-left'>
        <div className='text-4xl font-bold  xl:w-full'>
          Get <span className='text-[#AB5CDB]'>insights </span>that help your
          business grow.
        </div>
        <div className='opacity-75 text-[0.93rem]'>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </div>
        <div className='flex flex-col xl:flex-row gap-5 xl:gap-24 h-full pb-28 xl:pb-0'>
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

      <div className=' bg-[#9f44d8] rounded-tr-lg rounded-br-lg '>
        <Image
          src={bitMap}
          alt='some image'
          objectFit='cover'
          className=' mix-blend-multiply h-full'
        />
      </div>
    </div>
  );
};
