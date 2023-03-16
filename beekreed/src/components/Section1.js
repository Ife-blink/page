import React from 'react'
import { useEffect } from 'react'

function Section1() {
  
  useEffect(() => {
    import ('@dotlottie/player-component')
  })

  return (
    <section className='grid grid-cols-6 py-[5%] grid-row-2'>
        <div className='col-span-4 pl-[5%] '>
        <h3 className='font-sans text-[2.2rem]'>The synergy of human expertise and emerging technology allows us to deliver custom experiences that boost our client's growth.</h3>
        </div>
        <div className='col-span-2'>

        </div>
        <div className='col-span-3 flex justify-center'>
        <dotlottie-player
        autoplay
        loop
        mode="normal"
        src="arrow.lottie"
        style={{ height: '100%', width: '30rem' }}
        >
</dotlottie-player>
        </div>
        <div className='col-span-3 mt-[3rem] flex jus'>
        <div className='w-[20rem] h-[20rem] text-white mr-[1rem] py-[4%] px-[3%] bg-black'>
          <h1 className='font-semibold font-sans text-[1.5rem] '>Web Design</h1>
          <p className='font-normal font-sans mt-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada cursus hac sit sem enim, euismod. Libero lectus</p> 
        </div>
        <div className='w-[20rem] h-[20rem] text-white py-[4%] px-[3%] bg-black'>
          <h1 className='font-semibold font-sans text-[1.5rem] '>Web Development</h1>
          <p className='font-normal font-sans mt-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada cursus hac sit sem enim, euismod. Libero lectus</p>
        </div>
        </div>
        

        
        
        </section>
  )
}

export default Section1