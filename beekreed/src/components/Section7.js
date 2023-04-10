import React, {useRef, useEffect} from 'react'
import { motion, useAnimationControls, useInView } from 'framer-motion'
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
    <section className='h-[100%] w-[100%] bg-[#90DAF9] text-white xl:flex xl:flex-row '>
        
         <div ref={ref} className='px-[5%] py-8 xl:bg-white xl:flex xl:flex-col xl:justify-center '>
          <motion.h3
          animation={textanimation}
          className='font-mono mb-3 text-[#1652f0] lg:text-[1.5rem] '>Talk to us</motion.h3>
         <motion.h1 
         animation={animation}
         className='text-black font-sans text-left leading-[2.5rem] text-[2rem] font-semibold lg:text-[3rem] xl:leading-[3.5rem]   xl:pr-[0%]'>
          Take control of your drop with scheduling.</motion.h1>
          <motion.p 
          animation={textanimation}
          className="font-sans text-black font-normal xl:pr-[0%] text-[#ffffff70] mt-4 xl:text-[1.5rem]">
            Use our tools to explore your ideas and make your vision come true. Then share your work easily.
          </motion.p>
         </div>
         
         <div className='h-[100%]  bg-[#90DAF9] flex justify-center w-[100%]'>
         <Image alt='calender' src="/beekreed.png" width={680} height={680} />
         </div>
        
         
       </section>
  )
}

export default Section7