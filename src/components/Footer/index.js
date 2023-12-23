import React from 'react'
//------------ Import Footer Data ------------ 
import { FooterData } from './FooterData'

const Footer = () => {
    return (
        <React.Fragment>
            {/* --------------- START FOOTER --------------- */}
            <section className='bg-black-400 pt-24'>
                <div className='container'>
                    <div className='grid lg:grid-cols-3 grid-cols-1 justify-items-center content-center gap-6'>
                        {
                            FooterData.map((e) => {
                                return (
                                    <div>
                                        <div className='flex justify-center items-center text-4xl text-white'>{e.icon}</div>
                                        <div className='mt-6'>
                                            <p className='text-white'>{e.conect}</p>
                                            <p className='text-lg text-gray-100'>{e.contact}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <hr className='border-t border-black-200 mt-7' />
                    <div className='py-6'>
                        <p className='text-white'>2023 &copy; Busion. Design by ThemeCard</p>
                    </div>
                </div>
            </section>
            {/* --------------- START FOOTER --------------- */}
        </React.Fragment>
    )
}

export default Footer
