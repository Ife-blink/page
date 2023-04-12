import React from 'react'
import Image from 'next/image'
import Setion3util from './Setion3util'
import { useEffect, useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

function Section3() {

  useEffect(() => {
    import ('@dotlottie/player-component')
  })

  return (
    <section className='w-[100%] justify-items-center bg-[#7c0eca]  flex flex-col-reverse '>
       <div className=' h-[100%] text-white px-[5%] xl:py-[5%]'>
       <Setion3util name={"About Beekreed"}
        number={'01'} desc={"We help startups balance and build long lasting yadiyadiaya memorable brands from the ground up or established businesses to refresh and modernize."}
       />
       <h3 className='font-sans mt-4 font-semibold text-[1.5rem] xl:text-[2rem] lg:mt-8'>So why Beekreed</h3>
       <p className='font-sans font-light xl:text-[1.5rem] mt-3 mb-10'>Working with startups to build memorable brands from the ground up or established businesses to refresh and modernize.</p>
      </div>
       <div className='h-[100%] p-4 bg-black w-[100%] flex flex-col-reverse justify-center items-center sm: object-cover sm:h-[50%]'>
       
       <Player
           autoplay
           loop
           src={"winners.json"}
           className="h-[100%] w-[20rem] xl:w-[30rem]"
         />
       </div>
      </section>
  )
}

export default Section3