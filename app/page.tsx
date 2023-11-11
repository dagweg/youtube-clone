// 'use client'

import React from 'react'
import Video from './components/Video'
import Panel from './components/Panel'
import { Types } from './utilities/types'
import './page.css'
import { throws } from 'assert'


async function Home() {

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

    let videos: Types.Video[] = await fetchVideos()
    console.log(videos)

    return (
        <>

            <div className='px-10 lg:pl-24 py-4 left-0 relative max-w-[3000px] mx-auto'>

                <div className='panels flex space-x-2 overflow-clip relative py-2 items-center rounded-lg'>
                    {panels.map((label, index) => (
                        <Panel key={index} label={label} />
                    ))}
                </div>
                <div className='videos grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 '>
                    {videos.map((video, index) => (
                        <Video key={index} {...video} />
                    ))}
                </div>
            </div>
        </>
    )
}

const fetchVideos = async (): Promise<Types.Video[]> => {
    try {
        const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${process.env.yt_key}&part=snippet&chart=mostPopular`, { method: "GET" });

        if (!res.ok) {
            throw new Error(`Failed to fetch videos. Status: ${res.status}`);
        }

        const data = await res.json();

        const videos: Types.Video[] = data.items.map((obj: any) => ({
            title: obj.snippet.title,
            thumbUrl: obj.snippet.thumbnails.maxres?.url || obj.snippet.thumbnails.standard?.url || obj.snippet.thumbnails.high.url || obj.snippet.thumbnails.medium.url || obj.snippet.thumbnails.default.url,
            username: obj.snippet.channelTitle,
            profileUrl: '',
            viewcount: '',
            releaseDate: '',
        }));

        return videos;
    } catch (error) {
        console.error("Error in fetchVideos:", error);
        throw error;
    }
};

export default Home