import React from 'react'

function PageMetric() {
  return (
    <div className='xl:h-[100vh] h-[100%] flex flex-col justify-center items-center'>
        <div className='xl:px-[15%] px-[7%]'>
        <h3 className='font-sans font-medium xl:text-2xl text-center text-purple-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. 
       <span className='text-slate-400'> Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</span>
        </h3>
        </div>
        <div className='grid xl:grid-cols-3 gap-4 w-[100%] px-[10%] mt-[5rem]'>
        <div className='h-[100%] w-[100%]'>
          <h2 className='text-purple-900 text-[3rem] font-medium font-mono'>50%</h2>
          <p className='font-sans text-[#9e9e9e]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='h-[100%] w-[100%]'>
          <h2 className='text-purple-900 text-[3rem] font-medium font-mono'>856k</h2>
          <p className='font-sans text-[#9e9e9e]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='h-[100%] w-[100%]'>
          <h2 className='text-purple-900 text-[3rem] font-medium font-mono'>4min</h2>
          <p className='font-sans text-[#9e9e9e]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.</p>
        </div>
        </div>
        
    </div>
  )
}

export default PageMetric