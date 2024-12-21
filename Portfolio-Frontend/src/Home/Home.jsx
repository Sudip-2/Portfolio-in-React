import React from 'react'
import { FaFileDownload } from "react-icons/fa";
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <div className='px-2 mt-4 sm:mt-0'>
      <div id='home' className='scroll-mt-24 max-w-[1200px] min-h-[85svh] mx-auto flex flex-wrap-reverse justify-center sm:justify-between items-center'>

        <div className='w-[640px] sm:w-[65%] text-center sm:text-left'>
          <h1 className='font-bold text-xl mb-2'>Welcome to my Portfolio</h1>
          <div className='text-center sm:text-left text-3xl sm:text-5xl font-black sm:leading-[60px]' >
            Hi I'm <br /><span className='text-customBlue'>Sudip Paul</span> <br /> <span className='font-bold'>
              <Typewriter
              options={{
                strings: ['Web Developer', 'Backend'],
                autoStart: true,
                loop: true,
                pauseFor:300,
              }}
            /></span>
          </div>
          <p className='my-6 sm:mt-4 sm:mb-8 sm:text-lg'>I am Currently pursuing BCA, Interested In WebDevelopment <br /> Explore my collection of projects</p>
          <div className='flex gap-3 sm:gap-6 justify-center sm:justify-start flex-wrap'>
            <button className='bg-customBlue text-white px-6 py-2 rounded-full w-full sm:w-[130px]'>Hire Me!</button>
            <button
              className='bg-white border border-customBlue text-customBlue px-6 py-2 w-full sm:w-[180px] rounded-full flex items-center justify-center gap-2'
            >Download CV <FaFileDownload />
            </button>
          </div>
        </div>

        <img
          src="../../sudip.jpg"
          alt="sudip's image"
          className='aspect-square w-[280px] sm:w-[35%] rounded-full'
        />
      </div>
    </div>
  )
}

export default Home