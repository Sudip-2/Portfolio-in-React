import React from 'react'
import { FaFileDownload } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import { motion } from "motion/react"

function Home() {
  return (
    <div className='px-2 mt-4 sm:mt-0'>
      <div id='home' className='scroll-mt-24 max-w-[1200px] min-h-[85svh] mx-auto flex flex-wrap-reverse justify-center sm:justify-between items-center'>

        <div 
        className='w-[640px] sm:w-[65%] text-center sm:text-left'
        >
          <motion.h1 className='text-xl mt-2 mb-2'
          style={{
            fontWeight:"bold"
          }}
          >Welcome to my Portfolio</motion.h1>
          <motion.div className='text-center sm:text-left text-3xl sm:text-5xl sm:leading-[60px]' 
          style={{
            fontWeight:900
          }}
          >
            Hi I'm <br /><span className='text-customBlue'>Sudip Paul</span> <br /> <span 
            style={{
              fontWeight:700
            }}
            >
              <Typewriter
              options={{
                strings: [ 'Coder' , 'Student' , 'Web Developer'],
                autoStart: true,
                loop: true,
                pauseFor:300,
              }}
            /></span>
          </motion.div>
          <p className='my-6 sm:mt-4 sm:mb-8 sm:text-lg'>I am Currently pursuing BCA, Interested In WebDevelopment <br /> Explore my collection of projects</p>
          <div className='flex gap-3 sm:gap-6 justify-center sm:justify-start flex-wrap'>
            <button className='hover:bg-blue-400 duration-200 bg-customBlue text-white px-6 py-2 rounded-full w-full sm:w-[130px]'>Hire Me!</button>
            <button
              className='hover:bg-customBlue hover:text-white duration-200 dark:bg-gray-200 dark:border-none dark:hover:bg-white dark:hover:text-customBlue bg-white border border-customBlue text-customBlue px-6 py-2 w-full sm:w-[180px] rounded-full flex items-center justify-center gap-2'
            >Download CV <FaFileDownload />
            </button>
          </div>
        </div>

        <motion.img
          src="../../sudip.jpg"
          alt="sudip's image"
          className='aspect-square w-[280px] sm:w-[35%] rounded-full'
          initial={{
            opacity:0,
            scale:0.8,
            y:150
          }}
          whileInView={{
            opacity:1,
            scale:1,
            y:0
          }}
          transition={{
            duration:1
          }}
        />
      </div>
    </div>
  )
}

export default Home