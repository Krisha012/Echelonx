import React from 'react'
//------------ Import PriceData ------------ 
import { PriceData } from './PriceData'

const Price = () => {
    return (
        <React.Fragment>
            {/* --------------- START PRICE --------------- */}
            <section className='bg-gray-50 py-24' id='Price'>
                <div className='container'>
                    <div className='grid grid-cols-1 justify-items-center content-center'>
                        <div>
                            <h2>Our Pricing</h2>
                            <p className='lg:w-[65%] mx-auto mt-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 justify-items-center content-center mt-20'>
                        {
                            PriceData.map((e, index) => {
                                return (
                                    <div className={`bg-white p-10 w-full border shadow-lg rounded-2xl ${index % 2 === 0 ? "border-gray-200" : "border-blue-500 border-2"}`}>
                                        <div>
                                            <h4 className='font-primary font-bold text-2xl text-center'>{e.Heading}</h4>
                                        </div>
                                        <div className='text-center mt-5'>
                                            <h1 className='text-[40px] text-blue-500'><span className='text-xl'>$</span>{e.price}<span className='text-xl text-black-400'>/m</span></h1>
                                        </div>
                                        <div className='py-10 space-y-4'>
                                            <p className='text-[#777]'>Project: <span className='font-bold text-black-400'>{e.totalProject}</span></p>
                                            <p className='text-[#777]'>{e.Theme}</p>
                                            <p className='text-[#777]'>Support: <span className='font-bold text-black-400 uppercase '>{e.Support}</span></p>
                                            <p className='text-[#777]'>{e.Domin}</p>
                                            <p className='text-[#777]'>{e.Security}</p>
                                        </div>
                                        <button className='btn-primary block m-auto rounded-lg active:text-black-400 active:border-black-400 mt-6'>{e.btn}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/* --------------- END PRICE --------------- */}
        </React.Fragment>
    )
}

export default Price
