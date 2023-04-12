import React from 'react'
import Image from 'next/image'

function HeroImage() {
  return (
    <div className='flex py-8 justify-center'>
        <Image width={800} height={300} src={`http://source.unsplash.com/zoCDWPuiRuA`} />
    </div>
  )
}

export default HeroImage