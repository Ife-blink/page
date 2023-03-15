import React from 'react'
import { motion } from 'framer-motion'
import { BsFillCalendarCheckFill } from 'react-icons/bs';


function Hero() {
  return (
    <div className='h-[100vh] w-[100%] flex items-center'>
         <section className=' w-[100%] relative'>
         
         <div className='h-[100%] w-[100%] flex items-start overflow-hidden absolute z-1'>
         <motion.div 
         initial={{x: 0, y: 0}}
         animate={{x:['30vw', '20vw', '20vw', '50vw', '70vw', '40vw', '30vw'], y: ['30vh', '20vh', '40vh', '40vh', '70vh', '30vh']}}
         transition={{duration: 20, repeat: Infinity}}
         className='h-[200px] w-[200px] rounded-[50%] bg-blue-600'>
         </motion.div>
         <motion.div 
         initial={{x: 0, y: 0}}
         animate={{x:['30vw', '60vw', '30vw', '10vw', '40vw', '70vw', '30vw'], y: ['30vh', '20vh', '40vh', '40vh', '30vh', '30vh']}}
         transition={{duration: 20, repeat: Infinity}}
         className='h-[200px] w-[200px] rounded-[50%] bg-[#62c90f]'>
         </motion.div>
         <motion.div
          initial={{x: 0, y: 0}}
          animate={{x:['30vw', '20vw', '40vw', '40vw', '70vw', '30vw', '30vw'], y: ['40vh', '20vh', '30vh', '50vh', '10vh', '40vh']}}
          transition={{duration: 20, repeat: Infinity}}
         className='h-[200px] w-[200px] rounded-[50%] bg-[#f76714]'>
         </motion.div>
         </div>
         <div className='h-[100%] w-[100%] bg-[#FFFFFF30] absolute backdrop-blur-[8rem]'>

         </div>

          <div className='absolute pb-[5rem] h-[100%] w-[150vw] ] z-5 flex items-center justify-center '>
            <div className='w-[100%]'>
         <h1 className='font-sans leading-[10rem] -skew-y-6 font-bold text-[10rem] text-[#00000000] font-outline-2'>
          Beekreed-Agency
         </h1>
         
         <h1 className='font-sans leading-[10rem] -skew-y-6 font-bold text-[10rem] text-[#00000000] font-outline-2'>
          Agency-Beekreed
         </h1>
         </div>
          </div>
          
        <div className='absolute z-10 h-[100%] w-[100%] flex flex-col justify-center items-center'>
        <h1 className='font-sans font-bold text-[4.5rem] leading-[4.5rem] text-center -skew-y-6'> Chennai’s most awaited developer conference</h1>
        <p className='mx-[30%] mt-[2rem] font-sans font-normal -skew-y-6 text-center text-[#00000095]'>
          Come learn, network and celebrate with the Google Developer Ecosystem while also learning to hack on Android, Chrome, and Web.
        </p>
        <button className='bg-black text-white font-sans px-[10%] py-[0.7%] mt-[1.5rem] -skew-y-6 rounded-[5px] flex flex-row items-center'>
         <BsFillCalendarCheckFill /> <h1 className='ml-[0.7rem]'>Talk to us</h1></button>
         </div>
         </section>
    </div>
  )
}

export default Hero