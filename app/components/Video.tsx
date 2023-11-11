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
function Video(props: any, key: any) {
    return (
        <div className='mt-6 mb-10 max-w-[600px] mx-auto sm:mx-0.5 w-full sm:w-auto md:mx-1 2xl:max-w-[600px]'>
            <Thumbnail thumbUrl={props.thumbUrl} />
            <div className='flex space-x-2 mt-3'>
                <Profile profileUrl={props.profileUrl as string} />
                <Details title={props.title} username={props.username} viewcount={props.viewcount} releaseDate={props.releaseDate} />
            </div>
        </div>
    )
}


function Thumbnail(thumbUrl: any) {
    return (
        <>
            <div className='!w-full sm:w-[500px] md:w-full h-62 rounded-lg relative mx-auto overflow-hidden hover:rounded-none duration-200'>
                <img className='w-full' src="data:image/png;base64,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" alt="" />
                <i className='absolute right-0 bottom-0 bg-black rounded-md bg-opacity-80 p-1 text-xs m-0.5'>49:45</i>
            </div>
        </>
    )
}

function Details({ title, username, viewcount, releaseDate }: Types.Video) {
    return (
        <>
            <div className='details'>
                <h1>The first youtube video</h1>
                <h4 className='text-gray-200'>Youtube</h4>
                <div className='flex '>
                    <p className='text-gray-200'>7.7B views</p><span className='text-gray-200 fa-solid fa-circle scale-50 text-xs px-1 '></span><p className='text-gray-200'>5m ago</p>
                </div>
            </div>
        </>
    )
}



export default Video