import React from 'react'
import Image from 'next/image'

function Value() {
  return (
    <div className='xl:h-[100vh] h-[100%] w-[100%] mt-6 xl:mt-0'>
     <div className='font-sans px-[5%]'>
        <h3 className='font-mono text-purple-600'>Our Values</h3>
        <h2 className='font-semibold text-[#181818] mt-3 text-[1.5rem] xl:text-[3rem]'>The values behind our company</h2>
        <p className='xl:pr-[50%] text-sm xl:text-lg mt-4 text-[#333333]'>Lorem ipsum dolor sit amet, consec adipis elit. Suspendisse varius enim in eros elementum tristique.</p>
     </div>
     <div className='grid xl:grid-cols-4 mt-6 px-[5%]'>
        <div className='bg-[#e0e0e0] px-4 py-6 h-[100%] w-[100%]'>
        <Image height={50} width={50} src='gridIcon.svg' />
        <h4 className='font-sans text-[#7789a3]'>Values that drive us</h4>
        <h4 className='font-sans text-[1.3rem] text-[#323b49] font-medium mt-4'>Commitment</h4>
        <p className='font-sans text-[#7789a3] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
        <div className='bg-purple-500 px-4 py-6 h-[100%] w-[100%]'>
        <Image height={50} width={50} src='gridIcon2.svg' />
        <h4 className='font-sans text-[#e4e4e4]'>Values that drive us</h4>
        <h4 className='font-sans text-[1.3rem] text-white font-medium mt-4'>Teamwork</h4>
        <p className='font-sans text-[#e4e4e4] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
        <div className='bg-purple-600 px-4 py-6 h-[100%] w-[100%]'>
        <Image height={50} width={50} src='gridIcon3.svg' />
        <h4 className='font-sans text-[#e4e4e4]'>Values that drive us</h4>
        <h4 className='font-sans text-[1.3rem] text-white font-medium mt-4'>Accountability</h4>
        <p className='font-sans text-[#e4e4e4] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
        <div className='bg-purple-700 px-4 py-6 h-[100%] w-[100%]'>
        <Image height={50} width={50} src='gridIcon4.svg' />
        <h4 className='font-sans text-[#e4e4e4]'>Values that drive us</h4>
        <h4 className='font-sans text-[1.3rem] text-white font-medium mt-4'>Innovation</h4>
        <p className='font-sans text-[#e4e4e4] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>

     </div>
    </div>
  )
}

export default Value