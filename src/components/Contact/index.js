import React from 'react'

const Contact = () => {
    return (
        <React.Fragment>
            {/* --------------- START CONTACT --------------- */}
            <section className='bg-gray-50 py-24' id='Contact'>
                <div className='container'>
                    <div className='grid grid-cols-1 justify-items-center content-center'>
                        <div>
                            <h2>Contact Us</h2>
                            <p className='lg:w-[65%] mx-auto mt-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                    {/* --------------- Start contact form --------------- */}
                    <div className='mt-10'>
                        <div>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                                <div>
                                    <input type="text" name="Name" placeholder='Your Name*' className='w-full border border-gray-200 font-primary font-normal text-base placeholder:text-gray-300 focus:outline-none focus:border-blue-500 transition duration-500 ease-in-out rounded-md px-3 py-3' />
                                </div>
                                <div>
                                    <input type="text" name="Email" placeholder='Your Email*' className='w-full border border-gray-200 font-primary font-normal text-base placeholder:text-gray-300 focus:outline-none focus:border-blue-500 transition duration-500 ease-in-out rounded-md px-3 py-3' />
                                </div>
                                <div className='md:col-span-2'>
                                    <input type="email" name="Subject" placeholder='Your Subject...' className='w-full border border-gray-200 font-primary font-normal text-base placeholder:text-gray-300 focus:outline-none focus:border-blue-500 transition duration-500 ease-in-out rounded-md px-3 py-3' />
                                </div>
                                <div className='md:col-span-2'>
                                    <textarea name="message" rows={4} placeholder='Your message...' className='w-full border border-gray-200 font-primary font-normal text-base placeholder:text-gray-300 focus:outline-none focus:border-blue-500 transition duration-500 ease-in-out rounded-md px-3 py-3' />
                                </div>
                                <div>
                                    <button className='btn-primary block rounded-lg active:text-black-400 active:border-black-400'>Submit form</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* --------------- End contact form --------------- */}
                </div>
            </section>
            {/* --------------- START CONTACT --------------- */}
        </React.Fragment>
    )
}

export default Contact
