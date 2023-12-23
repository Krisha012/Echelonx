import React from 'react'

const Cta = () => {
    return (
        <React.Fragment>
            {/* --------------- START CTA --------------- */}
            <section className='bg-black-400 py-24'>
                <div className='container'>
                    <div className='grid grid-cols-1 justify-items-center content-center'>
                        <h2 className='text-3xl text-white'>Busion Bootstrap Landing Page Design</h2>
                        <p className='text-gray-100 lg:w-1/2 md:px-4 my-8 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing eli.Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>
                        <button className='btn-primary mt-2'>
                            <a href="#Home">Start Trial Free</a></button>
                    </div>
                </div>
            </section>
            {/* --------------- END CTA --------------- */}
        </React.Fragment>
    )
}

export default Cta
