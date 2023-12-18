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
    <div className='flex  flex-col-reverse justify-center items-center  mt-[15rem] xl:mt-0  xl:grid xl:grid-cols-6  h-[100dvh] w-auto  xl:flex-row  xl:w-[70rem]  xl:h-[30rem]  bg-[#1B1937] shadow-[0px_20px_20px_-10px_rgba(23,25,41,0.20)] rounded-lg '>
      <div className='flex flex-col justify-center items-center pt-[2rem] xl:pt-0  space-y-8 xl:space-y-10 w-auto md:w-[400px]  xl:col-span-3  xl:place-self-center place-items-center text-center xl:text-left'>
        <div className='text-4xl font-bold  xl:w-full'>
          Get <span className='text-[#AB5CDB]'>insights </span>that help your
          business grow.
        </div>
        <div className='opacity-75 text-[0.93rem]'>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </div>
        <div className='flex flex-col xl:flex-row gap-5 xl:gap-24 h-full pb-20 md:pb-28 xl:pb-5'>
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

      <div className='xl:col-span-3 rounded-tr-lg rounded-br-lg bg-[#9f44d8]  xl:h-[30rem] mb-9'>
        <Image
          src={bitMap}
          alt='some image'
          className='mix-blend-multiply xl:h-[30rem] object-cover xl:w-full'
        />
      </div>
    </div>
  );
};
