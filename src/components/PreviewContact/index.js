import React from 'react'
import 'aos/dist/aos.css';

const Contact = () => {
    return (
        <React.Fragment>
            {/* --------------- START CONTACT --------------- */}
            <section className='bg-Contact-belog relative bg-cover bg-no-repeat' id='Contact' >
                <div className='bg-black-400 opacity-80 absolute h-full w-full top-0'></div>
                <div className='container py-20'>
                    <div className='flex items-center flex-wrap'>
                        <div className='w-[600px] md:py-20 md:px-[60px] py-[60px] px-5 bg-black-400 rounded-md z-10' data-aos="fade-up" data-aos-duration="3000">
                            <div className='text-center'>
                                <h1 className='md:text-[40px] text-[32px]'>Still Need Help?</h1>
                                <p className='text-lg text-gray-100 mt-6'>Due to its widespread use as filler text for layouts, non-readability is of great importance.</p>
                                <div className='mt-12'>
                                    <button className='btn-primary w-[70%] rounded-md'>Get In Touch</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* --------------- START CONTACT --------------- */}
        </React.Fragment>
    )
}

export default Contact
