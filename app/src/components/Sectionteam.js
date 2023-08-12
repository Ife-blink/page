import React,{ useRef, useState, useEffect } from 'react'
import { motion, useAnimationControls, useInView } from 'framer-motion'
import SectionTeamtext from './SectionTeamtext'

function Sectionteam() {

  const ref = useRef(null)
  const isInView = useInView(ref)
  const animation = useAnimationControls()
  const animationOne = useAnimationControls()

  const [currentIndex, setCurrentIndex] = useState(0);
  const names = ["dialogue.", "thrive.", "engage.", "explore.", "quality.", "feel."];


  useEffect(() => {
      for(let i = 0; i < Infinity; i++) {
          if (currentIndex === names.length - 1) {
              console.log("stopping");
              return;
            }
            const interval = setInterval(() => {
              const updatedData = currentIndex + 1;
              setCurrentIndex(updatedData);
            }, 1000);
        
            return () => clearInterval(interval);
      }
    
  }, [currentIndex]);

    if(isInView) {
      animation.set({ scale: 0.8})
      animation.start({scale: [1.1, 0.8],
       transition: {
         duration: 2, 
       }
     })
     }

    

  return (
    <div className=' w-[100%] text-black flex flex-col pb-[5%]'>
      <h3 className='font-mono px-[5%] mt-7 text-purple-600 lg:text-[2rem] '>Talk to us</h3>
        <div ref={ref} className='w-[100%] flex flex-row justify-between mt-7 mb-[10%] px-[3%]'>
        <motion.div
        initial="hidden"
        animate={animation}
        className='h-[7rem] w-[7rem] xl:h-[10rem] xl:w-[10rem] bg-green-200 rounded-[50%]'></motion.div>
        <motion.div
        initial="hidden"
        animate="visibleOne"
      
        className='h-[7rem] w-[7rem] xl:h-[10rem] xl:w-[10rem] bg-purple-200 rounded-[50%]'></motion.div>
         <motion.div
        initial="hidden"
        animate="visibleTwo"
      
        className='h-[7rem] w-[7rem] xl:h-[10rem] xl:w-[10rem] bg-blue-200 rounded-[50%]'></motion.div>
        <motion.div
        initial="hidden"
        animate="visibleThree"
      
        className='h-[7rem] w-[7rem] xl:h-[10rem] xl:w-[10rem] bg-red-200 rounded-[50%]'></motion.div>
        
        </div>
        {/* <div className='px-[5%] xl:flex xl:flex-col xl:items-center'>
        <p className='font-sans text-[1.8rem]'>"Jitter removes the need to reply on our design team to edit
            the content of our video"
        </p>
        <h3 className='font-sans mt-4 font-medium text-[2rem]'>Federico Pascal, <br /> Marketing Lead</h3>
        </div> */}
       <div className='h-[100%] text-black absolute z-1 flex items-center justify-center'>
    <h1 className='text-[3rem]'>{names[currentIndex]}</h1> 
    </div>
    
    </div>
  )
}

export default Sectionteam