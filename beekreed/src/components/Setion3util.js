import React from 'react'

function Setion3util({name, desc, number}) {
  return (
    <div className=' h-[100%] w-[100%]'>
    
  <div className='w-[100%] h-[100%] py-[2rem] flex flex-col justify-center border-y-[#ffffff60] text-white border-x-[#00000000] border-[1px]'>
  <div className='h-[2rem] w-[2rem] flex justify-center items-center mb-[5px] rounded-[50] bg-white'>
      <h1 className='font-sans font-semibold text-[#9a23f0]'>{number}</h1>
    </div>
    <h2 className='font-sans font-semibold text-[2.4rem]'>{name}</h2>
    <p className='font-sans font-light text-[1.1rem] mt-[1rem]'>{desc}</p>
  </div>
  </div>
  )
}

export default Setion3util