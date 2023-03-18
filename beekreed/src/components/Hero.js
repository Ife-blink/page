import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import { BsFillCalendarCheckFill } from 'react-icons/bs';


function Hero() {
  return (
    
         <section className='w-[100%] max-w-screen h-[100vh] flex justify-start items-start relative'>
        
         <div className='h-[100%] w-[100%] grid grid-cols-3 grid-rows-2 gap-4 absolute z-0 '>
          <div className='w-[4rem] h-[100%]'>
          <Image
        height={200}
        width={200}
        className="absolute flex justify-self-start"
        src='Purple.svg' />  
          </div>
          <div className=' w-[4rem] h-[100%]'></div>
          <div className='flex justify-end p-[3rem] h-[100%]'>
          <Image
        height={200}
        width={200}
        className="absolute flex justify-self-start"
        src='market.svg' />
          </div>
          <div className=' p-[3rem] h-[100%]'>
          <Image
        height={200}
        width={200}
        className="absolute flex justify-self-start"
        src='design.svg' />   
          </div>
          <div className=' h-[100%]'></div>
          <div className=' p-[3rem] h-[100%]'>
          <Image
        height={200}
        width={200}
        className="absolute  flex justify-self-start"
        src='development.svg' />
          </div>
         </div>

        <div className='h-[100%] w-[100%] absolute z-2 grid grid-cols-12 '>
        <div className=' col-span-2'></div>
         <div className='bg-blac col-span-8 w-[100%] h-[100%]'>
         <div className='h-[100%] w-[100%] flex flex-col justify-center items-center'>
        <h1 className='font-sans font-bold text-[4.5rem] leading-[4.5rem] text-center '> 
We design experiences that enable
people to feel engaged</h1>
        <p className='px-[20%] mt-[2rem] font-sans font-normal text-center text-[#00000095]'>
        Crafting and upgrading the next generation of web experiences. We empower our clients to refocus on the things that drive rapid and sustainable growth.
        </p>
        <button className='bg-black text-white font-sans px-[10%] py-[0.7%] mt-[1.5rem] rounded-[5px] flex flex-row items-center'>
         <BsFillCalendarCheckFill /> <h1 className='ml-[0.7rem]'>Let's talk shop</h1></button>
         </div>
         </div>
         
         <div className=' col-span-2'></div>
        </div>
          
        

         </section>
   
  )
}

export default Hero