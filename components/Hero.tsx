import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <video
        className='absolute top-0 left-0 w-full h-screen object-cover'
        src='/myBookingAppVideo.mp4'
        autoPlay
        loop
        muted
      />
      <div className='bg-black/20 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            Find your Next Stay
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
           search low prices on hotels, homes and much more...
          </p>
          <button className='bg-white text-black border py-2 px-3 rounded-full'>Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;