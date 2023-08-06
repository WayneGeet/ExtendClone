import React from 'react'
import sign from "./logos/sign_red.png";
import signb from "./logos/sign_black.png";

const Loop = () => {
  return (
    <div className="border border-gray-300 rounded-md relative overflow-hidden lg:mx-auto lg:pb-10 ">
        <div className="grid grid-cols-3 grid-rows-4 grid-flow-col border-b border-l border-t border-gray-300 rounded-md w-fit 
        relative -right-20  overflow-hidden  h_loop mb-16 md:left-0 md:right-0">
            <div className="flex flex-col justify-start items-start px-2 gap-[2px] py-3">
                <p className="text-[0.8rem]">Hari Ambarasu</p>
                <small className="text-gray-500 text-[0.7rem]">hari@extend.app</small>
                <small className="text-red-500  text-[0.7rem] "><span className="inline-block w-[5px] h-[5px] bg-red-500 rounded-full mr-[3px] pb-[2px]">
                </span>3 fields</small>
            </div>
            <div className="flex flex-col justify-start items-start px-2 gap-[2px] py-3 bg-gray-200">
                <p className="text-[0.8rem]">Eli Badgio</p>
                <small className="text-gray-500 text-[0.7rem]">eli@extend.app</small>
                <small className="text-red-500  text-[0.7rem] "><span className="inline-block w-[5px] h-[5px] bg-red-500 rounded-full mr-[3px] pb-[2px]">
                </span>1 fields</small>
            </div>
            <div className="flex flex-col justify-start items-start px-2 gap-[2px] py-3 border-b border-gray-300">
                <p className="text-[0.8rem]">Kushal Byatnal</p>
                <small className="text-gray-500 text-[0.7rem]">kushal@extend.app</small>
                <small className="text-red-500  text-[0.7rem] "><span className="inline-block w-[5px] h-[5px] bg-red-500 rounded-full mr-[3px] pb-[2px]">
                </span>3 fields</small>
            </div>

            <div className="py-[5px] col-span-2 row-span-3 overflow-hidden pl-4 border-l border-b border-gray-300">
                <div className="relative top-5">
                    <p>Eli Badgio Eli@extend.app</p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-start gap-2 ">
                    <div className="flex flex-col gap-[2px] justify-start relative top-10 ">
                        <small className="text=[0.5rem]">submitted<span className="text-red-500 text-[0.6rem]">62% match</span></small>
                        <div className="bg-gray-100 px-7 py-2 w-40 border border-gray-200 rounded-sm">
                            <img src={sign} alt="signature" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[2px] justify-start relative top-10">
                        <small className="text=[0.5rem]">on file</small>
                        <div className="bg-gray-100 w-40 px-7 py-2 border border-gray-300 rounded-sm">
                            <img src={signb} alt="signb" />
                        </div>
                    </div>
                </div>

                <div className="col-span-3 bg-white lg:-mt-5 mr-4 items-end">
                    {/* <div className="bg-black rounded-lg px-4 py-[4px] text-white w-fit">Accept</div>
                    <div className="bg-gray-300 rounded-lg px-3 py-[3px] text-white w-fit">Deny</div> */}

                </div>
                
            </div>
        </div>

        <div className="flex flex-col justify-start mt-5">
            <h4 className="text-black font-semibold text-[0.8rem]">Human-in-the-loop confidence</h4>
            <small className="text-gray-600">Extend comes with built-in confidence scoring and human-in-the-loop
             flows so you can confidently deploy into production.</small>
        </div>
    </div>
  )
}

export default Loop