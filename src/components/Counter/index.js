import React, { useState } from 'react'
//------------ Import Counter Data ------------ 
import { CounterData } from './CounterData'
//------------ Import CountUp and ScrollTrigger packag------------ 
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
    const [startCounter, setStartCounter] = useState(false);

    return (
        <React.Fragment>
            {/* --------------- START COUNTER --------------- */}
            <section className='bg-black-400 py-24'>
                <div className='container'>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-items-center content-center gap-6'>
                        {
                            CounterData.map((e) => {
                                return (
                                    <div className='w-full border border-dashed border-black-200 rounded-xl p-[24px]'>
                                        <div className='flex flex-row justify-center items-center mt-5'>
                                            <i>{e.icon}</i>
                                        </div>
                                        <div className='text-center mt-6'>
                                            <ScrollTrigger onEnter={() => setStartCounter(true)} onExit={() => setStartCounter(false)} >
                                                <h1 className='font-medium'>
                                                    {
                                                        startCounter && <CountUp start={e.start} end={e.count} />
                                                    }
                                                </h1>
                                            </ScrollTrigger>
                                            <p className='text-gray-100 mt-2'>{e.name}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/* --------------- START COUNTER --------------- */}
        </React.Fragment>
    )
}

export default Counter
