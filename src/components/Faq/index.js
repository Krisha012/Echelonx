import React from 'react'
//------------ Import Faq Data ------------ 
import { FaqData } from './FaqData'

const Faq = () => {
    return (
        <React.Fragment>
            {/* --------------- START FAQ --------------- */}
            <section className='py-24' id='FAQ'>
                <div className='container'>
                    <div className='grid grid-cols-1 justify-items-center content-center'>
                        <div>
                            <h2>Frequently Asked Questions</h2>
                            <p className='lg:w-[65%] mx-auto mt-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center content-center mt-20 gap-7'>
                        {
                            FaqData.map((e) => {
                                return (
                                    <div>
                                        <div className='text-4xl' >
                                            {e.icon}
                                        </div>
                                        <h5 className='font-primary font-bold text-lg mt-3'>{e.title}</h5>
                                        <p className='text-[15px] text-left mt-3'>{e.content}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/* --------------- END FAQ --------------- */}
        </React.Fragment>
    )
}

export default Faq
