import React from 'react'

function Section4() {
  return (
    <section className=' w-[100%] h-[100%] bg-black py-[3%] pb-8 px-[3%]'>
        <h3 className='font-sans font-semibold text-white md:mb-[3rem] md:text-[5rem] sm:text-[3rem] sm:mb-[2rem] '>the latest.</h3>
        <div className='md:grid grid-cols-3 md:grid-flow-row gap-10 sm:flex flex-col'>
        <div className='col-span-1 h-[20rem] w-[100%] bg-white'>
        </div>
        <div className='h-[100%] w-[100%] md:col-span-2'>
         <div className='border-white border-b-[0.5px] py-[3%]  text-white flex flex-row'>
         <h3 className='font-sans text-[#ac41f8] font-normal'>News</h3>
         <p className='font-sans px-[5%] text-white font-normal'> Beekreed it's time to creed the fact of life</p>
         </div>
         <div className='border-white border-b-[0.5px] py-[3%] text-white flex flex-row'>
         <h3 className='font-sans text-[#ac41f8] font-normal'>News</h3>
         <p className='font-sans px-[5%] text-white font-normal'> Beekreed it's time to creed the fact of life</p>
         </div>
         </div>
        </div>
         
      </section>
  )
}

export default Section4