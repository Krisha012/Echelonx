import React from 'react'
//------------ Import Services Data ------------ 
import { ServicesData } from './ServicesData'

const Services = () => {
    return (
        <React.Fragment>
            {/* --------------- START SERVICES --------------- */}
            <section className='bg-gray-50 py-24' id='Services'>
                <div className='container'>
                    <div className='grid grid-cols-1 justify-items-center content-center'>
                        <div>
                            <h2>Our Services</h2>
                            <p className='lg:w-[65%] mx-auto mt-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                    {/*-------------- Start service box content --------------*/}
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 mt-20'>
                        {
                            ServicesData.map((e) => {
                                return (
                                    <div className='px-8 pb-8 border-dotted border border-gray-200 rounded-2xl'>
                                        <div className='flex justify-center items-center bg-blue-500 w-[100px] h-20 m-auto rounded-b-3xl'>
                                            {e.Logo}
                                        </div>
                                        <h5 className='font-bold text-xl text-center font-primary mt-7'>{e.Heding}</h5>
                                        <p className='my-5'>{e.Detail}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/*-------------- End service box content --------------*/}
                </div>
            </section>
            {/* --------------- END SERVICES --------------- */}
        </React.Fragment>
    )
}

export default Services
