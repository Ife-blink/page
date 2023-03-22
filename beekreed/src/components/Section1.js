import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import { FaTwitterSquare } from 'react-icons/fa'

function Section1() {
  
  useEffect(() => {
    import ('@dotlottie/player-component')
  })

  const Partner = ({logo}) => {
     return <div className='w-[12rem] h-[100%] bg-white border-[1px] border-purple-600 '>
     {logo}
   </div>
  }
  return (
    <section className='grid grid-cols-6 grid-row-3'>
      
       <div className='col-span-6 overflow-x-auto flex flex-row h-[6rem] mb-[4rem] w-[100%]'>
        <div className='flex flex-row justify-between w-[100%] px-[10%]'>
          <Image src="logo/logo1.svg" width={80} height={100} />
          <Image src="logo/logo2.svg" width={150} height={150} />
          <Image src="logo/logo3.svg" width={150} height={150} />
          <Image src="logo/logo4.svg" width={150} height={150} />
          <Image src="logo/logo5.svg" width={150} height={150} />
        {/* {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((pop) => {return <Partner logo={pop.logo} />})} */}
        </div>
       </div>
        <div className='col-span-4 pl-[5%] '>
        <h3 className='font-sans font-medium text-[2.2rem]'>"The synergy of <span className='text-purple-700'> human expertise </span> and emerging technology allows us to deliver custom experiences that boost our client's growth."</h3>
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
        <div className='col-span-3 mt-[3rem] flex '>
        <div className='w-[20rem] h-[17rem] flex flex-col justify-between text-white mr-[1rem] py-[4%] px-[5%] bg-black'>
          <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-col'>
          <h1 className='font-semibold font-sans text-[1.5rem] '>FX</h1>
          <h2 className='font-sans font-normal text-[#FFFFFF40]'>@a_ix_d</h2>
          </div>
          <FaTwitterSquare size={30} color="#00acee" />
          </div>
          <p className='font-normal font-sans mt-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada cursus hac sit sem enim, euismod. Libero lectus</p> 
        </div>
        <div className='w-[20rem] h-[17rem] flex flex-col justify-between text-white mr-[1rem] py-[4%] px-[5%] bg-black'>
          <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-col'>
          <h1 className='font-semibold font-sans text-[1.5rem] '>FX</h1>
          <h2 className='font-sans font-normal text-[#FFFFFF40]'>@a_ix_d</h2>
          </div>
          <FaTwitterSquare size={30} color="#00acee" />
          </div>
          <p className='font-normal font-sans mt-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada cursus hac sit sem enim, euismod. Libero lectus</p> 
        </div>
        </div>
        

        
        
        </section>
  )
}

export default Section1