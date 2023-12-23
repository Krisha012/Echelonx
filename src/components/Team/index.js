import React from 'react'
//------------ Import Team Data ------------ 
import { TeamData } from './TeamData'

const Team = () => {
    return (
        <React.Fragment>
            {/* --------------- START TEAM --------------- */}
            <section className='bg-gray-50 py-24' id='Team'>
                <div className='container'>
                    <div className='grid grid-cols-1 justify-items-center content-center'>
                        <div>
                            <h2>Our Team</h2>
                            <p className='lg:w-[65%] mx-auto mt-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-items-center content-center gap-6 mt-20'>
                        {
                            TeamData.map((e) => {
                                return (
                                    <div className='bg-white w-full rounded-xl p-6'>
                                        <div className='p-1'>
                                            <img src={e.profile_img} alt="" className='block bg-no-repeat bg-cover max-h-24 m-auto rounded-full outline outline-offset-4 outline-gray-200 outline-1' />
                                        </div>
                                        <div className='text-center mt-5'>
                                            <h6 className='font-primary font-bold text-lg text-blue-500 uppercase'>{e.profile_name}</h6>
                                            <p className='text-sm'>{e.profile_gmail}</p>
                                        </div>
                                        <div className='w-36 m-auto border border-gray-200 rounded-full text-center mt-5'>
                                            <p className='font-medium py-1 px-1.5'>{e.profile_work}</p>
                                        </div>
                                        <hr className='border-t border-gray-200 mt-5' />
                                        <ul className='flex justify-center items-center space-x-6 mt-4'>
                                            <li className='text-xl text-gray-300 cursor-pointer hover:text-blue-500 transition duration-500 ease-in-out'>{e.fb_icon}</li>
                                            <li className='text-xl text-gray-300 cursor-pointer hover:text-blue-500 transition duration-500 ease-in-out'>{e.google_icon}</li>
                                            <li className='text-xl text-gray-300 cursor-pointer hover:text-blue-500 transition duration-500 ease-in-out'>{e.Twiter_icon}</li>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/* --------------- END TEAM --------------- */}
        </React.Fragment>
    )
}

export default Team
