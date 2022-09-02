import Image from 'next/image';
import React from 'react';
import amazonImg from '../public/assets/projects/amazonIMG.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import amazonf1 from '../public/assets/footage/amazonf1.png'
import amazonf2 from '../public/assets/footage/amazonf2.png'
import amazonf3 from '../public/assets/footage/amazonf3.png'
import amazonf4 from '../public/assets/footage/amazonf4.png'

const hulunxt = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={amazonImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Amazon NXT</h2>
          <h3>Next JS / Tailwind /Redux </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <h3>Work in Progress</h3>
          <p>
            This appplication was built using NEXT.JS and is styled with
            Tailwind CSS. The application is hosted statically using Vercel.
            This is a mobile responsive recreation of Amazon.I make use of fakeshop API and server side rendering,
            react responsive carousel, heroicons@v1 to build my frontend.Than i implemented the functionality (with the help of Redux) of
            adding items to the basket,as well as removing them.In the checkout page, you can see how many items do
            you have in the basket, and the total price of them.I then added the Next Auth with firebase google authentication
            so you can't press the go to checkout button unless you are logged in.
          </p>
          {/* Footage */}
          <div className='mt-4  '>
          <h2 className='mb-4' >Footage</h2>
            <Image className='rounded-lg' src={amazonf1} />
             <Image className='rounded-lg' src={amazonf2} />
              <Image className='rounded-lg' src={amazonf3} />
               <Image className='rounded-lg' src={amazonf4} />
            </div>
          
          <a
            href='https://amazon-nxt.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://github.com/sumarius56/amazon-NXT'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>
           
        </div>
        <div className='col-span-4 max-h-[23rem] md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next.JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
               <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Redux
              </p>
               <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Fakeshop API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next Auth
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
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