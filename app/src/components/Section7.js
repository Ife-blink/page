import React from 'react'
import { useEffect, useRef } from 'react'
import { motion, useAnimationControls, useInView } from 'framer-motion'
import { BsShieldFillCheck } from 'react-icons/bs';
import { FaUnlock, FaRocket, FaBitcoin, FaPiggyBank } from 'react-icons/fa'
import { Player } from '@lottiefiles/react-lottie-player'
import Image from 'next/image'

function Section7() {

  const ref = useRef(null)
  const isInView = useInView(ref)
  const animation = useAnimationControls()
  const textanimation = useAnimationControls()

  useEffect(() => {
    
    if(isInView) {

     textanimation.set({ y: -20, opacity: 0})
     animation.set({ y: 20, opacity: 0})
     animation.start({y: 0, opacity: 1,
      transition: {
        duration: 1 
      }
    }),
    textanimation.start({y: 0, opacity: 1,
      transition: {
        duration: 1 
      }
    })
    
    }
 
  }, [isInView])

  return (
    <section className='w-[100%] justify-items-center h-[100vh] bg-black  flex flex-col '>
    <div className='w-[100%] h-[80%] flex flex-row-reverse items-center px-9'>
   <div className='w-[50%] px-12'>
     <h3 className='font-mono text-blue-600'>Transfer and Buy</h3>
     <h2 className='font-sans font-semibold text-[2.7rem]'>Buy and transfer in a click!</h2>
     <p className='flex flex-row mt-6 items-center font-sans'> <FaUnlock color='blue' className='mr-3' /> Secure and safe</p>
     <p className='font-sans flex items-center mt-3 flex-row'> <FaBitcoin color='blue' className='mr-3' />Send and receive crypto</p>
     <p className='font-sans flex items-center mt-3 flex-row'> <FaPiggyBank color='blue' className='mr-3' />Bank-grade encryption</p>
   </div>
   <div className='w-[50%]  rounded-xl p-24 h-[100%]'>
     <div className='flex items-center bg-[#ffffff40] p-5 rounded-xl justify-center h-[100%] w-[100%]'>
     <Image layout='responsive' height={600} width={300} src={`/buy.svg`} />
     </div>
   </div>
   </div>
    
   </section>
    // <section className='h-[100%] w-[100%] bg-[#90DAF9] text-white xl:flex xl:flex-row '>
        
    //      <div ref={ref} className='px-[5%] py-8 xl:bg-white xl:flex xl:flex-col xl:justify-center '>
    //       <motion.h3
    //       animation={textanimation}
    //       className='font-mono mb-3 text-[#1652f0] lg:text-[1.5rem] '>Talk to us</motion.h3>
    //      <motion.h1 
    //      animation={animation}
    //      className='text-black font-sans text-left leading-[2.5rem] text-[2rem] font-semibold lg:text-[3rem] xl:leading-[3.5rem]   xl:pr-[0%]'>
    //       Take control of your drop with scheduling.</motion.h1>
    //       <motion.p 
    //       animation={textanimation}
    //       className="font-sans text-black font-normal xl:pr-[0%] text-[#ffffff70] mt-4 xl:text-[1.5rem]">
    //         Use our tools to explore your ideas and make your vision come true. Then share your work easily.
    //       </motion.p>
    //      </div>
         
    //      <div className='h-[100%]  bg-[#90DAF9] flex justify-center w-[100%]'>
    //      <Image alt='calender' src="/beekreed.png" width={680} height={680} />
    //      </div>
        
         
    //    </section>
  )
}

export default Section7