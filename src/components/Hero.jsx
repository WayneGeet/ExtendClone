import React from 'react';
import {motion} from "framer-motion";



const Hero = () => {
  return (
    <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col items-center gap-5 w-2/5">
            <motion.h1
            initial={{opacity:0, y:-20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.5}} className="text-[2.5rem] leading-tight font-normal text-[#222] text-center">AI-Powered Workflows for Unstructured Data</motion.h1>
            <motion.p
            initial={{opacity:0, y:-20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.5}} className="text-gray-600 text-center px-4">Intelligent data extraction and automation tools built for modern enterprises</motion.p>
            <button
            nitial={{opacity:0, y:-20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.5}}type="button" className="mt-7 text-sm bg-[#222] rounded-xl cursor-pointer px-5 py-2 text-white">Get Started</button>
        </div>
    </div>
  )
}

export default Hero