import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faRocket, faTachometerAlt, faHeart, faCog, faSignOut } from '@fortawesome/free-solid-svg-icons'

function LeftNavbar() {
    return (
        <div className='navcontainer md:fixed md:w-[200px] h-[100vh] bg-[#0F172A] md:shadow-my-shadow w-[70px]  '>

            <div className="logo ml-[15px] py-6 flex ">
                <div className='md:w-[30px] md:h-[30px] '><Image src={logo} alt=''/></div>
                <h2 className='hidden md:inline-block text-2xl ml-2 font-bold text-white cursor-pointer' >CodeDamn</h2>
            </div>

            <div className='wrapper p-[10px] z-10 '>
                <ul className='md:mt-[20px] md:text-left md:pl-[10px] md:flex md:gap-[25px] md:flex-col md:text-[18px] md:font-bold gap-[5px]  '>
                    
                    <li className='list-none text-[20px] md:flex group hover:cursor-pointer mb-8 ' >
                        <FontAwesomeIcon icon={faTachometerAlt} className='w-[18px] text-[#CBD5E1] cursor-pointer mx-auto md:mx-0 active:text-[#38BDF8] hover:text-[#38BDF8] ' />
                        <div className='text-[#CBD5E1] hidden md:inline-flex md:ml-[10px] hover:transition hover:scale-90 hover:duration-300 hover:text-[#38BDF8] '>Dashboard</div>
                    </li>
                    
                    <li className='list-none text-[20px] md:flex group hover:cursor-pointer mb-8 ' >
                        <FontAwesomeIcon icon={faRocket} className='w-[18px] text-[#CBD5E1] cursor-pointer mx-auto md:mx-0 active:text-[#38BDF8] hover:text-[#38BDF8] ' />
                        <div className='text-[#CBD5E1] hidden md:inline-flex md:ml-[10px] hover:transition hover:scale-90 hover:duration-300 hover:text-[#38BDF8] '>Explore</div>
                    </li>
                    
                    <li className='list-none text-[20px] md:flex group hover:cursor-pointer mb-8 ' >
                        <FontAwesomeIcon icon={faBookOpen} className='w-[18px] text-[#CBD5E1] cursor-pointer mx-auto md:mx-0 active:text-[#38BDF8] hover:text-[#38BDF8] ' />
                        <div className='text-[#CBD5E1] hidden md:inline-flex md:ml-[10px] hover:transition hover:scale-90 hover:duration-300 hover:text-[#38BDF8] '>Library</div>
                    </li>
                    
                    <li className='list-none text-[20px] md:flex group hover:cursor-pointer mb-8 ' >
                        <FontAwesomeIcon icon={faHeart} className='w-[18px] text-[#CBD5E1] cursor-pointer mx-auto md:mx-0 active:text-[#38BDF8] hover:text-[#38BDF8] ' />
                        <div className='text-[#CBD5E1] hidden md:inline-flex md:ml-[10px] hover:transition hover:scale-90 hover:duration-300 hover:text-[#38BDF8] '>Favourite</div>
                    </li>
                    
                    <li className='list-none text-[20px] md:flex group hover:cursor-pointer mb-8 ' >
                        <FontAwesomeIcon icon={faCog} className='w-[18px] text-[#CBD5E1] cursor-pointer mx-auto md:mx-0 active:text-[#38BDF8] hover:text-[#38BDF8] ' />
                        <div className='text-[#CBD5E1] hidden md:inline-flex md:ml-[10px] hover:transition hover:scale-90 hover:duration-300 hover:text-[#38BDF8] '>Settings</div>
                    </li>
                    
                    <li className='list-none text-[20px] md:flex group hover:cursor-pointer mb-8 ' >
                        <FontAwesomeIcon icon={faSignOut} className='w-[18px] text-[#CBD5E1] cursor-pointer mx-auto md:mx-0 active:text-[#38BDF8] hover:text-[#38BDF8] ' />
                        <div className='text-[#CBD5E1] hidden md:inline-flex md:ml-[10px] hover:transition hover:scale-90 hover:duration-300 hover:text-[#38BDF8] '>Signout</div>
                    </li>
                    
                    {/* <li className='list-none text-[20px]  md:flex group hover:cursor-pointer ' >
                        <FontAwesomeIcon icon={faRocket} className='w-[18px] text-[#CBD5E1] cursor-pointer' />
                        <div className='text-[#CBD5E1] hidden md:inline-flex md:ml-[10px] hover:transition hover:scale-90 hover:duration-300 hover:text-[#38BDF8] '>Explore</div>
                    </li>
                    
                    <li className='list-none text-[20px]  md:flex group hover:cursor-pointer ' >
                        <FontAwesomeIcon icon={faBookOpen} className='w-[18px] text-[#CBD5E1] cursor-pointer' />
                        <div className='text-[#CBD5E1] hidden md:inline-flex md:ml-[10px] hover:transition hover:scale-90 hover:duration-300 hover:text-[#38BDF8] '>Library</div>
                    </li>
                    
                    <li className='list-none text-[20px]  md:flex group hover:cursor-pointer ' >
                        <FontAwesomeIcon icon={faHeart} className='w-[18px] text-[#CBD5E1] cursor-pointer' />
                        <div className='text-[#CBD5E1] hidden md:inline-flex md:ml-[10px] hover:transition hover:scale-90 hover:duration-300 hover:text-[#38BDF8] '>Favourite</div>
                    </li>
                    
                    <li className='list-none text-[20px]  md:flex group hover:cursor-pointer ' >
                        <FontAwesomeIcon icon={faCog} className='w-[18px] text-[#CBD5E1] cursor-pointer' />
                        <div className='text-[#CBD5E1] hidden md:inline-flex md:ml-[10px] hover:transition hover:scale-90 hover:duration-300 hover:text-[#38BDF8] '>Settings</div>
                    </li>
                    
                    <li className='list-none text-[20px]  md:flex group hover:cursor-pointer ' >
                        <FontAwesomeIcon icon={faSignOut} className='w-[18px] text-[#CBD5E1] cursor-pointer' />
                        <div className='text-[#CBD5E1] hidden md:inline-flex md:ml-[10px] hover:transition hover:scale-90 hover:duration-300 hover:text-[#38BDF8] '>Logout</div>
                    </li> */}

                </ul>
            </div>

        </div>
    )
}

export default LeftNavbar