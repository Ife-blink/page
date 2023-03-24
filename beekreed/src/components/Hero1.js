import React from 'react'
import { BsFillCalendarCheckFill } from 'react-icons/bs';

function Hero1() {
  return (
    <div className='font-sans p-5 text-white h-[100%] py-[20%] flex flex-col justify-center items-center bg-black md:px-[10%]'>
        <h3 className='font-mono text-purple-600 font-medium text-center '>Introducing</h3>
        <h1 className='items-center justify center font-semibold md:mt-3 text-center md:leading-[4rem] text-[2rem] md:text-[3.2rem]'>An agency that check <span className=' text-green-400 '>explores</span>  you feel again</h1>
        <p className='text-gray-400 px-1 mt-3 text-[1rem] text-center'>
         We empower our clients to refocus on the things that drive rapid and sustainable growth.
        </p>
        <button 
        // initial="hiddenThree"
        // animate="visibleSeven"
        // variants={textvariant}
        className='bg-white text-black font-sans px-[10%] md:w-[40%] md:py-[0.7%] mt-[1.5rem] rounded-[5px] flex flex-row justify-center items-center sm:w-[100%] sm:py-[4%]'>
         <BsFillCalendarCheckFill /> <h1 className='ml-[0.7rem] font-medium sm:ml-[0.4rem]'>Let's talk shop</h1></button>
    
        
    </div>
  )
}

export default Hero1