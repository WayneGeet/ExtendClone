import React from 'react'

const Enterprise = () => {
    const items = [
        {title:"On-Prem Deployment", content:"Deploy Extend on-premises entirely within your own cloud."},
        {title:"SOC 2", content:"Extend is compliant with SOC2 policies (report on request)."},
        {title:"Data Protection", content:"Your data is always secure, encrypted, and never used for training purposes. Extend integrates with Azure OpenAI instances for additional protection."},
        {title:"Security", content:"Extend comes with audit logs, granular permissions, and custom data retention policies to ensure compliance and security every step of the way."}
    ]
  return (
    <section className="">
        <div className="container rounded-md py-10 border border-gray-300 shadow-sm shadow-gray-300 ">
            <div className="max-w-2xl mx-auto ">
                <div className="pb-14 text-center">
                    <h2 className="text-2xl font-normal ">Enterprise Ready</h2>
                </div>
                <div className="lg:grid_auto grid w-full gap-5 grid-cols-1 items-center justify-center lg:gap-4 lg:px-10 ">
                    {items.map(({title, content}, i) => {
                        return(
                            <div key={i} className="mx-auto w-1/2 lg:w-full px-5 py-3 rounded-lg
                            shadow-md shadow-gray-300">
                                <h5 className="text-[#222] text-[0.8rem] font-semibold pb-2">{title}</h5>
                                <p className="text-[#222] text-[0.8rem]">{content}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    </section>
  )
}

export default Enterprise