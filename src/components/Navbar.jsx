import React from 'react'
import logo from "./logos/logo.png"
const Navbar = () => {
  return (
    <nav className="flex justify-center items-center fixed top-[10px] left-1/2 -translate-x-1/2 ">
        <div className="blurry shadow-sm shadow-gray-400 rounded-xl px-4 py-2
        flex items-center gap-7">

            <div className="logo flex items-center gap-2">
              <div className="w-4 h-4 flex items-center">
                <img className="object-contain" src={logo} alt="logo" />
              </div>
              <h2 className="font-bold text-sm text-black">Extend</h2>
            </div>
            <ul className="flex gap-7 items-center">
                <li className="text-gray-500 hover:text-gray-900 text-sm cursor-pointer">Investors</li>
                <li className="text-gray-500 hover:text-gray-900 text-sm cursor-pointer">Features</li>
                <li className="text-gray-500 hover:text-gray-900 text-sm cursor-pointer">Security</li>
            </ul>
            <button type="button" className="text-sm bg-[#222] rounded-xl cursor-pointer px-3 py-2 text-white">Get Started</button>
        </div>
    </nav>
  )
}

export default Navbar