import React, { useState, useEffect } from 'react'
//------------ Import react-icons ------------ 
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
//------------ Import Navbar Data ------------ 
import { NavbarData } from './NavbarData'
//------------ Import Scrollspy Packag--------
import Scrollspy from "react-scrollspy"

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [sticky, setSticky] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const fixeclassName = scrollTop >= 100 ? "bg-black-400 border-b border-black-200 lg:transition-all lg:duration-700 lg:ease-in-out" : "";
        setSticky(fixeclassName);
    };
    const classNames = `${sticky}`;

    return (
        <React.Fragment>
            {/* --------------- START NAVBAR --------------- */}
            <nav className={`fixed top-0 w-full z-[100] ${classNames}`}>
                <div className='container lg:bg-transparent bg-black-400'>
                    <div className='flex justify-between items-center py-4'>
                        <h1 className='font-primary text-2xl text-white uppercase'>Busion</h1>
                        <div>
                            {/*---------- Start large and medium screen navbar -----------*/}
                            <Scrollspy items={NavbarData.map((e) => e.link)} currentClassName="active" className='hidden lg:flex justify-center items-center space-x-7'>
                                {
                                    NavbarData.map((e) => {
                                        return (
                                            <li className='text-gray-100 hover:text-white font-primary text-base font-semibold transition-all duration-300 ease-in-out'>
                                                <a href={"#" + e.link}>{e.name}</a>
                                            </li>
                                        )
                                    })
                                }
                                <li className='btn-primary'>Buy Now</li>
                            </Scrollspy>
                            {/*----------- End large and medium screen navbar --------------*/}

                            {/*------------- Start navbar close and menu icons -------------*/}
                            <button onClick={() => setOpen(!open)} className='lg:hidden'>
                                {
                                    open ? <AiOutlineClose className='text-white text-2xl' /> :
                                        <FiMenu className='text-white text-2xl' />
                                }
                            </button>
                            {/*------------- End navbar close and menu icons -------------*/}
                        </div>

                        {/*------------ Start Small screen navbar -------------*/}
                        <ul className={`lg:hidden fixed md:px-10 px-4 py-5 w-full bg-black-400 space-y-4 left-0 transition-all duration-500 ease-in -z-10 ${open ? 'top-14' : 'top-[-490px]'}`}>
                            {
                                NavbarData.map((e) => {
                                    return (
                                        <li className='text-white font-primary text-base font-semibold'>
                                            <a href={"#" + e.link}>{e.name}</a>
                                        </li>
                                    )
                                })
                            }
                            <li className='btn-primary text-center'>Buy Now</li>
                        </ul>
                        {/*------------- End Small screen navbar -------------*/}
                    </div>
                </div>
            </nav>
            {/* --------------- END NAVBAR --------------- */}
        </React.Fragment>
    )
}

export default Navbar
