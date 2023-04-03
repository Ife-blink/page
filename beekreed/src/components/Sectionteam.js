import React from 'react'
import { motion } from 'framer-motion'

function Sectionteam() {

    const scalevariant = {
        hidden: { scale: 0.5},
        visible: {scale: 1,
          transition:{ duration: 0.3, repeat: Infinity}
        },
        
    }

  return (
    <div className=' w-[100%] text-black flex flex-col pb-[5%]'>
      <h3 className='font-mono px-[5%] mt-7 text-purple-600 lg:text-[2rem] '>Talk to us</h3>
        <div className='w-[100%] flex flex-row justify-between mt-7 mb-[10%] px-[5%]'>
        <motion.div
        initial="hidden"
        animate="visible"
        variants={scalevariant}
        className='h-[7rem] w-[7rem] xl:h-[10rem] xl:w-[10rem] bg-green-200 rounded-[50%]'></motion.div>
        <motion.div
        initial="hidden"
        animate="visible"
        variants={scalevariant}
        className='h-[7rem] w-[7rem] xl:h-[10rem] xl:w-[10rem] bg-purple-200 rounded-[50%]'></motion.div>
         <motion.div
        initial="hidden"
        animate="visible"
        variants={scalevariant}
        className='h-[7rem] w-[7rem] xl:h-[10rem] xl:w-[10rem] bg-blue-200 rounded-[50%]'></motion.div>
        <motion.div
        initial="hidden"
        animate="visible"
        variants={scalevariant}
        className='h-[7rem] w-[7rem] xl:h-[10rem] xl:w-[10rem] bg-red-200 rounded-[50%]'></motion.div>
        
        </div>
        <div className='px-[5%] xl:flex xl:flex-col xl:items-center'>
        <p className='font-sans text-[1.8rem]'>"Jitter removes the need to reply on our design team to edit
            the content of our video"
        </p>
        <h3 className='font-sans mt-4 font-medium text-[2rem]'>Federico Pascal, <br /> Marketing Lead</h3>
        </div>
    
    </div>
  )
}

export default Sectionteam