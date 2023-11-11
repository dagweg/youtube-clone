import React from 'react'
import { Types } from '../utilities/types'

function Video({ thumbUrl, profileUrl }: Types.Video, { title, username, viewcount, releaseDate }: Types.Details) {
    return (
        <div>
            <Thumbnail thumbUrl={thumbUrl} />
            <div className='flex flex-grow'>
                <Profile profileUrl={profileUrl} />
                <Details title={title} username={username} viewcount={viewcount} releaseDate={releaseDate} />
            </div>
        </div>
    )
}


function Thumbnail({ thumbUrl }: Types.Video) {
    return (
        <>

        </>
    )
}

function Profile({ profileUrl }: Types.Video) {
    return (
        <>
        </>
    )
}


function Details({ title, username, viewcount, releaseDate }: Types.Details) {
    return (
        <>
        </>
    )
}



export default Video