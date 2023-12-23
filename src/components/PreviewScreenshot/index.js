import React from 'react'
//------------ Import Screenshot data ------------ 
import ScreenshotData from './ScreenshotData'
//------------ Import react router dom------------ 
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css';

const Screenshot = () => {
    return (
        <React.Fragment>
            {/* --------------- START DEMO --------------- */}
            <section className='bg-black-400 py-24' id='demo'>
                <div className='container'>
                    <div className='grid grid-cols-1 justify-items-center content-center' data-aos="zoom-in" data-aos-duration="3000">
                        <h2 className='text-white'>Landing Pages</h2>
                        <p className='lg:w-[35%] mx-auto text-lg text-gray-100 mt-6'>Due to its widespread use as filler text for layouts, non-readability is of great importance.</p>
                    </div>
                </div>
                <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-items-center content-center px-3 gap-6 mt-20'>
                    {
                        ScreenshotData.map((e) => {
                            return (
                                <div data-aos="fade-up" data-aos-duration="3000">
                                    <div className='p-2.5 bg-black-300 rounded-xl'>
                                        <Link to={e.path} target="_blank">
                                            <img src={e.img} alt="" className='bg-cover bg-no-repeat bg-center' />
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            {/* --------------- START DEMO --------------- */}
        </React.Fragment>
    )
}

export default Screenshot
