import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import gym1 from '../public/assets/footage/gymf1.png'
import gym2 from '../public/assets/footage/gymf2.png'
import gym3 from '../public/assets/footage/gymf3.png'
import gym4 from '../public/assets/footage/gymf4.png'

const hulunxt = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={gym1}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Gym Time</h2>
          <h3>React JS / Material UI </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This appplication was built using React.JS and is styled with
            Material UI. The application is hosted statically using Vercel.
            This is a mobile responsive website.I make use of the Rapid API (
                To be exact : Youtube Search and Download and ExerciseDB
            ) to get and display exercises , videos on how to do them,pagination and even similar exercises/equipment.
          </p>
          {/* Footage */}
          <div className='mt-4'>
          <h2 className='mb-4' >Footage</h2>
            <Image className='rounded-lg' src={gym1} />
             <Image className='rounded-lg' src={gym2} />
              <Image className='rounded-lg' src={gym3} />
               <Image className='rounded-lg' src={gym4} />
            </div>
          
          <a
            href='https://gymtime.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://github.com/sumarius56/gymtime'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>
           
        </div>
        <div className='col-span-4 max-h-[16rem] md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React.JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Material UI
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
               <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Rapid API
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

export default hulunxt;