import React from 'react'
import { motion } from 'framer-motion'
import { Player } from '@lottiefiles/react-lottie-player'
import Image from 'next/image'

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
      hiddenTwo: {opacity: 0 },
      visibleTwo: { opacity: 0,
        transition:{ duration: 0.2, repeat: Infinity }
      },
      hiddenThree: { opacity: 0.3, y:0, x: "3rem"},
      visibleThree: {x: "-3rem", opacity: [0.5,1],
        transition:{ duration: 2, repeat: Infinity }
    }
  }

  return (
    <section className='h-[100%] w-[100%] bg-[#90DAF9] text-white  '>
        
         <div className='px-[5%] py-8'>
          <h3 className='font-mono mb-3 text-[#1652f0] lg:text-[1.5rem] '>Talk to us</h3>
         <h1 className='text-black font-sans text-left leading-[2.5rem] text-[2rem] font-semibold lg:text-[3rem] xl:leading-[3.5rem]   xl:pr-[50%]'>
          Take control of your drop with scheduling.</h1>
          <p className="font-sans text-black font-normal text-[#ffffff70] mt-4 xl:text-[1.5rem]">
            Use our tools to explore your ideas and make your vision come true. Then share your work easily.
          </p>
         </div>
         
         <div className='h-[100%]  bg-[#90DAF9] flex justify-center w-[100%]'>
         <Image src="/beekreed.png" width={680} height={680} />
         </div>
        
         
       </section>
  )
}

export default Section7