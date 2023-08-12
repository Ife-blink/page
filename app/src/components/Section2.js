import React from 'react'
import { motion } from 'framer-motion'

function Section2() {
  return (
    <section className=' h-[100vh] z-20 sticky top-0 bg-purple-600 w-[100%] pt-[4%]'>

    <div className='w-[100%] h-[20vh] bg-green-500'>

      </div>
    <div className='w-[100%] h-[40rem] bg-[#000000] text-white flex items-end'>
      
      <div className='w-[100%] h-[80%] flex flex-col justify-center overflow-hidden justify-self-end '>
        
        <motion.h1 
        initial={{opacity: 0}}
        animate={{y: ['8rem', '-4rem', '-4rem', '-12rem'], opacity: [0 , 1, 1]}}
        transition={{duration: 5, repeat:  Infinity}}
        className='font-sans font-semibold text-white text-[4.5rem] pl-[10%] mb-[4rem]'>Beekreed Agency</motion.h1>
      
      </div>
    </div>
    </section>
  )
}

export default Section2