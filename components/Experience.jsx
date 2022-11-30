import React from 'react'


const data = [
    {
        company: 'Zezo Software Pvt. Ltd.',
        joinDate: '12 Jul 2022',
        leaveDate: 'Present',
        designation: 'Front End Web Developer',
        description: 'Learning and developing coding skills with internet and senior web developer guidance.'
    },
]
function Experience() {
    return (
        <div className='' id='Experience'>
            <div className='py-10 mx-10'>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className='py-10 grid grid-cols-1 lap:grid-cols-3'>
                                <div className='col-span-1 m-auto text-4xl justify-between text-black'>
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <div className='font-bold text-4xl text-center lap:text-left'>{item.company}</div>
                                    </a>
                                    <div className='ml-2 text-xl text-center lap:text-left'>({item.joinDate} - {item.leaveDate})</div>
                                </div>

                                <div className='col-span-2 lap:flex'>
                                    <div className='lap:h-full lap:w-[3px] h-[3px] my-5 lap:my-0 bg-black'></div>

                                    <div data-aos="fade-right" className='lap:ml-20 text-center lap:text-left text-black mb-5'>

                                        <div className='text-2xl font-bold'>Designation: {item.designation}</div>
                                        <div>{item.description}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Experience
