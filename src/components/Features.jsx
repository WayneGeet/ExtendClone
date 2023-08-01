import React from 'react'
import Workflows from "./Workflows";
import Loop from "./Loop";
import Tools from "./Tools"

const Features = () => {
  return (
    <section>
        <div className="container">
            <div className="py-14 w-2/5">
                <div className="my-14">
                <small className="text-xs text-gray-600 font-light p-[2px] 
                border rounded-md border-gray-300 ">Features</small>
                </div>
                
                <p className="text-xl text-[#222] ">Intelligently process documents, emails, images, and any kind of unstructured data. 
                <span className="text-gray-400">Bring powerful tools for extraction, classification, and analysis to your
                         hardest business problems.</span></p>
            </div>

            <div className="features">
                <div className="grid grid_auto_features gap-5 py-10 max-w-5xl mx-auto">
                    <Tools/>
                    <Workflows/>
                    <Loop/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features;
