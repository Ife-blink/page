import React from 'react'

function Setion3util({name, desc, number, onClick}) {
  return (
    <div className=' h-[100%] w-[100%]'>
    
  <div onClick={onClick} className='w-[100%] h-[100%] py-8 flex flex-col justify-center border-b-[#ffffff60] text-white border-x-[#00000000] border-b-[1px]'>
  <div className=' mb-[5px] rounded-[50]'>
      <h1 className='font-mono font-semibold text-white'>{number}</h1>
    </div>
    <h2 className='font-sans font-semibold text-[2rem] xl:text-[2.2rem]'>{name}</h2>
    <p className='font-sans font-light text-[1rem] xl:text-[1.5rem]  mt-[1rem]'>{desc}</p>
  </div>
  </div>
  )
}

export default Setion3util