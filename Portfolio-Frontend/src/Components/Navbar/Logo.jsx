import React from 'react'

function Logo() {
  return (
    <>

      <abbr title="Go To Home" className='no-underline'>
          <a href="#home" className='flex items-center cursor-pointer'>
            <img className='w-10 rounded-full' src="../../src/assets/sudip.jpg" alt="" />
            <h2 className='ml-2 text-xl font-medium dark:text-white duration-500'>Sudip Paul</h2>
          </a>
      </abbr>
    </>
  )
}

export default Logo