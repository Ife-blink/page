import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

function Section6() {

    const picvariant = {
        hidden: { opacity: 1, y: "3rem"},
        visible: {y: 0, opacity: 1,
          transition:{ duration: 2, repeat: Infinity }
        },
        hiddenTwo: { opacity: 1, x: 0},
        visibleTwo: {x: "40%", opacity: 1,
          transition:{ duration: 2, repeat: Infinity }
        },
        visibleThree: {x: "-40%", opacity: 1,
          transition:{ duration: 2, repeat: Infinity }
        },
        visibleFour: {x: "-80%", opacity: 1,
        transition:{ duration: 2, repeat: Infinity }
        },
        visibleFive: {x: "80%", opacity: 1,
        transition:{ duration: 2, repeat: Infinity }
        },
      }

  return (
    <section className='md:h-[100vh] sm:h-[70vh] w-[100%] bg-black pb-[10%] text-white'>

      
      <div className="w-[100%] sm:h-[40%] md:h-[70%] py-[5%] overflow-hidden relative bg-purple-600 flex justify-center items-center">
      <motion.div 
        initial="hidden"
        animate="visibleFour"
        variants={picvariant}
        className=" absolute md:h-[20rem] w-[20rem] flex justify-center items-center z-3 ">
       <Image src="AnimationBlocks/pic1.svg" className='sm:w-[6rem]' width={200} height={200} />
         </motion.div>
         <motion.div 
        initial="hidden"
        animate="visibleThree"
        variants={picvariant}
        className=" absolute md:h-[20rem] w-[20rem] flex justify-center items-center z-1 ">
        <Image src="AnimationBlocks/pic4.svg" className='sm:w-[6rem]' width={200} height={200} />
         </motion.div>
        
        <motion.div
          initial="hidden"
          animate="visible"
         variants={picvariant}
        className=" absolute md:h-[20rem] w-[20rem] flex justify-center items-center z-2 sm:h-[10rem]">
        <Image src="AnimationBlocks/pic3.svg" className='sm:w-[6rem]' width={200} height={200} />
          </motion.div>
          <motion.div
          initial="hidden"
          animate="visibleFive"
         variants={picvariant}
        className=" md:h-[20rem] w-[20rem] flex justify-center items-center absolute z-4 ">
        <Image src="AnimationBlocks/pic5.svg" className='sm:w-[6rem]' width={200} height={200} />
          </motion.div>

        <motion.div 
        initial="hidden"
        animate="visibleTwo"
        variants={picvariant}
        className=" md:h-[20rem] w-[20rem] flex justify-center items-center absolute z-0 ">
       <Image src="AnimationBlocks/pic2.svg" className='sm:w-[6rem]' width={200} height={200} />
         </motion.div>
       
      </div>

        <div className=" py-[10%] flex items-center flex-col justify-center text-center">
          <h2 className="font-sans font-semibold text-3xl text-white px-[5%] sm:text-[1.8rem]">
            Collaborative tools to design user experience
          </h2>
          <p className="font-sans font-normal text-[#ffffff70] px-[5%] sm:mt-[1rem]">
            Use our tools to explore your ideas and make your vision come true. Then share your work easily.
          </p>
        </div>
 

       </section>
  )
}

export default Section6