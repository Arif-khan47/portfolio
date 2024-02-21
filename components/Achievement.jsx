import React from 'react'

const data = [
  {
    link: 'https://drive.google.com/file/d/1abUPXTsUFd8MmzrPESSYRBahNflPpux8/view?usp=share_link',
    achievements: 'Got appreciation letter from zezo for my work on project Mission20.',
    date: '1 Oct 2022'
  },
  {
    link: 'https://drive.google.com/file/d/11Cl9pvHAGZhLxEJ8wWonklsBhh_d3Oc3/view?usp=share_link',
    achievements: 'Employee of the month - Nov 2022.',
    date: '3 Dec 2022'
  },
  {
    link: 'https://drive.google.com/file/d/1Ya6S4zOctrYeeJiRn49jB3WNJlBsA1GD/view?usp=sharing',
    achievements: 'Got appreciation Certificate from Runtime.',
    date: '10 Nov 2023'
  },
  {
    link: 'https://drive.google.com/file/d/1iMM-m4ttVhyj0Xy21ySIX4E8sWzw2qRI/view?usp=sharing',
    achievements: 'Awarded the title of "Innovative Coding Maestro" by Runtime for outstanding contributions and creativity in coding techniques and solutions, demonstrated exceptional problem-solving skills and innovative approaches to programming tasks.',
    date: '3 Feb 2023'
  },
]


const nonTechData = [
  {
    link: 'https://drive.google.com/file/d/1J5zbo8dBJtAks8raGwUyiyN7UBTDaz4E/view?usp=sharing',
    achievements: 'Got certificate for contribution as photography HOD in college fest (Techtris)',
    date: '18 Mar 2022'
  },
  {
    link: 'https://drive.google.com/file/d/1Yq-eqtVZF6sFv1fXpbHysEGBvW5UW-ss/view?usp=sharing',
    achievements: `Awarded "Best Bowler" in Runtime's annual cricket tournament for exceptional bowling performance and sportsmanship.`,
    date: '3 Feb 2023'
  },
]



function Achievement() {
  return (
    <div className='' id='Achievement'>
      <div className='lg:py-20 pt-20 pb-10 grid grid-cols-1 lap:grid-cols-3 mx-10'>
        <div className='col-span-1 m-auto text-4xl justify-between'>
          <h1 className='text-white'>
            Achievements
          </h1>
        </div>

        <div className='col-span-2 lap:flex'>
          <div className='lap:h-full lap:w-[3px] h-[3px] my-5 lap:my-0 bg-white'></div>
          <div className='lap:ml-20 flex'>
            <div className='text-2xl text-center lap:text-left text-white'>
              <ul className='list-disc ml-10'>
                {
                  data.map((item, index) => {
                    return (
                      <div key={index} data-aos="fade-right">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <li className='hover:underline cursor-pointer mb-2 lap:mb-5'>
                            <h2>{item.achievements}</h2>
                            <div><h2>({item.date})</h2></div>
                          </li>
                        </a>

                      </div>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=' lg:py-20 pb-20 pt-10 grid grid-cols-1 lap:grid-cols-3 mx-10'>
        <div className='col-span-1 m-auto text-4xl justify-between'>
          <h1 className='text-white'>
            Non Technical <br /> Achievements
          </h1>
        </div>

        <div className='col-span-2 lap:flex'>
          <div className='lap:h-full lap:w-[3px] h-[3px] my-5 lap:my-0 bg-white'></div>
          <div className='lap:ml-20 flex'>
            <div className='text-2xl text-center lap:text-left text-white'>
              <ul className='list-disc ml-10'>
                {
                  nonTechData.map((item, index) => {
                    return (
                      <div key={index} data-aos="fade-right">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <li className='hover:underline cursor-pointer mb-2 lap:mb-5'>
                            <h2>{item.achievements}</h2>
                            <div><h2>({item.date})</h2></div>
                          </li>
                        </a>

                      </div>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievement
