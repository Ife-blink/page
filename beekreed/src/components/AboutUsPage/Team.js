import React from 'react'
import Image from 'next/image'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Team() {
  return (
    <div className='h-[100%] w-[100%] mt-6 xl:mt-0 '>
     <div className='font-sans px-[5%]'>
        <h3 className='font-mono text-purple-600'>Our Team</h3>
        <h2 className='font-semibold text-[#181818] mt-3 text-[1.5rem] xl:text-[3rem]'>Meet our amazing team</h2>
        <p className='xl:pr-[50%] text-sm xl:text-lg mt-4 text-[#333333]'>Lorem ipsum dolor sit amet, consec adipis elit. Suspendisse varius enim in eros elementum tristique.</p>
     </div>
     <div className='grid xl:grid-cols-4 gap-6 xl:gap-0 h-[120%] mb-12 mt-6 px-[5%]'>
        <div className=' px-4  w-[100%]'>
          <div className='w-[100%] h-[19rem] relative'>
          <Image fill style={{objectFit:"cover"}} src={`http://source.unsplash.com/W12rukDSuxc`} />
          </div>
        <h4 className='font-sans text-[1.3rem] text-[#323b49] font-medium mt-4'>Charles.C</h4>
        <p className='font-sans text-[#7789a3] mt-4'>Lorem ipsum dolor sit amet</p>
        <div className='mt-6 flex flex-row'>
          <div className='h-[40px] w-[40px] flex  justify-center items-center bg-purple-700'>
            <FaLinkedinIn size={25} color='#FFFFFF' />
          </div>
          <div className='h-[40px] ml-2 w-[40px] flex justify-center items-center bg-purple-700'>
            <FaTwitter size={25} color='#FFFFFF' />
          </div>
        </div>
        </div>

        <div className=' px-4  w-[100%]'>
          <div className='w-[100%] h-[19rem] relative'>
          <Image fill style={{objectFit:"cover"}} src={`http://source.unsplash.com/W12rukDSuxc`} />
          </div>
        <h4 className='font-sans text-[1.3rem] text-[#323b49] font-medium mt-4'>Charles.C</h4>
        <p className='font-sans text-[#7789a3] mt-4'>Lorem ipsum dolor sit amet</p>
        <div className='mt-6 flex flex-row'>
          <div className='h-[40px] w-[40px] flex  justify-center items-center bg-purple-700'>
            <FaLinkedinIn size={25} color='#FFFFFF' />
          </div>
          <div className='h-[40px] ml-2 w-[40px] flex justify-center items-center bg-purple-700'>
            <FaTwitter size={25} color='#FFFFFF' />
          </div>
        </div>
        </div>

        <div className=' px-4  w-[100%]'>
          <div className='w-[100%] h-[19rem] relative'>
          <Image fill style={{objectFit:"cover"}} src={`http://source.unsplash.com/W12rukDSuxc`} />
          </div>
        <h4 className='font-sans text-[1.3rem] text-[#323b49] font-medium mt-4'>Charles.C</h4>
        <p className='font-sans text-[#7789a3] mt-4'>Lorem ipsum dolor sit amet</p>
        <div className='mt-6 flex flex-row'>
          <div className='h-[40px] w-[40px] flex  justify-center items-center bg-purple-700'>
            <FaLinkedinIn size={25} color='#FFFFFF' />
          </div>
          <div className='h-[40px] ml-2 w-[40px] flex justify-center items-center bg-purple-700'>
            <FaTwitter size={25} color='#FFFFFF' />
          </div>
        </div>
        </div>

        <div className=' px-4  w-[100%]'>
          <div className='w-[100%] h-[19rem] relative'>
          <Image fill style={{objectFit:"cover"}} src={`http://source.unsplash.com/W12rukDSuxc`} />
          </div>
        <h4 className='font-sans text-[1.3rem] text-[#323b49] font-medium mt-4'>Charles.C</h4>
        <p className='font-sans text-[#7789a3] mt-4'>Lorem ipsum dolor sit amet</p>
        <div className='mt-6 flex flex-row'>
          <div className='h-[40px] w-[40px] flex  justify-center items-center bg-purple-700'>
            <FaLinkedinIn size={25} color='#FFFFFF' />
          </div>
          <div className='h-[40px] ml-2 w-[40px] flex justify-center items-center bg-purple-700'>
            <FaTwitter size={25} color='#FFFFFF' />
          </div>
        </div>
        </div>

     </div>
    </div>
  )
}

export default Team