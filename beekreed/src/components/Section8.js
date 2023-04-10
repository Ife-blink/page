import React from 'react'
import Image from 'next/image'

function Section8() {
  return (
    <div className='text-black h-[100vh] w-[100%]'>
        <h1 className='font-semibold font-sans'>We help kini pe</h1>
        <div className='flex flex-row justify-between px-[5%]'>
            <div className='h-[80%] w-[20%] bg-black rounded-[20px] overflow-hidden'>
            <Image layout='responsive' height={600} width={300} src={`http://source.unsplash.com/IeWqFDcOz5E`} />
            </div>
            <div className='h-[100%] w-[20%] bg-black rounded-[20px] relative overflow-hidden'>
            <Image layout='responsive' fill src={`http://source.unsplash.com/qj15uNotnH0`} />
            </div>
            <div className='h-[80%] w-[20%] bg-black rounded-[20px] overflow-hidden'>
            <Image layout='responsive' height={600} width={300} src={`http://source.unsplash.com/4YMrFvN45L4`} />
            </div>
            <div className='h-[80%] w-[20%] bg-black rounded-[20px] overflow-hidden'>
            <Image layout='responsive' height={600} width={300} src={`http://source.unsplash.com/csJt89dL9pE`} />
            </div>
            
        </div>
    </div>
  )
}

export default Section8