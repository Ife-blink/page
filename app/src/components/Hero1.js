import React from 'react'
import { useRouter } from 'next/router'
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Hero1() {

  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push(`https://calendly.com/officialbeekreed/30min`)
  }

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
    hiddenFour: { opacity: 0, y: "-1rem"},
    visibleEight: {y: 0, opacity: 1,
      transition:{ duration: 1, delay: 1.5}
    },
    
  }

  return (
    <div className='font-sans p-5 text-white h-[100%] py-[20%] xl:py-[10%] flex flex-col justify-center items-center bg-black md:px-[10%]'>
        <motion.h3
        initial="hiddenFour"
        animate="visibleEight"
        variants={textvariant}
        className='font-mono text-blue-600 font-medium text-center '>Introducing</motion.h3>
        <h1 className='items-center justify center font-semibold md:mt-3 text-center xl:text-[4rem] md:leading-[4rem] text-[2rem] md:text-[3.2rem]'>
        <motion.span
          initial="hidden"
          animate="visible"
          variants={textvariant}
          className="inline-block"
        >The most</motion.span> <motion.span
        initial="hidden"
          animate="visibleTwo"
          variants={textvariant}
          className="inline-block"
        >intuitive</motion.span> <motion.span
         initial="hidden"
         animate="visibleThree"
         variants={textvariant}
         className="inline-block"
         >way to buy, sell
         </motion.span> <motion.span
        initial="hidden"
        animate="visibleFour"
        variants={textvariant}
        >
        and trade
        </motion.span> <motion.span
          initial="hidden"
        animate="visibleFive"
        variants={textvariant}
        className="inline-block "
        > crypto</motion.span>
        </h1>
        <motion.p 
        initial="hiddenTwo"
        animate="visibleSix"
        variants={textvariant} 
        className='text-gray-400 px-1 mt-3 text-[1rem] text-center xl:text-[1.5rem] xl:px-[10%] xl:mt-8'>
         Get started with the most accessible and secure platform to buy, sell, trade, and earn cryptocurrencies.
        </motion.p>
        <motion.div 
        initial="hiddenThree"
        animate="visibleSeven"
        variants={textvariant}
        
        className='mt-[1.5rem] rounded-[5px] flex flex-row justify-center items-center '>
          <Link href='https://app.quantum-xch.com/SignUp' passHref={true}>
          <button className='bg-blue-600  flex justify-center items-center rounded-full mr-3  px-4 py-3'>Get Started</button>
          </Link>

          <Link href='https://app.quantum-xch.com/Login' passHref={true}>
          <button onClick={handleClick} className='border-blue-600 border-2 rounded-full flex justify-center items-center ml-3 px-4 py-3'>Register</button>
          </Link>
        
        
         
         </motion.div>
    
        
    </div>
  )
}

export default Hero1