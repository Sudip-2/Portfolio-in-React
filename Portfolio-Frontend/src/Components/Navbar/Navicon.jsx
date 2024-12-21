import React from 'react'

function Navicon({NavlinkName,dest}) {
    return (
      <>
      <a href={`${dest}`} 
      className='text-3xl font-medium hover:text-customBlue duration-200 dark:text-gray-200 dark:hover:text-blue-400'
      >{NavlinkName}</a>
      </>
    )
  }

export default Navicon