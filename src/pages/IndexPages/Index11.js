import React from 'react'
//------------ Import Video background  ------------ 
import VideoBg from '../../assets/Video/Video_background.mp4'

const Index11 = () => {
    return (
        <React.Fragment>
            {/*----------------- START HOME -------------------*/}
            <section id='Home'>
                <div className='h-screen w-full'>
                    <video className='h-full w-full object-cover' src={VideoBg} autoPlay loop muted />
                    <div className='bg-black-400 opacity-80 absolute w-full h-full top-0 left-0'></div>
                </div>
                <div className='absolute top-0 left-0 w-full'>
                    <div className='container'>
                        <div className='grid grid-cols-1 h-screen justify-items-center content-center'>
                            <h1 className='md:text-[44px]'>We Are Creative Landing Page Template</h1>
                            <p className='text-gray-100 lg:w-[37%] mt-10 mx-auto'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout look like readable English.</p>
                            <div className='flex justify-center items-center md:flex-row flex-col gap-3 mt-8'>
                                <button className='btn-primary'>Learn More</button>
                                <span className='text-white font-primary'>OR</span>
                                <button className='btn-secondary'>Watch Video</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*----------------- END HOME -------------------*/}
        </React.Fragment>
    )
}

export default Index11
