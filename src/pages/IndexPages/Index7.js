import React from 'react'
//------------ Import Text Rotator packag------------ 
import ReactTextRotator from "react-text-rotator";

const Index7 = () => {
    //---------- Start headers text data content --------
    const content = [
        {
            text: "We Are Creative Landing Page Template",
            className: "classA",
            animation: "fade",
        },
        {
            text: "Professional Landing Page Template",
            className: "classB",
            animation: "fade",
        },
        {
            text: "We Are Creative And Modern Design",
            className: "classC",
            animation: "fade",
        },
    ];
    //---------- End headers text data content --------

    return (
        <React.Fragment>
            {/*----------------- START HOME -------------------*/}
            <section className='bg-black-400' id='Home'>
                <div className='container'>
                    <div className='grid grid-cols-1 h-screen justify-items-center content-center'>
                        <h1 className='md:text-[44px]'>
                            <ReactTextRotator
                                content={content}
                                time={5000}
                                startDelay={0}
                            />
                        </h1>
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

export default Index7
