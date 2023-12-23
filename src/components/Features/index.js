import React from 'react'
//------------ Import Feture Data ------------ 
import { FetureData } from './FeaturesData'

const Feature = () => {
    return (
        <React.Fragment>
            {/* --------------- START FEATURES --------------- */}
            <section className='py-24' id='Features'>
                <div className='container'>
                    <div className='grid grid-cols-1 justify-items-center content-center'>
                        <div>
                            <h2>Our Features</h2>
                            <p className='lg:w-[65%] mx-auto mt-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                    <div>
                        {
                            FetureData.map((e, index) => {
                                return (
                                    <div className='grid lg:grid-cols-2 grid-cols-1 justify-items-center content-center gap-3 mt-20 '>
                                        <div className={`px-2  ${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                                            <img src={e.Images} alt="" className='bg-no-repeat bg-cover h-full' />
                                        </div>
                                        <div className={`flex flex-col justify-center px-2 ${index % 2 === 0 ? '' : 'order-1'}`}>
                                            <div className='bg-blue-100 w-[70px] h-[70px] p-5 rounded-full'>
                                                {e.Icon}
                                            </div>
                                            <h3 className='font-primary font-bold mt-6 text-2xl leading-7'>{e.Heading}</h3>
                                            <p className='md:w-[73%] text-lg text-left mt-5'>{e.Detail}</p>
                                            <div className='mt-6'>
                                                <div className='flex flex-row items-center gap-2'>
                                                    <i> {e.listIcon}</i>
                                                    <p>{e.list1}</p>
                                                </div>
                                                <div className='flex flex-row items-center gap-2'>
                                                    <i> {e.listIcon}</i>
                                                    <p>{e.list2}</p>
                                                </div>
                                                <div className='flex flex-row items-center gap-2'>
                                                    <i> {e.listIcon}</i>
                                                    <p>{e.list3}</p>
                                                </div>
                                                <button className='btn-primary active:text-black-400 active:border-black-400 mt-6'>{e.btn}</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/* --------------- END FEATURES  --------------- */}
        </React.Fragment>
    )
}

export default Feature
