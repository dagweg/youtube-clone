import React from 'react'

function Panel({ label }: { label: string }) {
    return (
        <div className='bg-gray-500 bg-opacity-40 px-2 py-1 rounded-lg text-sm hover:bg-opacity-70 duration-100 cursor-pointer'>{label}</div>
    )
}

export default Panel