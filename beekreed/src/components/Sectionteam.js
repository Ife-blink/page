import React from 'react'
import { motion } from 'framer-motion'

function Sectionteam() {

    const scalevariant = {
        hidden: { scale: 0.5},
        visible: {scale: 1,
          transition:{ duration: 0.3,}
        },
        
    }

  return (
    <div className=' w-[100%] flex flex-col pb-[5%]'>
        <div className='w-[100%] flex flex-row justify-between mt-[13%] mb-[10%] px-[5%]'>
        <motion.div
        initial="hidden"
        animate="visible"
        variants={scalevariant}
        className='h-[10rem] w-[10rem] bg-black rounded-[50%]'></motion.div>
        <motion.div
        initial="hidden"
        animate="visible"
        variants={scalevariant}
        className='h-[10rem] w-[10rem] bg-black rounded-[50%]'></motion.div>
         <motion.div
        initial="hidden"
        animate="visible"
        variants={scalevariant}
        className='h-[10rem] w-[10rem] bg-black rounded-[50%]'></motion.div>
        <motion.div
        initial="hidden"
        animate="visible"
        variants={scalevariant}
        className='h-[10rem] w-[10rem] bg-black rounded-[50%]'></motion.div>
        
        </div>
        <div className='px-[5%]'>
        <p className='font-sans text-[1.8rem]'>"Jitter removes the need to reply on our design team to edit
            the content of our video"
        </p>
        <h3 className='font-sans mt-4 font-medium text-[2rem]'>Federico Pascal, <br /> Marketing Lead</h3>
        </div>
    
    </div>
  )
}

export default Sectionteam