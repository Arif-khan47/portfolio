import React from 'react'

function About() {
    return (
        <div className='' id='About'>
            <div className='py-20 grid grid-cols-1 lap:grid-cols-3 mx-10'>
                <div className='col-span-1 m-auto text-4xl justify-between'>
                    <h1 className='text-white'>About</h1>
                </div>

                <div className='col-span-2 lap:flex'>
                    <div className='lap:h-full lap:w-[5px] h-[3px] my-5 lap:my-0 bg-white'></div>
                    <div data-aos="fade-right" className='lap:ml-20 text-2xl text-center lap:text-left text-white'>
                        <h2 className='text-white'>I am an energetic, ambitious, motivated person who has developed a mature and responsible approach to any task that I undertake, or situation that I am presented.<br/>
                        I am a Web Developer, Eager to obtain a challenging position at a prestigious
                        company that will expand my learning and build upon my developer skills.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
