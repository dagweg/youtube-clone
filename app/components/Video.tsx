import React from 'react'
import { Types } from '../utilities/types'
import Profile from './Profile'
import Image from 'next/image'
import './video.css'

interface props {
    thumbUrl?: string,
    title?: string,
    username?: string,
    viewcount?: string,
    releaseDate?: string,
    profileUrl?: string,
}

//{ thumbUrl, title, username, viewcount, releaseDate }: Types.Video , { profileUrl }: { profileUrl: string }
function Video(props: Types.Video, key: any) {
    return (
        <div className='mt-6 mb-10 max-w-[600px] mx-auto sm:mx-0.5 w-full sm:w-auto md:mx-1 2xl:max-w-[600px]'>
            <Thumbnail thumbUrl={props.thumbUrl as string} />
            <div className='flex space-x-2 mt-3'>
                <Profile profileUrl={props.profileUrl as string} />
                <Details title={props.title} username={props.username} viewcount={props.viewcount} releaseDate={props.releaseDate} />
            </div>
        </div>
    )
}


function Thumbnail({ thumbUrl }: { thumbUrl: string }) {
    return (
        <>
            <div className='!w-full sm:w-[500px] md:w-full h-62 rounded-lg relative mx-auto overflow-hidden hover:rounded-none duration-200'>
                <img className='w-full' src={thumbUrl} alt="" />
                <i className='absolute right-0 bottom-0 bg-black rounded-md bg-opacity-80 p-1 text-xs m-0.5'>49:45</i>
            </div>
        </>
    )
}

function Details({ title, username, viewcount, releaseDate }: Types.Video) {
    return (
        <>
            <div className='details'>
                <h1>{title}</h1>
                <h4 className='text-gray-200'>{username}</h4>
                <div className='flex '>
                    <p className='text-gray-200'>7.7B views</p><span className='text-gray-200 fa-solid fa-circle scale-50 text-xs px-1 '></span><p className='text-gray-200'>5m ago</p>
                </div>
            </div>
        </>
    )
}



export default Video