import React from 'react'

function Profile({ profileUrl }: { profileUrl: string }) {
    return (
        <>
            <div className='bg-slate-100 bg-opacity-20 w-12 h-12 rounded-full flex justify-center items-center scale-90'><i className='fa-solid fa-user '></i></div>
        </>
    )
}

export default Profile