import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

function Section5() {
  return (
    <section className='h-[100%] w-[100%] py-[5%] bg-black px-[3%]'>
        <div className='w-[100%] h-[50%] md:grid md:grid-cols-5 gap-1 grid-flow-row sm:flex flex-col'>
        <div className='bg-[#29292e] col-span-2 '>
        <div className=' grid h-[100%] grid-cols-10 grid-flow-row'>
          <div className='col-span-9 h-[100%] p-[5%] grid items-stretch'>
            <>
        <h3 className='font-sans font-light text-[0.8rem] text-[#ffffff90]'>Services</h3>
        <h2 className='font-sans font-normal text-[1.6rem] mt-[1rem] mb-[4rem] leading-[2rem]  text-white'>Creating meaniful <br /> connections</h2>
        </>
        <p className='font-sans font-light text-[0.8rem] pr-[50%] text-[#ffffff90]'>Working with startups to build memorable brands from the ground up or established businesses to refresh and modernize</p>
        </div>
        <div className='h-[50px] w-[100%] flex justify-center items-center  border-[3px] border-[#29292e]'>
          
        </div>
        </div>
        </div>
        <div className='bg-purple-700 col-span-3 overflow-hidden '>
         <div className='grid gap-1 h-[100%] grid-cols-2 grid-rows-4'>
         <div className='p-[5%] w-[100%]'>
         <h3 className='font-sans font-light text-[0.8rem] text-[#ffffff90]'>Get in touch</h3>
         </div>
         <div className='w-[100%] h-[100%]  flex justify-end'>
         <div className='h-[50px] w-[50px] flex justify-center items-center bg-white border-purple-700 border-[2px] '>
          <BsArrowRight color='#000000' />
         </div>
         </div>
         <div className='px-[5%] '>
         <h2 className='font-sans font-normal text-[1.6rem] leading-[2rem] text-white'>Let's do this. <br/> Together</h2>
         </div>
         <div>

         </div>
         <div className='px-[5%] pt-[2rem]'>
         <h2 className='font-sans font-semibold md:text-[6rem] leading-[2rem] text-white sm:text-[4rem]'>project</h2>
         </div>
         <div className=''>
         </div>
         <div className='w-[100%] h-[100%] flex items-end '>
         <div className='w-[100px] h-[50px]  bg-purple-800'></div>
         </div>
         <div className='w-[100%] flex justify-end px-[5%] md:mt-0 sm:mt-[1rem]'>
         <h2 className='font-sans font-semibold md:text-[6rem] leading-[2rem] text-white sm:text-[4rem]'>inquiry</h2>
         </div>
         </div>
        </div>
        </div>
      </section>
  )
}

export default Section5