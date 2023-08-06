import React from 'react'
import manual from "./logos/manual.png"

const Workflows2 = () => {
  return (
    <section className="border border-gray-300 rounded-md shadow-sm shadow-gray-400 relative h-full flex flex-col justify-center">
        <div className="dotted h-full overflow-hidden ">
            <div className="w-fit relative grid grid-rows-3 lg:m-auto pt-20 lg:top-1/2 lg:-translate-y-1/2 md:left-[5rem]">
                <div className="border-l border-b border-black relative">
                    <div className="absolute bottom-2/3 -left-1/4 bg-white rounded-md border border-gray-300 border-opacity-70 pl-2 py-2 text-left w-[14rem] ">
                        <code className="block text-[0.8rem] mb-[0.4rem]">Custom Extraction</code>
                        <code className="block w-fit text-[0.7rem] py-[2px] rounded-sm mb-1 px-[0.3rem] bg-gray-100 text-gray-700 ">has deductions</code>
                        <code className="block w-fit text-[0.7rem] py-[2px] rounded-sm mb-1 px-[0.3rem] bg-gray-100 text-gray-700 ">has overtime</code>
                    </div>
                </div>

                <div className="border-l border-b border-black relative py-1">
                    <div className="absolute bottom-1/2 left-1/3 true bg-white rounded-md border border-gray-300 border-opacity-70 pl-2 py-2 text-left w-[14rem]">
                        <code className="block text-[0.8rem] mb-[0.4rem]"><span className="inline-block w-2 h-2 rounded-full"><img className="object-contain w-full" src={manual} alt="" /></span> Webhook</code>
                        <code className="block text-[0.7rem] py-[2px] rounded-sm mb-1 px-[0.3rem] text-gray-700"> updated user status to <span className="text-[0.7rem] py-[2px] rounded-sm px-[0.3rem] bg-gray-100 text-gray-700">updated</span></code>
                    </div>
                </div>

                <div className="border-none relative py-1">
                    <div className="absolute bottom-1/2 left-1/3 false bg-white rounded-md border border-gray-300 border-opacity-70 pl-2 py-2 text-left w-[14rem]">
                        <code className="block text-[0.8rem] mb-[0.4rem]"><span className="inline-block w-2 h-2 rounded-full"><img className="object-contain w-full" src={manual} alt="" /></span> Manual Review</code>
                        <code className="block text-[0.7rem] py-[2px] rounded-sm mb-1 px-[0.3rem] text-gray-700 ">send messages in <span className="text-[0.7rem] py-[2px] rounded-sm px-[0.3rem] bg-gray-100 text-gray-700">#payroll-notifs</span></code>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-start mt-5 px-5 pb-10">
            <h4 className="text-black font-semibold text-[0.8rem]">Workflows that work the way you do</h4>
            <small className="text-gray-600">Create custom workflows that mirror your internal operations 
            and let them run on autopilot — no engineering resources required.</small>
        </div>
    </section>
  )
}

export default Workflows2