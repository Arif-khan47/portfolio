import React from 'react'


const data = [
    {
        company: 'Zezo Software Pvt. Ltd.',
        link: 'https://zezosoft.com/',
        joinDate: '12 Jul 2022',
        leaveDate: '30 Jun 2023',
        designation: 'Front End Web Developer',
        attachmentLink: 'https://drive.google.com/file/d/1REZ6kLK6iFbNVwiY0gdr1iOZRNRJs-Q2/view?usp=sharing',
        description: 'Learning and developing coding skills with internet and senior web developer guidance.'
    },
    {
        company: 'Runtime Solutions',
        link: 'https://runtime-solutions.com/',
        joinDate: '07 Jul 2023',
        leaveDate: 'Present',
        designation: 'MERN Developer',
        attachmentLink: '',
        description: 'Leveraging my expertise in the MERN stack to develop dynamic and scalable web applications & collaborating with a talented team'
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
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <div className='font-bold text-4xl text-center lap:text-left hover:underline'><h1>{item.company}</h1></div>
                                    </a>
                                    <div className='ml-2 text-xl text-center lap:text-left'><h2>({item.joinDate} - {item.leaveDate})</h2></div>
                                </div>

                                <div className='col-span-2 lap:flex'>
                                    <div className='lap:h-full lap:w-[3px] h-[3px] my-5 lap:my-0 bg-black'></div>
                                    <div data-aos="fade-right" className='lap:ml-20 text-center lap:text-left text-black mb-5'>
                                        <a href={item.attachmentLink === '' ? '#' : item.attachmentLink} target={item.attachmentLink != '' && "_blank"} rel="noopener noreferrer">
                                            <div className='text-2xl font-bold hover:underline'><h1>Designation: {item.designation}</h1></div>
                                            <div><h2>{item.description}</h2></div>
                                        </a>
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
