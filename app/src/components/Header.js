import React from 'react'
import { useRouter } from 'next/router';
import { TbMenu } from 'react-icons/tb';
import { Navbar, Link } from "@nextui-org/react";

function Header({ open }) {
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push(`https://calendly.com/officialbeekreed/30min`)
  }
  const handleAbout = (e) => {
    e.preventDefault()
    router.push(`/AboutUs`)
  }
  const handleBlog = (e) => {
    e.preventDefault()
    router.push(`https://blog-beekreed-7t2p.vercel.app`)
  }
  return (
    <div className='w-[100%] text-white xl:text-[1.7rem] border-b-2 sticky top-0 bg-black border-[#00000005]'>
       <div className='p-[1rem] mx-auto w-[90%] flex justify-between items-center'>
       <h1 className='border-black font-sans font-semibold px-[1rem] border-[3px]'>Quantum.</h1>
       {/* <div className='w-[30%]  xl:flex flex-row lg:text-[0.7rem] xl:text-[1.1rem] justify-between items-center font-sans font-medium hidden'>
       <button className='hover:text-purple-600'>Services</button>
       <button className='hover:text-purple-600' onClick={handleAbout}>About us</button>
       <button className='hover:text-purple-600' onClick={handleBlog} >Blog</button>
       <button onClick={handleClick} className='border--600 border-2 rounded-[0.1rem] flex justify-center items-center ml-3 px-4 py-3 hover:bg-white hover:text-purple-600'>Talk to us </button> 
       </div> */}
       <div className='xl:hidden' onClick={open} >
      
       </div>
       </div>
       </div>
  )
}

export default Header