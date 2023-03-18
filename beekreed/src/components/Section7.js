import React from 'react'
import { motion } from 'framer-motion'
import { Player } from '@lottiefiles/react-lottie-player'

function Section7() {

    const flipvariant = {
        hidden: { opacity: 0.3, y: 0},
        visible: {y: 0, opacity: 1,
          transition:{ duration: 3, repeat: Infinity }
        },
        hiddenTwo: { opacity: 0.3, y:0, x: "-3rem"},
        visibleTwo: {x: "3rem", opacity: [0.5,1],
          transition:{ duration: 2, repeat: Infinity }
        },
        hiddenThree: { opacity: 0.3, y:0, x: "3rem"},
        visibleThree: {x: "-3rem", opacity: [0.5,1],
          transition:{ duration: 2, repeat: Infinity }
      }
    }

  return (
    <section className='h-[100vh] w-[100%] bg-black text-white grid row-span-3'>
         <div 
         className='px-[2rem] py-[2rem] flex items-center'>
         <motion.h1 
         hidden="hiddenTwo"
         animate="visibleTwo"
         variants={flipvariant}
         className='font-sans font-normal text-[2rem]'>No bullish<span className='text-purple-500'>*</span>t. <br />
         Delivering <span className='text-purple-500'>[life-changing results]</span>
         </motion.h1>
         </div>
         <div className='flex flex-row justify-center '>
         {/* <div className='flex flex-row items-center'>
          <h3 className='font-sans font-normal text-[2rem]'>We help</h3>
         <div className='font-sans flex flex-row justify-start h-[3rem] w-[10rem] font-normal text-[2rem]  relative overflow-hidden'>
          < motion.div 
          initial={{y: '0rem'}}
          animate={{y: ['0rem','-3rem', '-6rem']}}
          transition={{duration: 2.5, delay: 2, repeat: Infinity}}
          className='grid grid-rows-3 ml-[0.4rem] absolute '>
            <h3>Brands</h3>
            <h3>Startups</h3>
            <h3>Individuals</h3>
          </motion.div>
          
          </div>
          </div> */}
        
         <dotlottie-player
         autoplay
         loop
         mode="normal"
         src="load2.lottie"
         style={{ height: '100%', width: '20rem', }}
         ></dotlottie-player>
         <Player
           autoplay
           loop
           src={"winners.json"}
           className="h-[100%] w-[20rem]"
         />
         
         

         </div>
         <motion.div 
         hidden="hiddenThree"
         animate="visibleThree"
         variants={flipvariant}
         className='px-[2rem] py-[2rem] flex items-center justify-end text-end'>
         <h1 className='font-sans font-normal text-[2rem]'>No bullsh<span className='text-green-500'>*</span>t. <br />
         Delivering <span className='text-green-500'>[life-changing results]</span>
         </h1>
         </motion.div>
       </section>
  )
}

export default Section7