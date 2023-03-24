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
    <section className='w-[100%] h-[100%] justify-items-center bg-[#7c0eca] grid grid-cols-2 sm:flex flex-col-reverse'>
       <div className='grid grid-row-2 text-white px-[5%] '>
       <Setion3util name={"About Beekreed"}
        number={'01'} desc={"Working with startups to build memorable brands from the ground up or established businesses to refresh and modernize."}
       />
       <h3 className='font-sans mt-4 font-semibold text-[1.5rem]'>So why Beekreed</h3>
       <p className='font-sans font-light mt-3 mb-10'>Working with startups to build memorable brands from the ground up or established businesses to refresh and modernize.</p>
      </div>
       <div className='h-[100%] p-4 bg-black w-[100%] flex justify-center items-center sm: object-cover sm:h-[50%]'>
       <Image width={4000} height={5000} src='/mailchimp.jpg'/>
       </div>
      </section>
  )
}

export default Section3