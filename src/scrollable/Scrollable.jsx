import imgs from './Image'

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
function Scrollable() {
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

  }, [width]);
  return (
   <div className='container'>
   <motion.h4 className='text-bold text-2xl'
   initial={{x:'-100vw'}}
    animate={{x:0}}
    transition={{
      duration:1,
      type:'spring',
      stiffness:120,
      damping:30

        }}
   
   >Feel the power of Gig Pawa</motion.h4>
   <motion.div ref={carousel} className='overflow-hidden rounded-md' whileTap={{cursor:'grabbing'}}>
   <motion.div drag='x' dragConstraints={{right:0, left: -width}} className='flex cursor-[grab]'>
   
      {imgs.map((image, index)=>{
        return(
          <motion.div className='min-h-[40rem] min-w-[30rem] p-[40px] overflow-hidden' key={image}>
          <img src={image} className='h-[100%] w-[100%] rounded-[2rem]' alt={index}  />  
          </motion.div>
        )
      })}
   </motion.div> 

   </motion.div>
   
   
   </div>
  
  );
}

export default Scrollable;
