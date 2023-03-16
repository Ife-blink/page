import React from 'react'

function Section4() {
  return (
    <section className=' w-[100%] bg-black py-[3%] px-[3%]'>
        <h3 className='font-sans font-semibold text-white mb-[3rem] text-[5rem]'>the latest.</h3>
        <div className='grid grid-cols-3 gap-10'>
        <div className='col-span-1 h-[20rem] w-[100%] bg-white'>
        </div>
        <div className='h-[100%] w-[100%] col-span-2'>
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