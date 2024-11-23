import React from 'react';

const HomeHero = () => {
    return (
        <section className='h-[calc(100vh-69px)]'>
            <div className='pt-12 pb-2 containerLg h-full'>
                <div className=' h-full rounded-2xl bg-[#315098]'
                    style={{
                        // backgroundImage: "linear-gradient(to right top, #102d75, #00498f, #0064a5, #0080b9, #019cc9)",
                        // backgroundImage: "linear-gradient(to right, #16222a, #3a6073)",
                        // backgroundImage: "linear-gradient(to right, #1f4037, #99f2c8)",
                        // backgroundImage: "linear-gradient(to right, #141e30, #243b55)",
                        // backgroundImage: "linear-gradient(to right, #0e593b, #076038, #046734, #086d2f, #127427)",
                    }}
                >

                    <div className='container py-20'>
                        <h1>
                            <span className='text-4xl font-bold text-white'>Welcome to</span>
                            <span className='text-6xl font-bold text-white'>BLOG</span>
                        </h1>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeHero;