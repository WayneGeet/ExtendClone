import React from 'react'
import Workflows2 from "./Workflows2";
import Loop from "./Loop";
import Tools from "./Tools";
import Data from "./Data";


const Features = () => {
  return (
    <section>
        <div className="container">
            <div className="py-14 ">
                <div className="my-14">
                <small className="text-xs text-gray-600 font-light p-[2px] 
                border rounded-md border-gray-300 ">Features</small>
                </div>

                <div className="grid grid-cols-3 lg:grid-cols-2">
                    <div className="col-span-3 md:col-span-2 lg:col-span-1 lg:pr-5">
                        <p className="text-xl text-[#222] ">Intelligently process documents, emails, images, and any kind of unstructured data. 
                        <span className="text-gray-400">Bring powerful tools for extraction, classification, and analysis to your
                            hardest business problems.</span></p>
                    </div>
                </div>
                
                
            </div>

            <div className="">
                <div className="grid grid_auto_features gap-5 lg:py-10 lg:max-w-5xl mx-auto
                ">
                    <Tools/>
                    <Workflows2/>
                    <Loop/>
                    <Data/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features;
