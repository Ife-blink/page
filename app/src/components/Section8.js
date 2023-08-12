import React from 'react'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
// import TextLoop from "react-text-loop";
import Link from 'next/link';
import { motion, useScroll,
  useMotionValueEvent,
  useInView, 
  useAnimationControls,
  delay } from "framer-motion";

function Section8() {

  const ref = useRef(null)
  const isInView = useInView(ref)
  const animation = useAnimationControls()
  const animationTwo = useAnimationControls()

  useEffect(() => {
    
    if(isInView) {

      animationTwo.set({ y: -30, opacity: 0.5})
     animation.set({ y: 30, opacity: 0.5})
     animation.start({y: 0, opacity: 1,
      transition: {
        duration: 1, delay: 0.5
      }
    }),
    animationTwo.start({y: 0, opacity: 1,
      transition: {
        duration: 1, delay: 0.5
      }
    })
    
    }
 
  }, [isInView])

  return (
    <div ref={ref} className='text-black lg:block hidden bg-[#f1f1f1] h-[100vh] w-[100%]'>
      <div className='flex  text-white flex-col items-center justify-center text-center h-[100%] w-[50%] bg-black py-[3rem] text-[3rem]'>
      <h1 className='font-sans font-medium leading-[3.2rem] px-6 text-left'>Earn up to $100 dollars worth of crypto on quantum</h1>
      </div>
        
        {/* <div  className='flex flex-row justify-between px-[3%]'>
            <motion.div
            animate={animation}
            className='h-[80%] mt-8 w-[24%] bg-black rounded-[20px] overflow-hidden'>
            <Image layout='responsive' height={600} width={300} src={`http://source.unsplash.com/IeWqFDcOz5E`} />
            </motion.div>
            <motion.div 
            animate={animationTwo}
            className='h-[100%] w-[24%] bg-black rounded-[20px] relative overflow-hidden'>
            <Image layout='responsive' height={600} width={300} src={`http://source.unsplash.com/qj15uNotnH0`} />
            </motion.div>
            <motion.div 
            animate={animation}
            className='h-[80%] mt-8 w-[24%] bg-black rounded-[20px] overflow-hidden'>
            <Image layout='responsive' height={600} width={300} src={`http://source.unsplash.com/4YMrFvN45L4`} />
            </motion.div>
            <motion.div 
            animate={animationTwo}
            className='h-[80%] w-[24%] bg-black rounded-[20px] overflow-hidden'>
            <Image layout='responsive' height={600} width={300} src={`http://source.unsplash.com/csJt89dL9pE`} />
            </motion.div>
            
        </div> */}
    </div>
  )
}

export default Section8