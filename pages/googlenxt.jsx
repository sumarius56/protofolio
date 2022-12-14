import Image from 'next/image';
import React from 'react';
import googleImg from '../public/assets/projects/googlenextimg.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import googlef1 from '../public/assets/footage/googlef1.png';
import googlef2 from '../public/assets/footage/googlef2.png';
import googlef3 from '../public/assets/footage/googlef3.png';

const googlenxt = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={googleImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Google NXT</h2>
          <h3>Next JS / Tailwind / Vercel</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a google clone made in Next JS, here i show the power of Tailwind CSS and Next server rendering to make use of the google API for searching the web, and also implementing pagination,ability to move from one page to another.
          </p>
          {/* Footage */}
          <div className='mt-4'>
          <h2 className='mb-4' >Footage</h2>
            <Image className='rounded-lg' src={googlef1} />
            <Image className='rounded-lg' src={googlef2} />
            <Image className='rounded-lg' src={googlef3} />
            </div>
          <a
            href='https://github.com/sumarius56/googlenxt'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://googlenxt.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl max-h-[21rem] shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Vercel
              </p>
               <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google API
              </p>
             
              
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default googlenxt;