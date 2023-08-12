import React from 'react'
import Image from 'next/image'

function HeroImage() {
  return (
    <div className='flex xl:py-8 xl:p-0 justify-center p-4'>
        <Image width={800} height={300} src={`http://source.unsplash.com/zoCDWPuiRuA`} />
    </div>
  )
}

export default HeroImage