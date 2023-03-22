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
        visibleTwo: {x: "15rem", opacity: 1,
          transition:{ duration: 2, repeat: Infinity }
        },
        visibleThree: {x: "-15rem", opacity: 1,
          transition:{ duration: 2, repeat: Infinity }
        },
        visibleFour: {x: "-30rem", opacity: 1,
        transition:{ duration: 2, repeat: Infinity }
        },
        visibleFive: {x: "30rem", opacity: 1,
        transition:{ duration: 2, repeat: Infinity }
        },
      }

  return (
    <section className='h-[100vh] w-[100%] bg-black text-white'>

      
      <div className="w-[100%] h-[80%] py-[5%] overflow-hidden relative bg-purple-600 flex justify-center items-center">
      <motion.div 
        initial="hidden"
        animate="visibleFour"
        variants={picvariant}
        className=" absolute h-[20rem] w-[20rem] flex justify-center items-center z-3 ">
       <Image src="AnimationBlocks/pic1.svg" width={200} height={200} />
         </motion.div>
         <motion.div 
        initial="hidden"
        animate="visibleThree"
        variants={picvariant}
        className=" absolute h-[20rem] w-[20rem] flex justify-center items-center z-1 ">
        <Image src="AnimationBlocks/pic4.svg" width={200} height={200} />
         </motion.div>
        
        <motion.div
          initial="hidden"
          animate="visible"
         variants={picvariant}
        className=" absolute h-[20rem] w-[20rem] flex justify-center items-center z-2 ">
        <Image src="AnimationBlocks/pic3.svg" width={200} height={200} />
          </motion.div>
          <motion.div
          initial="hidden"
          animate="visibleFive"
         variants={picvariant}
        className=" h-[20rem] w-[20rem] flex justify-center items-center absolute z-4 ">
        <Image src="AnimationBlocks/pic5.svg" width={200} height={200} />
          </motion.div>

        <motion.div 
        initial="hidden"
        animate="visibleTwo"
        variants={picvariant}
        className=" h-[20rem] w-[20rem] flex justify-center items-center absolute z-0 ">
       <Image src="AnimationBlocks/pic2.svg" width={200} height={200} />
         </motion.div>
       
      </div>

        <div className="h-[20%] flex items-center flex-col justify-center text-center">
          <h2 className="font-sans font-semibold text-3xl text-white">
            Collaborative tools to design user experience
          </h2>
          <p className="font-sans font-normal text-gray-500">
            Use our tools to explore your ideas and make your vision come true. Then share your work easily.
          </p>
        </div>
 

       </section>
  )
}

export default Section6