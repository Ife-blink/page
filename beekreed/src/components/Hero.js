import React from 'react'
import { motion } from 'framer-motion'
import { BsFillCalendarCheckFill } from 'react-icons/bs';


function Hero() {
  return (
    <div className='h-[80vh] w-[100%] flex'>
         <section className=' w-[100%]  relative '>
         <div className='absolute h-[100%] w-[300%] overflow-hidden z-0 '>
         <div className='w-[100%] mb-[50%] absolute -rotate-12'>
              <motion.div
              initial={{x: 0}}
              animate={{x: '50%'}}
              transition={{duration: 3, repeat: Infinity}}
              >
         <h1
          className='font-sans leading-[10rem] -skew-x-6  font-bold text-[10rem] text-[#00000000] font-outline-2'>
          Agency-Beekreed-Agency-Beekreed-Agency
         </h1>
         </motion.div>
          
         <motion.div
              initial={{x: 0}}
              animate={{x: '-120%'}}
              transition={{duration: 5, repeat: Infinity}}
              >
         <h1 className='font-sans leading-[10rem] -skew-x-6 font-bold text-[10rem] text-[#00000000] font-outline-2'>
         Beekreed-Agency-Agency-Beekreed-Agency
         </h1>
         </motion.div>
         </div>
         </div>

      
          
        <div className='absolute z-10 h-[100vh] w-[100%] flex flex-col justify-center items-center'>
        <h1 className='font-sans font-bold text-[4.5rem] leading-[4.5rem] text-center -skew-y-6'> Chennai’s most awaited developer conference</h1>
        <p className='mx-[30%] mt-[2rem] font-sans font-normal -skew-y-6 text-center text-[#00000095]'>
        Crafting and upgrading the next generation of web experiences. We empower our clients to refocus on the things that drive rapid and sustainable growth.
        </p>
        <button className='bg-black text-white font-sans px-[10%] py-[0.7%] mt-[1.5rem] -skew-y-6 rounded-[5px] flex flex-row items-center'>
         <BsFillCalendarCheckFill /> <h1 className='ml-[0.7rem]'>Let's talk shop</h1></button>
         </div>
         </section>
    </div>
  )
}

export default Hero