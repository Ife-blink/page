import React from 'react'
import { useRouter } from 'next/router';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

function Section5() {

  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push(`https://calendly.com/officialbeekreed/30min`)
  }

  return (
    <section className=' w-[100%] h-[50vh] p-[5%] lg:p-[2%] bg-white '>
        <div className='bg-blue-600 px-[10%] lg:px-[30%] h-[100%] py-[3rem] flex flex-col justify-center items-center rounded-xl'>
        <h1 className='font-sans text-xl xl:text-4xl flex text-center justify-center font-semibold'>
          Start building your crypto portfolio on quantum
        </h1>
        <Link href='https://app.quantum-xch.com/SignUp' passHref={true}>
        <button className='bg-white px-3 py-2 text-blue-600 font-sans rounded-full mt-6 '>Create an account</button>
        </Link>
       
        </div>
      </section>
  )
}

export default Section5