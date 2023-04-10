import React from 'react'
import Image from 'next/image'

function Section8() {
  return (
    <div className='text-black h-[100vh] w-[100%]'>
        <h1 className='font-semibold font-sans'>We help kini pe</h1>
        <div>
            <div className='h-[80%] w-[20%]'>
            <Image fill src={`http://source.unsplash.com/IeWqFDcOz5E`} />
            </div>
        </div>
    </div>
  )
}

export default Section8