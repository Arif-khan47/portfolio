import React from 'react'
import Header from './Header';
import Image from 'next/image';

function Hero() {

    return (
        <>
            <div className='h-screen' id='Home'>
                <Header />

                <div className='grid lap:grid-cols-6 mx-5 lap:mx-20 place-content-center relative top-[10%] lap:top-0'>
                    <div className='lap:col-span-1'></div>
                    <div className='col-span-6 lap:col-span-2'>
                        <div className='relative h-[20rem] tab:h-[30rem] lap:h-[33rem] mx-auto'>
                            <Image
                                src='https://res.cloudinary.com/drtldr4nl/image/upload/v1669542753/AK/ak_mdxb23.png'
                                objectFit='contain'
                                layout='fill'
                                className='w-fit h-fit'
                                alt='logo'
                            />
                        </div>
                    </div>
                    <div data-aos="fade-right" className='col-span-6 lap:col-span-3 my-auto'>
                        <div className='text-black font-bold text-5xl lap:text-8xl text-center lap:text-left lap:pt-32'>Arif Khan</div>
                        <div className='text-black underline text-3xl lap:text-4xl text-center lap:text-left'>Web Developer</div>
                    </div>
                </div>


                <div className='absolute bottom-0 left-0 right-0 text-black my-3'>
                    <div className='text-center font-semibold mb-2 lap:block hidden'>Scroll Down</div>
                    <div className='text-center font-semibold mb-2 lap:hidden'>Swipe Down</div>
                    <div className='w-5 lap:w-8 mx-auto animate-bounce '><svg
                        x="0px"
                        y="0px"
                        viewBox="0 0 32 32">
                        <path d="M32,3V14a1,1,0,0,1-.293.707l-15,15a1,1,0,0,1-1.414,0l-15-15A1,1,0,0,1,0,14V3a1,1,0,0,1,1.707-.707L16,16.586,30.293,2.293A1,1,0,0,1,32,3Z"></path>
                    </svg></div>
                </div>
            </div>

        </>
    )
}

export default Hero
