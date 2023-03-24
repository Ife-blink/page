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
    <section className='w-[100%]  justify-items-center bg-[#7c0eca] grid grid-cols-2 sm:flex flex-col-reverse'>
       <div className='grid grid-row-2 px-[5%] '>
       <Setion3util name={"Branding"}
        number={'1'} desc={"Working with startups to build memorable brands from the ground up or established businesses to refresh and modernize."}
       />
      <Setion3util 
       name={"Conversion growth"}
       number={'2'} 
       desc={"Uncovering and leveraging growth opportunities by analyzing insights, performing website updates and dynamically incorporating AI integrations for ambitious brands with big goals."} />
       </div>
       <div className='h-[100%] bg-black w-[100%] flex justify-center items-center sm: object-cover sm:h-[50%]'>
       <Image width={4000} height={5000} src='/mailchimp.jpg'/>
       </div>
      </section>
  )
}

export default Section3