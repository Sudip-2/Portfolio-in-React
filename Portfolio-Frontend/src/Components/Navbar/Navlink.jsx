import React from 'react'

function Navlink({NavlinkName,dest}) {
  return (
    <>
    <a href={`${dest}`} 
    className='text-base font-medium hover:text-customBlue duration-200 dark:text-gray-200 dark:hover:text-blue-400'
    >{NavlinkName}</a>
    </>
  )
}

export default Navlink