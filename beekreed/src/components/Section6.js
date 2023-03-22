import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

function Section6() {

    const picvariant = {
        // hidden: { opacity: 1, y: "2rem"},
        // visible: {y: 0, opacity: 1,
        //   transition:{ duration: 3, repeat: Infinity }
        // },
        // hiddenTwo: { opacity: 0.3, y:0, x: 0},
        // visibleTwo: {x: "15rem", opacity: 1,
        //   transition:{ duration: 3, repeat: Infinity }
        // },
        // visibleThree: {x: "-15rem", opacity: 1,
        //   transition:{ duration: 3, repeat: Infinity }
        // }
      }

  return (
    <section className='h-[100vh] w-[100%] bg-black text-white'>

      
      <div className="w-[100%]  h-[80%] py-[5%] overflow-hidden relative bg-green-400 flex justify-center items-center">
      <motion.div 
        initial="hidden"
        animate="visibleThree"
        variants={picvariant}
        className=" h-[20rem] w-[20rem] flex justify-center items-center z-0 bg-blue-600">
       <Image src="AnimationBlocks/pic3.svg" width={200} height={200} />
         </motion.div>
         <motion.div 
        initial="hidden"
        animate="visibleThree"
        variants={picvariant}
        className=" h-[20rem] w-[20rem] flex justify-center items-center z-0 bg-blue-600">
       <Image src="AnimationBlocks/pic5.svg" width={200} height={200} />
         </motion.div>
        
        <motion.div
          initial="hidden"
          animate="visible"
         variants={picvariant}
        className=" h-[20rem] w-[20rem] flex justify-center items-center absolute z-2  bg-purple-600">
        <Image src="AnimationBlocks/pic1.svg" width={200} height={200} />
          </motion.div>
          <motion.div
          initial="hidden"
          animate="visible"
         variants={picvariant}
        className=" h-[20rem] w-[20rem] flex justify-center items-center absolute z-2  bg-purple-600">
        <Image src="AnimationBlocks/pic4.svg" width={200} height={200} />
          </motion.div>

        <motion.div 
        initial="hiddenTwo"
        animate="visibleTwo"
        variants={picvariant}
        className=" h-[20rem] w-[20rem] flex justify-center items-center absolute z-0 bg-blue-600">
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