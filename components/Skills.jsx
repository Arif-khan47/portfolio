import React from 'react'
import SkillsCard from './Cards/SkillsCard'


const technicalSkills = [
    {
        name: 'HTML',
        img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669726096/AK/html_lc6b0f.webp'
    },
    {
        name: 'CSS',
        img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669726341/AK/logo-2582747_960_720_a9wazf.webp'
    },
    {
        name: 'Javascript',
        img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669726888/AK/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y_md3zqu.webp'
    },
    {
        name: 'React Js',
        img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669727484/AK/logo-react-icon_dpw90i.webp'
    },
    {
        name: 'React Native',
        img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669727484/AK/logo-react-icon_dpw90i.webp'
    },
    {
        name: 'Next Js',
        img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669743770/AK/nextjs-boilerplate-logo_v5mp4s.webp'
    },
    // {
    //     name: 'Node Js',
    //     img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669743674/AK/1709306_zby54w.webp'
    // },
    {
        name: 'Bootstrap',
        img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669727145/AK/93786_bootstrap_512x512_kvdyve.webp'
    },
    {
        name: 'Tailwind',
        img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669743857/AK/z8hzeszc9eb3sp3vp3qc_bzgahh.webp'
    },
    {
        name: 'MongoDB',
        img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669727301/AK/mongodb_jthqpx.webp'
    },
]

const personalSkills = [
    {
        name: 'Comp. Knowledge',
        img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669748258/AK/641825_pzcygt.webp'
    },
    {
        name: 'Windows',
        img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669788235/AK/3532806_qwdxqx.webp'
    },
    {
        name: 'Ubuntu',
        img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669788235/AK/1200px-Logo-ubuntu_cof-orange-hex.svg_ftki4x.webp'
    },
    {
        name: 'MS Office',
        img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669748369/AK/202-2021032_microsoft-office-icon-png-image-free-download-searchpng_jweeh9.webp'
    },
    {
        name: 'Photography',
        img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669748482/AK/Circle-icons-camera.svg_wuwfvb.webp'
    },
    {
        name: 'Photoshop',
        img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669748555/AK/adobe-photoshop-cc-circle-logo-3BE8AF841D-seeklogo.com_eq45kl.webp'
    },
    {
        name: 'Filmora',
        img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669748637/AK/download_fiiv7t.webp'
    }
]



function Skills() {
    return (
        <div className='py-20 grid grid-cols-1 lap:grid-cols-3 mx-10' id='Skills'>
            <div className='col-span-1 m-auto text-4xl justify-between text-black'>
                Technicals Skills
            </div>

            <div className='col-span-2 lap:flex mb-10'>
                <div className='lap:h-full lap:w-[7px] h-[3px] my-5 lap:my-0 bg-black'></div>
                <div className='lap:ml-20 text-black lap:flex lap:flex-row lap:flex-wrap'>
                    {
                        technicalSkills.map((item, index) => (
                            <div key={index} className="mx-3 my-5">
                                <SkillsCard title={item.name} img={item.img}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>



            <div className='col-span-1 m-auto text-4xl justify-between text-black'>
                Personal Skills
            </div>

            <div className='col-span-2 lap:flex'>
                <div className='lap:h-full lap:w-[6px] h-[3px] my-5 lap:my-0 bg-black'></div>
                <div className='lap:ml-20 text-black lap:flex lap:flex-row lap:flex-wrap'>
                    {
                        personalSkills.map((item, index) => (
                            <div key={index} className="mx-3 my-5">
                                <SkillsCard title={item.name} img={item.img}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills
