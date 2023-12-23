import React from 'react'
//------------ Import Footer Data and icons ------------ 
import { FooterData, FooterIcon } from './FooterData'
import 'aos/dist/aos.css';

const Footer = () => {

    return (
        <React.Fragment>
            {/* --------------- START FOOTER --------------- */}
            <footer className='bg-black-400 pt-24 pb-7'>
                <div className='container'>
                    <div data-aos="zoom-in" data-aos-duration="3000">
                        <div className='grid md:grid-cols-2 grid-cols-1 content-center md:gap-0 gap-5'>
                            <h1 className='font-primary text-2xl text-left text-white uppercase'>Busion</h1>
                            <div className='flex md:justify-end items-center'>
                                <div className='relative w-[380px]'>
                                    <input type="text" placeholder='Email' className='font-primary font-normal text-base text-white placeholder:text-gray-100 focus:outline-none w-full py-3.5 pl-4 pr-36 bg-black-200 rounded-md ' />
                                    <button className='btn-primary px-9 rounded-md absolute top-[2.5px] right-[2.5px]'>Subcribe</button>
                                </div>
                            </div>
                        </div>
                        <hr className='border-t border-black-200 mt-12' />
                        <div className='flex lg:justify-between justify-center items-center lg:flex-row flex-col mt-8'>
                            <div>
                                <ul className='flex items-center lg:flex-row flex-col lg:gap-6'>
                                    {
                                        FooterData.map((e) => {
                                            return (
                                                <li className='font-primary font-normal text-lg text-white hover:text-blue-500 transition duration-300 ease-in-out'>
                                                    <a href={e.link}>{e.name}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className='lg:mt-0 mt-5'>
                                <ul className='flex items-center flex-wrap space-x-5'>
                                    {
                                        FooterIcon.map((e) => {
                                            return (
                                                <li className='flex justify-center items-center bg-black-200 text-white w-[35px] h-[35px] rounded-full cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out'>
                                                    {e.icon}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <div className='py-3.5 px-9 bg-black-200 rounded-lg'>
                                <p className='font-primary font-normal text-base text-center text-white'>&copy;2023 Busion. Design and coded by ThemeCard</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* --------------- START FOOTER --------------- */}
        </React.Fragment>
    )
}

export default Footer
