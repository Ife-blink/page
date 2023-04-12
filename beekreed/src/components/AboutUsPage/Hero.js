import React from 'react'
import Image from 'next/image'


function Hero() {
  return (
    <div className='h-[80vh] bg-purple-600 my-auto font-sans flex flex-col justify-center items-center w-[100%] px-[18%]'>
      <h3 className='font-mono text-xl text-purple-200'>About Us</h3>
      <h1 className='text-[4rem] text-center text-white font-medium'>We are Beekreed and we create digital things</h1>
      <p className='px-[20%] text-lg text-center mt-6 text-[#e4e4e4]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      
    </div>
  )
}

export default Hero
