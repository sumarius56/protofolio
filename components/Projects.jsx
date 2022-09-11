import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import dataImg from '../public/assets/projects/finaldataimg.png';
import googleImg from '../public/assets/projects/googlenextimg.jpg'
import netflixImg from '../public/assets/projects/netflixImg.webp'
import twitchImg from '../public/assets/projects/twitchImg.jpg'
import ProjectItem from './ProjectItem';
import uberImg from '../public/assets/projects/uber.webp'
import huluImg from '../public/assets/projects/hulu.jpg'
import amazonImg from '../public/assets/projects/amazonIMG.png'
import gymImg from '../public/assets/projects/cover.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>


            <ProjectItem
            title='Amazon NXT'
            backgroundImg={amazonImg}
            projectUrl='/amazonnxt'
            tech='Next JS/Redux'
             />

            <ProjectItem
            title='Uber Clone'
            backgroundImg={uberImg}
            projectUrl='/uberclone'
            tech='Next JS'
             />

            <ProjectItem
              title='Gym Time'
              backgroundImg={gymImg}
              projectUrl='/gymtime'
              tech='React JS'
            />

            <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'
             />
          
          <ProjectItem
            title='Google NXT'
            backgroundImg={googleImg}
            projectUrl='/googlenxt'
            tech='Next JS'
          />

           <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'
          />

            <ProjectItem
            title='Hulu NXT'
            backgroundImg={huluImg}
            projectUrl='/hulunxt'
            tech='Next JS'
            />

          <ProjectItem
            title='Data Website'
            backgroundImg={dataImg}
            projectUrl='/datawebsite'
            tech='React JS'
          />


          
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Projects;