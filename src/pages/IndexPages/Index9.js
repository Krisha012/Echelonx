import React from 'react'
//------------ Import TypeAnimation packag------------ 
import { TypeAnimation } from "react-type-animation";

const Index9 = () => {
    return (
        <React.Fragment>
            {/*----------------- START HOME -------------------*/}
            <section className='bg-hero-pattern relative h-full w-full bg-fixed bg-center bg-cover bg-no-repeat z-30' id='Home'>
                <div className='bg-black-400 opacity-80 absolute w-full h-screen top-0'></div>
                <div className='container'>
                    <div className='grid grid-cols-1 h-screen justify-items-center content-center'>
                        <h1 className='md:text-[44px] z-50'>
                            <span>
                                <TypeAnimation
                                    sequence={[
                                        "We Are Creative Landing Page Template",
                                        2000,
                                        "Professional Landing Page Template",
                                        2000,
                                        "We Are Creative And Modern Design",
                                        2000,
                                    ]}
                                    speed={5}
                                    repeat={Infinity}
                                />
                            </span>
                        </h1>
                        <p className='text-gray-100 lg:w-[37%] mt-10 mx-auto z-50'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout look like readable English.</p>
                        <div className='flex justify-center items-center md:flex-row flex-col gap-3 mt-8 z-50'>
                            <button className='btn-primary'>Learn More</button>
                            <span className='text-white font-primary'>OR</span>
                            <button className='btn-secondary'>Watch Video</button>
                        </div>
                    </div>
                </div>
            </section>
            {/*----------------- END HOME -------------------*/}
        </React.Fragment>
    )
}

export default Index9
