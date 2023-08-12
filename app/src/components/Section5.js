import React from 'react'
import { useRouter } from 'next/router';
import { BsArrowRight } from 'react-icons/bs';

function Section5() {

  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push(`https://calendly.com/officialbeekreed/30min`)
  }

  return (
    <section className=' w-[100%] h-[50vh] p-[2%] bg-white '>
        <div className='bg-blue-600 px-[30%] h-[100%] py-[3rem] flex flex-col justify-center items-center rounded-xl'>
        <h1 className='font-sans text-4xl flex text-center justify-center font-semibold'>
          Start building your crypto portfolio on quantum
        </h1>
        <button className='bg-white px-3 py-2 text-blue-600 font-sans rounded-full mt-6 '>Create an account</button>
        </div>
      </section>
  )
}

export default Section5