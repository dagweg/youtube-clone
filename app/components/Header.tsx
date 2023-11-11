'use client'

import React from 'react'
import { BiVideoPlus } from 'react-icons/bi'
import Profile from './Profile'
import './header.css'
import { GoHomeFill } from 'react-icons/go'
import { BiSolidVideos } from 'react-icons/bi'
import { MdHomeRepairService } from 'react-icons/md'
import { TextField } from '@radix-ui/themes'

function Header() {
    return (
        <header className='sticky'>
            <div className='px-7 py-2 flex justify-between items-center '>
                <div className='flex space-x-4 items-center justify-start'>
                    <i className='btn fa-solid fa-bars'></i>
                    <div className='ytb-logo'></div>
                </div>
                <div className='hidden sm:flex space-x-1 items-center justify-center flex-grow mx-5'>

                    <div className='search-box'>
                        <input type="text" placeholder='Search' className='w-10 bg-transparent pl-2 text-xs py-1' />
                        <i ><span className='fa-solid fa-search'></span></i>
                    </div>
                    <i className='btn fa-solid fa-microphone bg-gray-400 bg-opacity-20 !mx-4'></i>
                </div>

                <div className='flex space-x-1 items-center justify-end'>
                    <i className="sm:hidden block"><span className='btn fa-solid fa-search'></span></i>
                    <div className="sm:hidden block"><i className='btn fa-solid fa-microphone'></i></div>
                    <div className={'btn'} >
                        <BiVideoPlus className={'scale-150'} />
                    </div>
                    <i className='btn fa-solid fa-bell'></i>
                    <Profile profileUrl={'replace me'} />
                </div>
            </div >
            <div className='hidden lg:flex  w-20 h-screen  absolute z-10 flex-col'>
                <div className='left-nav-elem cursor-pointer hover:bg-gray-500 hover:bg-opacity-20 flex flex-col justify-center items-center py-6 rounded-xl'>
                    <GoHomeFill className='scale-125' />
                    <p className='mt-2'>Home</p>
                </div>
                <div className='left-nav-elem cursor-pointer hover:bg-gray-500 hover:bg-opacity-20 flex flex-col justify-center items-center py-6 rounded-xl'>
                    <i className='fa-solid fa-mobile-screen scale-125'></i>
                    <p className='mt-2'>Shorts</p>
                </div>
                <div className='left-nav-elem cursor-pointer hover:bg-gray-500 hover:bg-opacity-20 flex flex-col justify-center items-center py-6 rounded-xl'>
                    <BiSolidVideos className='scale-125' />
                    <p className='mt-2'>Subscriptions</p>
                </div>
                <div className='left-nav-elem cursor-pointer hover:bg-gray-500 hover:bg-opacity-20 flex flex-col justify-center items-center py-6 rounded-xl'>
                    <MdHomeRepairService className='scale-150' />
                    <p className='mt-2'>You</p>
                </div>
            </div>
        </header >
    )
}

export default Header