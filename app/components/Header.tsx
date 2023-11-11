import React from 'react'

function Header() {
    return (
        <header className='flex justify-between p-2'>
            <div className='flex space-x-8'>
                <i className='btn fa-solid fa-add'></i>
                <i className='btn fa-solid fa-add'></i>
            </div>
            <div className='flex space-x-6'>
                <i className='btn fa-solid fa-add'></i>
                <i className='btn fa-solid fa-add'></i>
                <i className='btn fa-solid fa-add'></i>
                <i className='btn fa-solid fa-add'></i>
                <i className='btn fa-solid fa-add'></i>
            </div>
        </header>
    )
}

export default Header