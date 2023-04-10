import React from 'react'
import Image from 'next/image'
import TextLoop from "react-text-loop";
import Link from 'next/link';

function Section8() {
  return (
    <div className='text-black h-[100vh] w-[100%]'>
      <div className='flex justify-center text-center  py-[3rem] text-[3rem]'>
      <h1 className='font-semibold font-sans'>We are the best choice for your <span className='text-purple-600'>
      <TextLoop>
                    <span>Branding</span>
                    <span className='text-green-400'>Social Ads</span>
                    <span className='text-orange-400'>Digital Marketing</span>
                </TextLoop></span></h1>
      </div>
        
        <div className='flex flex-row justify-between px-[3%]'>
            <div className='h-[80%] mt-8 w-[24%] bg-black rounded-[20px] overflow-hidden'>
            <Image layout='responsive' height={600} width={300} src={`http://source.unsplash.com/IeWqFDcOz5E`} />
            </div>
            <div className='h-[100%] w-[24%] bg-black rounded-[20px] relative overflow-hidden'>
            <Image layout='responsive'height={600} width={300} src={`http://source.unsplash.com/qj15uNotnH0`} />
            </div>
            <div className='h-[80%] mt-8 w-[24%] bg-black rounded-[20px] overflow-hidden'>
            <Image layout='responsive' height={600} width={300} src={`http://source.unsplash.com/4YMrFvN45L4`} />
            </div>
            <div className='h-[80%] w-[24%] bg-black rounded-[20px] overflow-hidden'>
            <Image layout='responsive' height={600} width={300} src={`http://source.unsplash.com/csJt89dL9pE`} />
            </div>
            
        </div>
    </div>
  )
}

export default Section8