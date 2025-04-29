import React from 'react'

const Profile = () => {
    return (
        <div className='flex gap-4 text-white/95 relative'>
            <div className='relative'>
            <img src="/avatar.png" alt="👨‍💼" className='rounded-full size-13 relative -top-1' />
            <div className='size-2 bg-green-400/95 rounded-full absolute bottom-2.5 -right-0.5 shadow-lg/80'></div>
            </div>

            <div className='flex flex-col tracking-wide'>
                <p className='text-md capitalize'> John Andre</p>
                <p className='text-xs capitalize'> Storfjord AS</p>
            </div>


        </div>
    )
}

export default Profile