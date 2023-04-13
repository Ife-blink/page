import React from 'react'

function Footer() {

  const handleClick = (e) => {
    e.preventDefault()
    router.push(`https://calendly.com/officialbeekreed/30min`)
  }

  return (
    <div className='h-[100%] py-[10%] bg-black w-[100%] flex flex-col justify-center items-center'>
    <h3 className='text-white font-sans xl:px-[20%] text-center px-[7%] text-[2rem] xl:leading-[5.5rem] xl:text-[5rem]'>We dream big. But you will dream bigger!</h3>
    <p className='xl:text-[#e4e4e4] text-[#e4e4e4cc] px-[10%] font-sans text-center mt-6 xl:px-[30%]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <button onClick={handleClick} className='bg-purple-600 font-sans text-white mt-8 rounded-[0.1rem] flex justify-center items-center ml-3 px-4 py-3'>Talk to us </button> 
    </div>
  )
}

export default Footer
