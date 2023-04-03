import React from 'react'
import { IoMdClose } from 'react-icons/io'; 
import { motion } from 'framer-motion';


function Overlay({ close }) {
  return (
    <div className='h-[100vh] flex justify-end fixed z-10  w-[100vw]'>
        <div className='w-[100%] bg-[#ffffff40] h-[100%] font-sans '>
        
        <aside id="cta-button-sidebar" className="fixed top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="flex py-4 pr-6 bg-gray-50 justify-end items-center  text-sm text-gray-500  xl:hidden hover:bg-gray-100 ">
   
   <IoMdClose onClick={close} size={25} />
</div>
   <div className="h-[90vh] px-3 py-1 flex flex-col justify-between bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
               <span className="font-sans ">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
              <span className="flex-1 font-sans whitespace-nowrap">Kanban</span>
           </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
              <span className="flex-1 font-sans whitespace-nowrap">Inbox</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
              <span className="flex-1 font-sans whitespace-nowrap">Users</span>
            </a>
         </li>
         
      </ul>
      <div id="dropdown-cta" className="p-4 mb-2 rounded-lg bg-purple-200" role="alert">
         <div className="flex items-center mb-3">
            <span className="bg-orange-100 font-sans text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
            <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
                  <span className="font-sans sr-only">Close</span>
                  <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
         </div>
         <p className="mb-3 font-sans text-sm text-blue-800 ">
            Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
         </p>
         <a className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 font-sans dark:hover:text-blue-300" href="#">Turn new navigation off</a>
      </div>
   </div>
</aside>
        </div>
    </div>
  )
}

export default Overlay