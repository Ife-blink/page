import React from 'react'
import Setion3util from './Setion3util'
import { useEffect } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

function Section3() {

  useEffect(() => {
    import ('@dotlottie/player-component')
  })

  return (
    <section className='w-[100%] px-[3%] py-[5%] bg-[#9a23f0] grid grid-cols-2 '>
       <div className='grid grid-row-3'>
       <Setion3util name={"Branding"} number={'1'} desc={"Working with startups to build memorable brands from the ground up or established businesses to refresh and modernize."} />
       <Setion3util name={"Web experiences"} number={'2'}  desc={"Designing and developing websites, micro-web applications, and Webflow e-commerce websites for the next generation of the web."} />
       <Setion3util name={"Conversion growth"} number={'2'}  desc={"Uncovering and leveraging growth opportunities by analyzing insights, performing website updates and dynamically incorporating AI integrations for ambitious brands with big goals."} />
       </div>
       <div className='h-[100%] w-[100%] flex justify-center items-center'>
       <dotlottie-player
  autoplay
  loop
  mode="normal"
  src="load2.lottie"
  style={{ height: '100%', width: '30rem' }}
 
>
</dotlottie-player>
       </div>
      </section>
  )
}

export default Section3