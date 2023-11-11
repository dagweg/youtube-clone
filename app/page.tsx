import React from 'react'
import Video from './components/Video'
import Panel from './components/Panel'
import { Types } from './utilities/types'

function Home() {

    const panels = [
        "All",
        "Python",
        "News",
        "AI",
        "Music",
        "Mixes",
        "Art",
        "Instrumental"
    ]

    let videos: Types.Video[] = []

    return (
        <>
            <div className='panels'>
                {panels.map((label, index) => (
                    <Panel key={index} label={label} />
                ))}
                <i>Next</i>
            </div>
            <div className='videos'>
                {videos.map((video, index) => (
                    <Video key={index} thumbUrl={video.thumbUrl} />
                ))}
            </div>
        </>
    )
}

const fetchVideos = async (): Promise<Types.Video[]> => {
    return [{}]
}

export default Home