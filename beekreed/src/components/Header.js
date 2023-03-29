import React from 'react'

function Header() {
  return (
    <div className='w-[100%] text-white xl:text-[1.7rem] border-b-2 sticky top-0 bg-black border-[#00000005]'>
       <div className='p-[1rem] mx-auto w-[90%] flex justify-between items-center'>
       <h1 className='border-black font-sans font-semibold px-[1rem] border-[3px]'>Beekreed</h1>
       <div className='w-[30%]  flex flex-row text-[1.1rem] justify-between items-center font-sans font-medium'>
       <h1>Services</h1>
       <h1>About us</h1>
       <h1>Blog</h1>
       <button className='border-purple-600 border-2 rounded-[0.1rem] flex justify-center items-center ml-3 px-4 py-3'>Talk to us </button> 
       </div>
       </div>
       
       </div>
  )
}

export default Header