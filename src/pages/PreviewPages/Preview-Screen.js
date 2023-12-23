import React from 'react'
//------------ Import react-icons ------------ 
import { AiOutlineArrowDown } from 'react-icons/ai'
import 'aos/dist/aos.css';

const PreviewScreen = () => {
    return (
        <React.Fragment>
            {/*----------------- START HOME -------------------*/}
            <section className='bg-black-400' id='PreviewHome'>
                <div className='bg-hero-overview bg-cover bg-no-repeat bg-center'>
                    <div className='container py-48'>
                        <div className='w-full flex items-center'>
                            <div data-aos="fade-right" data-aos-duration="3000">
                                <h1 className='md:text-[44px] text-2xl text-left lg:w-[57%] leading-snug'>Welcome to <span className='text-blue-500'>Busion</span> Saas & Software Landing Page Template.</h1>
                                <p className='lg:text-xl text-lg text-gray-100 text-left md:w-[400px] mt-10'>Build your website in minutes with the help of countless amazing features of Busion.</p>
                                <div className='flex items-center gap-5 mt-12'>
                                    <a href='#demo' className='border border-white p-3 rounded-full'>
                                        <AiOutlineArrowDown className='text-[26px] text-blue-500' />
                                    </a>
                                    <a href='#demo' className='font-primary font-normal text-lg text-gray-100'>View Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*----------------- END HOME -------------------*/}
        </React.Fragment>
    )
}

export default PreviewScreen
