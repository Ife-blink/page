import React from 'react'
import Image from 'next/image'
import Setion3util from './Setion3util'
import { useEffect, useState } from 'react'
import { BsShieldFillCheck } from 'react-icons/bs';
import { FaRocket } from 'react-icons/fa'
import { Player } from '@lottiefiles/react-lottie-player'

function Section3() {

  useEffect(() => {
    import ('@dotlottie/player-component')
  })

  return (
    <section className='w-[100%] justify-items-center py-5 lg:py-0 h-[100vh] bg-black  flex flex-col '>
       <div className='w-[100%] hidden lg:flex flex-col'>
        <h5 className='flex justify-center font-mono'>Features</h5>
        <h2 className='lg:flex py-5 lg:py-0 justify-center hidden  font-sans text-semibold text-3xl'>Our features</h2>
       </div>
       <div className='w-[100%] h-[80%] flex flex-col lg:flex-row items-center px-9'>
      <div className='lg:w-[50%] w-[100%] px-0 lg:px-12'>
        <h3 className='font-mono text-blue-600'>Swap</h3>
        <h2 className='font-sans font-semibold text-[1.9rem] lg:text-[2.7rem]'>Swap. Anytime. <br/> Anywhere</h2>
        <p className='flex flex-row mt-6 items-center font-sans'> <BsShieldFillCheck color='blue' className='mr-3' /> You and your data remains anonymous</p>
        <p className='font-sans flex items-center mt-3 flex-row'> <FaRocket color='blue' className='mr-3' /> Fast swaps. Fast gains</p>
      </div>
      <div className='lg:w-[50%] mt-8 lg:mt-0 lg:p-24 h-[100%]'>
        <div className='flex items-center bg-[#ffffff30] rounded-xl justify-center h-[100%] w-[100%]'>
        <Image layout='responsive' height={600} width={300} src={`/swap.svg`} />
        </div>
      </div>
      </div>
       
      </section>
  )
}

export default Section3