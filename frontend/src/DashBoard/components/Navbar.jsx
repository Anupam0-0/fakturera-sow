import React from 'react'
import { Menu } from 'lucide-react'
import Profile from './Profile'

const englandFlag = "https://storage.123fakturere.no/public/flags/GB.png"

const Navbar = () => {
    return (
        <nav className=' bg-blue-500 '>
            <div className='  text-white max-w-[85rem] mx-auto h-22 px-8 flex justify-between items-center'>
                <div className='hidden lg:block relative top-1'><Profile /></div>
                <div><Menu size={40} color='#eee' className='block lg:hidden' /></div>
                <div className='gap-2 flex relative top-1'>
                    <p className='tracking-wide text-sm' >English</p>
                    <img src={englandFlag} alt="🏳️" className='scale-110' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar