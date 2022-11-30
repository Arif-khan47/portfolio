import React from 'react'

const data = [
    {
        course: 'BSCIT',
        board: 'Mumbai University',
        istitude: 'RD & SH National College',
        endYear: 2022,
        score: 'CGPI - 8.30'

    },
    {
        course: 'HSC',
        board: 'Maharashtra State Board',
        istitude: 'Patuck Junior College',
        endYear: 2019,
        score: '62.15%'

    },
    {
        course: 'SSC',
        board: 'Maharashtra State Board',
        istitude: 'Patuck Tech. High School',
        endYear: 2017,
        score: '62.60%'

    }

]


function Education() {
    return (
        <div className='' id='Education'>
            <div className='py-10 mx-10'>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className='py-10 grid grid-cols-1 lap:grid-cols-3'>
                                <div className='col-span-1 my-auto text-black'>
                                    <div className='text-4xl text-center lap:text-left font-semibold'>
                                        {item.course}
                                    </div>
                                    <div className='text-2xl text-center lap:text-left'>
                                        {item.board}
                                    </div>
                                </div>

                                <div className='col-span-1 lap:flex'>
                                    <div className='lap:h-full lap:w-[3px] h-[3px] my-5 lap:my-0 bg-black'></div>
                                    <div data-aos="fade-right" className='lap:ml-20  text-black text-center lap:text-left'>
                                        <div className='text-3xl'>
                                            {item.istitude}
                                        </div>
                                        <div>
                                            {item.endYear}
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" className='col-span-1 text-2xl font-semibold text-black m-auto'>
                                    {item.score}
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Education
