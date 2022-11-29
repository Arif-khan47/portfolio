import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function Header() {
  const Navtool = [
    { name: "Home", link: "/#Home" },
    { name: "About", link: "/#About" },
    // { name: "Skills", link: "/" },
    // { name: "Experience", link: "/" },
    // { name: "Projects", link: "/" },
    // { name: "achievement", link: "/" },
    // { name: "Education", link: "/" },
    // { name: "Contact", link: "/" },
  ]
  const newTab = [
    // { name: "Trons Scan", link: "/" },
    // { name: "Whitepaper", link: "/" },
    // { name: "Certificate", link: "/img/CERTIFICATE.pdf" },
  ]

  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='container m-auto z-50'>
        <div className='grid grid-cols-2 lap:grid-cols-12 pt-3 lap:py-5'>
          <div className='col-span-2 lap:col-span-2 flex justify-end'>
            <div className='lap:hidden z-10 mx-10 my-auto' onClick={() => setOpen(!open)}>
              {!open ?
                <svg
                  className="stroke-black w-14 cursor-pointer"
                  viewBox="0 0 512 512"
                >
                  <path
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                    d="M80 160h352M80 256h352M80 352h352"
                  ></path>
                </svg>
                :
                <svg
                  className="stroke-black w-14 cursor-pointer"
                  viewBox="0 0 512 512"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M368 368L144 144m224 0L144 368"
                  ></path>
                </svg>}
            </div>
          </div>

          <div className={`${!open && 'hidden'} z-20 lap:block col-span-2 lap:col-span-10 bg-transparent mx-3 lap:mx-0 lap:my-auto`}>
            <ul className="lap:flex lap:justify-end text-center lap:mx-10 gap-9 absolute lap:relative lap:bg-transparent  border-b-2 lap:border-b-0 bg-white border-black left-0 right-0">
              {Navtool.map((link) => (
                <li key={link.name} className=" font-bold my-6 lap:my-auto lap:hover:border-b-2 text-black text-2xl lap:text-lg">
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))
              }
              {newTab.map((link) => (
                <li key={link.name} className=" font-bold my-8 lap:my-auto hover:text-primary text-2xl lap:text-lg">
                  <a href={link.link} target="_blank" rel="noopener noreferrer">{link.name}</a>
                </li>
              ))
              }
              <a href="https://wa.me/+917506636758" target="_blank" rel="noopener noreferrer"><div className='border p-2 rounded-full flex mx-auto border-black duration-500 bg-black hover:bg-transparent lap:w-40 w-44 my-auto mb-5 lap:mb-0 text-white hover:text-black fill-white hover:fill-black'>

                <svg className="w-8 mx-auto"
                  viewBox="0 0 512 512"
                >
                  <path
                    fillRule="evenodd"
                    d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"
                  ></path>
                </svg>
                <span className='my-auto text-2xl lap:text-lg font-bold mx-auto'>Whatsapp</span>
              </div></a>

            </ul>

          </div>
        </div>
      </div>
    </>
  )
}

export default Header
