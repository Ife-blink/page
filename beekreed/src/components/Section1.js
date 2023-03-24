import React from 'react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { FaTwitterSquare } from 'react-icons/fa'
import { motion, useInView } from 'framer-motion'
import dynamic from 'next/dynamic'

function Section1() {

  const DynamicTweet = dynamic(() => import('react-tweet-card'), {
    loading: () => <p>Loading...</p>,
    ssr: false
  })
  
  useEffect(() => {
    import ('@dotlottie/player-component')
  })

  useEffect(() => {
    if (isInView == true ) {
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
    }
  })

  

  const ref = useRef(null)
  const isInView = useInView(ref)
 
 
  return (
    <section className='flex pb-4 flex-col'>
      
       {/* <div className='col-span-6 overflow-x-auto flex flex-row mt-4 mb-[4rem] w-[100%]'>
        <div className='flex md:flex-row flex-wrap justify-center items-center md:justify-between w-[100%] md:px-[10%]'>
          <Image src="logo/logo1.svg" className='h-[1.5rem]' width={100} height={100} />
          <Image src="logo/logo2.svg" className='h-[1.5rem]' width={150} height={150} />
          <Image src="logo/logo3.svg" className='h-[1.5rem]' width={150} height={150} />
          <Image src="logo/logo4.svg" className='h-[1.5rem]' width={150} height={150} />
          <Image src="logo/logo5.svg" className='h-[1.5rem]' width={150} height={150} />
        
        </div>
       </div> */}

        <div className='col-span-4 w-[100%] px-4 py-8 text-black'>
        <h3 className='font-mono mb-3 text-purple-600'>Talk to us</h3>
        <motion.h3
        initial="hiddenThree"
        animate="visibleThree"
        ref={ref} className='font-sans font-medium text-[1.4rem]'>
          The synergy of <span className='text-purple-700'> human expertise </span> and emerging technology allows us to deliver custom experiences that boost our client's growth.</motion.h3>
        </div>

        
        
        <div className='mt-[3rem]  flex justify-center flex-wrap overflow-auto'>
        <div className='w-[20rem] h-[13rem] flex flex-col items-center justify-between text-white py-[4%] px-[5%] sm:w-[60rem]'>
        <DynamicTweet
    author={{
      name: 'hatsune mitski (zeph)',
      username: 'zephanijong',
      image:
        'https://pbs.twimg.com/profile_images/1605512789107286016/keR9YPE2_400x400.jpg',
      isVerified: true, // try replacing this with "isProtected"
    }}
    tweet={`if she's your girl why does she follow me on spotify`}
    time={new Date(2022, 9, 10, 0, 52)}
    source="Twitter for iPhone"
    permalink="https://twitter.com/zephanijong/status/1579243456869781505"
    fitInsideContainer
    theme="dim" 
  /></div>
        <div className='w-[20rem] h-[13rem] flex flex-col justify-between text-white py-[4%] px-[5%] sm:w-[60rem]'>
        <DynamicTweet
    author={{
      name: 'hatsune mitski (zeph)',
      username: 'zephanijong',
      image:
        'https://pbs.twimg.com/profile_images/1605512789107286016/keR9YPE2_400x400.jpg',
      isVerified: true, // try replacing this with "isProtected"
    }}
    tweet={`if she's your girl why does she follow me on spotify`}
    time={new Date(2022, 9, 10, 0, 52)}
    source="Twitter for iPhone"
    permalink="https://twitter.com/zephanijong/status/1579243456869781505"
    fitInsideContainer
    theme="dim" 
  />
  </div>
        </div>
        

        
        
        </section>
  )
}

export default Section1