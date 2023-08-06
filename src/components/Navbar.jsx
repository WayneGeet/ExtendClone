// "use client"
import {useState} from "react";
import React from 'react'
import logo from "./logos/logo.png";
import {BiMenu} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";
// framer motion
import {motion, AnimatePresence,useMotionValue, useTransform } from "framer-motion";

const Navbar = () => {
  const x = useMotionValue(10)
  const y = useTransform(x, value => Math.sin(value / 10) * 50)

  const containerVariants = {
    hidden:{},
    visible:{
      
    }
  }

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1,
      transition: { 
        duration: 0.3,
      when:"beforeChildren" } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
  };
  
  const [isHid, setIsHid] = useState(false);
  return (
    
    <nav className="flex justify-center items-center fixed top-[10px] left-1/2 -translate-x-1/2 z-50 w-full
    px-10 lg:w-fit"> 
      <AnimatePresence>
        <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        layout
        transition={{
          layout:{duration:0.5, type:"spring"}
        }}
        style={{backdropFilter:"blur(5px)",
        height:isHid ? "45px" : "150px"
      }}
     
        className=" shadow-sm shadow-gray-400 rounded-xl px-4 py-2
        flex lg:flex-row  flex-col items-start lg:items-center gap-2 lg:gap-7 w-full mx-auto">

            <motion.div layout className="flex justify-between items-center w-full">
              <div className=" flex items-center gap-2">
                <div className="w-4 h-4 flex items-center">
                  <img className="object-contain" src={logo} alt="logo" />
                </div>
                <h2 className="font-bold text-sm text-black">Extend</h2>
              </div>
              <div className="ml-auto">
                {isHid ? 
                <div onClick={()=>{
                  setIsHid(false)}} className="ml-auto p-2 bg-red-400 z-60">
                  <BiMenu size={16}/>
                </div> :
                <div onClick={()=>{
                  setIsHid(true)
                  }} className="ml-auto p-2 bg-red-400 z-60">
                  <AiOutlineClose size={16}/>
                </div>}
              </div>
            </motion.div>

            <AnimatePresence>
          {!isHid && (
            <motion.ul
              layout
              key="menu"
              className="flex lg:flex-row flex-col lg:gap-7 lg:items-center gap-2"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              
            >
              <li className="text-gray-500 hover:text-gray-900 text-sm cursor-pointer">Investors</li>
              <li className="text-gray-500 hover:text-gray-900 text-sm cursor-pointer">Features</li>
              <li className="text-gray-500 hover:text-gray-900 text-sm cursor-pointer">Security</li>
            </motion.ul>
          )}
        </AnimatePresence>

            

            <button type="button" className="hidden lg:flex text-sm bg-[#222] rounded-xl cursor-pointer px-3 py-2 text-white">Get Started</button>

        </motion.div>
      </AnimatePresence>
    </nav>
    
  )
}

export default Navbar