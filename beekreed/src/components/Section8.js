import React from 'react'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import TextLoop from "react-text-loop";
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
    <div ref={ref} className='text-black bg-[#f1f1f1] hidden pb-[5%] w-[100%]'>
      <div className='flex flex-col items-center justify-center text-center  py-[3rem] text-[3rem]'>
        <h3 className='font-mono text-[1.3rem] text-orange-600'>Who we are</h3>
      <h1 className='font-semibold font-sans'>We are the best choice for your <br /> <span className='text-purple-600'>
      <TextLoop>
                    <span>Branding</span>
                    <span className='text-green-400'>Social Ads</span>
                    <span className='text-orange-500'>Digital Marketing</span>
                </TextLoop></span></h1>
      </div>
        
        <div  className='flex flex-row justify-between px-[3%]'>
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
            
        </div>
    </div>
  )
}

export default Section8