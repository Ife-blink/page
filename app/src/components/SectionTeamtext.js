import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';

function SectionTeamtext() { 

    const [currentIndex, setCurrentIndex] = useState(0);
    const names = ["dialogue.", "thrive.", "engage.", "explore.", "quality.", "feel."];
  
  
    useEffect(() => {
        for(let i = 0; i < Infinity; i++) {
            if (currentIndex === names.length - 1) {
                console.log("stopping");
                return;
              }
              const interval = setInterval(() => {
                const updatedData = currentIndex + 1;
                setCurrentIndex(updatedData);
              }, 1000);
          
              return () => clearInterval(interval);
        }
      
    }, [currentIndex]);
  

  return (
    <div className='h-[100%] text-black absolute z-1 flex items-center justify-center'>
    <h1 className='text-[3rem]'>{names[currentIndex]}</h1> 
    </div>
  )
}

export default SectionTeamtext