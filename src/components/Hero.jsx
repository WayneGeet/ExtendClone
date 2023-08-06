import React from 'react';
import {motion} from "framer-motion";



const Hero = () => {
  return (
        <div className="flex flex-col items-center lg:gap-5 w-full md:w-1/2 lg:w-2/3 gap-5">
            <motion.h1
            initial={{opacity:0, y:-20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.5}} className="text-[1.7rem] md:text-[1.8rem] lg:text-[2.5rem] leading-tight font-normal text-[#222] text-center">AI-Powered Workflows for Unstructured Data</motion.h1>
            <motion.p
            initial={{opacity:0, y:-20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.5}} className="text-gray-600 text-center px-4">Intelligent data extraction and automation tools built for modern enterprises</motion.p>
            <button
            nitial={{opacity:0, y:-20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.5}}type="button" className="mt-2 text-sm bg-[#222] rounded-xl cursor-pointer px-7 py-2 text-white">Get Started</button>
        </div>
  )
}

export default Hero