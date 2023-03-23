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

    const opacityvariant = {
      hidden: { opacity: 1, y: 0},
      visible: {y: 0, opacity: 0,
        transition:{ duration: 0.2, delay: 4 }
      },
      hiddenTwo: { opacity: 0 },
      visibleTwo: { opacity: 1,
        transition:{ duration: 7,  }
      },
      hiddenThree: { opacity: 0.3, y:0, x: "3rem"},
      visibleThree: {x: "-3rem", opacity: [0.5,1],
        transition:{ duration: 2, repeat: Infinity }
    }
  }

  return (
    <section className='h-[100%] w-[100%] bg-black text-white grid grid-rows-10 '>
         <div 
         className='px-[2rem] py-[2rem] flex items-center'>
         <motion.h1 
         hidden="hiddenTwo"
         animate="visibleTwo"
         variants={flipvariant}
         className='font-sans font-normal text-[2rem] sm:text-[1.8rem]'>No bullish<span className='text-purple-500'>*</span>t. <br />
         Delivering <span className='text-purple-500'>[life-changing results]</span>
         </motion.h1>
         </div>
         <div className='flex flex-row justify-center '>
         
        <div className='relative w-[100%] h-[70vh] flex justify-center sm:h-[50vh] '>
          <div
          // hidden="hiddenTwo"
          // animate="visibleTwo"
          // variants={opacityvariant}
           className='absolute z-3  p-0'>
         <dotlottie-player
         autoplay
         loop
         mode="normal"
         src="load2.lottie"
         style={{ height: '100%', width: '25rem', padding: 0, postion: "absolute" }}
         ></dotlottie-player>
         </div>
         <div className='absolute h-[100%] flex items-center z-5'>
         <motion.div
         initial="hidden"
         animate="visible"
         variants={opacityvariant}
         className='flex flex-row items-center'>
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
          </motion.div>
         </div>
         {/* <div className='absolute z-0'>
         <Player
           autoplay
           loop
           src={"winners.json"}
           className="h-[100%] w-[20rem]"
         />
         </div> */}
         </div>
         

         </div>
         <div 
         
         className='px-[2rem] py-[2rem] row-span-3 flex  justify-center text-center'>
         <h1 className='font-sans font-normal text-[2rem]'>Grow
         </h1>
         </div>
       </section>
  )
}

export default Section7