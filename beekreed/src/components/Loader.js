import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';

function Loader() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const names = ["dialogue.", "thrive.", "engage.", "explore.", "quality.", "feel."];


  useEffect(() => {
    if (currentIndex === names.length - 1) {
      console.log("stopping");
      return;
    }
    const interval = setInterval(() => {
      const updatedData = currentIndex + 1;
      setCurrentIndex(updatedData);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);

    
  return (
    <div className='h-[100vh] bg-black text-white overflow-hidden relative flex justify-center items-center text-[6rem] font-sans font-bold'>
     <motion.div
     initial={{scale: "0%"}}
     animate={{scale: "100%"}}
     transition={{duration:0.8, delay: 6 }}
     className='absolute bg-white rounded-[50%] z-2 h-[150%] w-[150%]'></motion.div>  
     <h1 className='absolute z-1'>{names[currentIndex]}</h1> 
    </div>
  )
}

export default Loader