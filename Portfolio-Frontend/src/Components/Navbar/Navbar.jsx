import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import Themeswitch from './Themeswitch.jsx'
import Navlink from './Navlink.jsx'
import Navicon from './Navicon.jsx'
import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaBlogger } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";

function Navbar() {

  const [scrollClr, setScrollClr] = useState('dark:bg-gray-800')
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setScrollClr("dark:bg-gray-800/30 backdrop-blur border-b-0")
      }
      else {
        setScrollClr("dark:bg-gray-800")
      }
    })
  }
    , [])
  return (
    <>
      <div className={`sticky top-0 py-4 px-2 ${scrollClr} dark:border-b-0`}>
        <div className='flex max-w-[1200px] m-auto items-center justify-between relative'>
          <Logo />

          <div className='hidden sm:flex sm:gap-10'>
            <Navlink NavlinkName="Home" dest='#home' />
            <Navlink NavlinkName="About" dest='#about' />
            <a href="https://sudipblogs.vercel.app/"
              target='_blank'
              className='text-base font-medium hover:text-customBlue duration-200 dark:text-gray-200 dark:hover:text-blue-400'
            >Blog</a>
            <Navlink NavlinkName="Contact Me" dest='#contact' />
          </div>
    <div className='absolute h-screen flex top-0 items-center right-0'>
          <div className={`border-2 dark:border-0 bg-white dark:bg-gray-800 h-[250px] flex flex-col justify-evenly sm:hidden  rounded-full px-2 py-3`}>
            <Navicon NavlinkName={<FaHome />} dest='#home' />
            <Navicon NavlinkName={<IoMdPerson />} dest='#about' />
            <a href="https://sudipblogs.vercel.app/"
              target='_blank'
              className='text-3xl font-medium hover:text-customBlue duration-200 dark:text-gray-200 dark:hover:text-blue-400'
            ><FaBlogger /></a>
            <Navicon NavlinkName={<IoIosContact />} dest='#contact' />
          </div>
    </div>

          <Themeswitch />
        </div>
      </div>
    </>
  )
}

export default Navbar