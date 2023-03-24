import React from 'react'
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

function Hero1() {

  const textvariant = {
    hidden: { opacity: 0, y: "1rem"},
    visible: {y: 0, opacity: 1,
      transition:{ duration: 1, }
    },
    visibleTwo: {y: 0, opacity: 1,
      transition:{ duration: 1, delay: 0.3 }
    },
    visibleThree: {y: 0, opacity: 1,
      transition:{ duration: 1, delay: 0.6 }
    },
    visibleFour: {y: 0, opacity: 1,
      transition:{ duration: 1, delay: 0.9 }
    },
    visibleFive: {y: 0, opacity: 1,
      transition:{ duration: 1, delay: 1.2 }
    },
    hiddenTwo: { opacity: 0, y: "-1rem"},
    visibleSix: {y: 0, opacity: 1,
      transition:{ duration: 1, delay: 1.5}
    },
    hiddenThree: { opacity: 0, y: "1rem"},
    visibleSeven: {y: 0, opacity: 1,
      transition:{ duration: 1, delay: 1.8}
    },
    
  }

  return (
    <div className='font-sans p-5 text-white h-[100%] py-[20%] flex flex-col justify-center items-center bg-black md:px-[10%]'>
        <h3 className='font-mono text-purple-600 font-medium text-center '>Introducing</h3>
        <h1 className='items-center justify center font-semibold md:mt-3 text-center md:leading-[4rem] text-[2rem] md:text-[3.2rem]'>
        <motion.span
          initial="hidden"
          animate="visible"
          variants={textvariant}
          className="inline-block"
        >We design</motion.span> <motion.span
        initial="hidden"
          animate="visibleTwo"
          variants={textvariant}
          className="inline-block"
        >experiences</motion.span>
         <motion.span
         initial="hidden"
         animate="visibleThree"
         variants={textvariant}
         className="inline-block"
         >that enable
         </motion.span> <motion.span
        initial="hidden"
        animate="visibleFour"
        variants={textvariant}
        >
        people
        </motion.span> <motion.span
          initial="hidden"
        animate="visibleFive"
        variants={textvariant}
        className="inline-block "
        > feel</motion.span>
        </h1>
        <motion.p 
        initial="hiddenTwo"
        animate="visibleSix"
        variants={textvariant} 
        className='text-gray-400 px-1 mt-3 text-[1rem] text-center'>
         We empower our clients to refocus on the things that drive rapid and sustainable growth.
        </motion.p>
        <motion.button 
        initial="hiddenThree"
        animate="visibleSeven"
        variants={textvariant}
        className='bg-white text-black font-sans px-[10%] md:w-[40%] md:py-[0.7%] mt-[1.5rem] rounded-[5px] flex flex-row justify-center items-center sm:w-[100%] sm:py-[4%]'>
         <BsFillCalendarCheckFill /> <h1 className='ml-[0.7rem] font-medium sm:ml-[0.4rem]'>Let's talk shop</h1></motion.button>
    
        
    </div>
  )
}

export default Hero1