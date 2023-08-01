import manual from "./logos/manual.png";

const Workflows = () => {
  return (
    <section className="border border-gray-300 rounded-md shadow-sm shadow-gray-400 relative flex flex-col ">
        <div className="relative w-full dotted h-[76%]">
            <div className="grid grid-rows-2">
                <div className="border-b border-l left-1/3 border-black py-14 w-1/2 relative top-[18%] translate-y-1/2 -translate-x-1/3 gap-5"></div>
                <div className="border-b border-l left-1/3 border-black py-14 w-1/2 relative top-[18%] translate-y-1/2 -translate-x-1/3 gap-5"></div>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/3 -translate-y-1/2 gap-5 grid grid-rows-3 z-1">
                <div className="bg-white rounded-md border border-gray-300 border-opacity-70 pl-2 py-2 text-left w-[14rem] right-1/2 relative">
                    <code className="block text-[0.8rem] mb-[0.4rem]">Custom Extraction</code>
                    <code className="block w-fit text-[0.7rem] py-[2px] rounded-sm mb-1 px-[0.3rem] bg-gray-100 text-gray-700 ">has deductions</code>
                    <code className="block w-fit text-[0.7rem] py-[2px] rounded-sm mb-1 px-[0.3rem] bg-gray-100 text-gray-700 ">has overtime</code>
                </div>

                <div className="true bg-white rounded-md border border-gray-300 border-opacity-70 pl-2 py-2 text-left w-[14rem]">
                    <code className="block text-[0.8rem] mb-[0.4rem]"><span className="inline-block w-2 h-2 rounded-full"><img className="object-contain w-full" src={manual} alt="" /></span> Webhook</code>
                    <code className="block text-[0.7rem] py-[2px] rounded-sm mb-1 px-[0.3rem] text-gray-700"> updated user status to <span className="text-[0.7rem] py-[2px] rounded-sm px-[0.3rem] bg-gray-100 text-gray-700">updated</span></code>
                </div>
                <div className="false bg-white rounded-md border border-gray-300 border-opacity-70 pl-2 py-2 text-left w-[14rem]">
                    <code className="block text-[0.8rem] mb-[0.4rem]"><span className="inline-block w-2 h-2 rounded-full"><img className="object-contain w-full" src={manual} alt="" /></span> Manual Review</code>
                    <code className="block text-[0.7rem] py-[2px] rounded-sm mb-1 px-[0.3rem] text-gray-700 ">send messages in <span className="text-[0.7rem] py-[2px] rounded-sm px-[0.3rem] bg-gray-100 text-gray-700">#payroll-notifs</span></code>
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-start mt-5 px-5">
            <h4 className="text-black font-semibold text-[0.8rem]">Workflows that work the way you do</h4>
            <small className="text-gray-600">Create custom workflows that mirror your internal operations 
            and let them run on autopilot — no engineering resources required.</small>
          </div>

    </section>
  )
}

export default Workflows