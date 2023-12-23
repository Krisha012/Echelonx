import React from 'react'
//------------ Import Testimonials data and Testimonials logoSymbol ------------ 
import { Testimonials, logoSymbol } from './ClientsData'

const Client = () => {
    return (
        <React.Fragment>
            {/* --------------- START CLIENTS --------------- */}
            <section className='py-24 bg-black-400' id='Client'>
                <div className='container'>
                    <div className='grid grid-cols-1 justify-items-center content-center'>
                        <div>
                            <h2 className='text-white'>Our Client's</h2>
                            <p className='text-gray-100 lg:w-[65%] mx-auto mt-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                    {/* --------------- Start testimonials box --------------- */}
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center content-center gap-6 mt-20'>
                        {
                            Testimonials.map((e) => {
                                return (
                                    <div className='md:p-5 p-3 border border-dashed border-black-200 rounded-xl'>
                                        <div className='w-1/12 mx-auto'>
                                            {e.icon}
                                        </div>
                                        <p className='text-gray-200 mt-6'>{e.client_review}</p>
                                        <p className='text-[17px] text-gray-200 mt-7'>{e.client_name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* --------------- End testimonials box --------------- */}

                    {/* --------------- Start testimonials logoSymbol --------------- */}
                    <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 justify-items-center content-center gap-3 mt-16'>
                        {
                            logoSymbol.map((e) => {
                                return (
                                    <img src={e.img} alt="" className='block opacity-30 hover:opacity-75 hover:transition hover:duration-1000 cursor-pointer hover:ease-in-out bg-no-repeat bg-cover max-h-[100px] m-auto' />
                                )
                            })
                        }
                    </div>
                    {/* --------------- End testimonials logoSymbol --------------- */}
                </div>
            </section>
            {/* --------------- START CLIENTS --------------- */}
        </React.Fragment>
    )
}

export default Client
