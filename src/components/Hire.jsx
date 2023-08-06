import React from 'react'
import {FaArrowTrendUp} from "react-icons/fa6"

const Hire = () => {
  return (
    <article className="hidden cursor-pointer w-[20.2vw] fixed_div md:fixed top-5 right-5 border flex flex-col justify-center gap-5 border-gray-300 rounded-md px-3">
        <p className="text-[0.8rem] text-[#222] pointer-events-none pt-2">We're hiring! Come join us in to build the future of entreprise AI.</p>
        <div className="flex items-center justify-between mb-[4px]">
            <small className="text-gray-400 pointer-events-none ">July 10, 2023</small>
            <div className="icon_trend p-[5px] rounded-full bg-gray-300 text-white"><FaArrowTrendUp size={14}/></div>
        </div>
    </article>
  )
}

export default Hire