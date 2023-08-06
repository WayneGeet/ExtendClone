import React from 'react';
import logo from "./logos/logo.png";
import gallery from "./logos/gallery.png"; 
import pen from "./logos/pen.png"; 
import csv from "./logos/csv.png"; 
import pdf from "./logos/pdf.png"; 

const Data = () => {
  return (
    <section className='border border-gray-300 rounded-md shadow-sm shadow-gray-400 relative flex flex-col'>
        <div className="flex items-center justify-center h-[76%] py-10">
            <div className="outer relative border border-gray-300 rounded-full border-dashed w-[18rem] h-[18rem] py-10 px-10 
            flex items-center justify-center">
                <div className="w-[13rem] h-[13rem] rounded-full border border-dashed border-gray-300 flex
                justify-center items-center relative">
                    <img className="w-16 " src={logo} alt="logo" />
                    <img className="absolute p-2 bg-white right-0 top-1/2 w-10 h-10 translate-x-1/2 -translate-y-1/2" src={pdf} alt="" />
                    <img className="absolute p-2 bg-white left-0 top-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2" src={csv} alt="" />
                    <img className="absolute p-2 bg-white left-1/2 top-0  w-10 h-10 -translate-x-1/2 -translate-y-1/2" src={pen} alt="" />
                    <img className="absolute p-2 bg-white left-1/2 bottom-0 w-10 -translate-x-1/2 h-10 translate-y-1/2" src={gallery} alt="" />
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-start mt-5 px-5">
            <h4 className="text-black font-semibold text-[0.8rem]">Unlock any data type</h4>
            <small className="text-gray-600">PDF, CSV, XLSX, IMG, HTML. You name it, Extend handles it.
             Even those messy handwritten doctor notes.</small>
        </div>
    </section>
  )
}

export default Data