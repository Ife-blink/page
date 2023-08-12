import React from 'react'

function Footer() {
  return (
    <footer className="mt-auto font-sans w-full bg-white max-w-[100rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
   
  <div className="text-center">
    <div>
      <a className="flex-none text-xl font-semibold  text-white" aria-label="Brand">Quantum</a>
    </div>
    

    <div className="my-3">
      <p className="text-gray-500">We're part of the <a className="font-semibold text-purple-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400" href="#">Quantum</a> family.</p>
      <p className="text-gray-500">© Quantum. 2022 QTM. All rights reserved.</p>
    </div>

    
    
    
  </div>
  
</footer>
  )
}

export default Footer