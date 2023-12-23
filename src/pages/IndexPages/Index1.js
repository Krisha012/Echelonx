import React from 'react'

const Index1 = () => {
    return (
        <React.Fragment>
            {/*----------------- START HOME -------------------*/}
            <section className='bg-black-400' id='Home'>
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
            </section>
            {/*----------------- END HOME -------------------*/}
        </React.Fragment>
    )
}

export default Index1
