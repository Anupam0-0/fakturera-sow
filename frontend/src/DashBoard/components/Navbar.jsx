import React from 'react'
import { Menu } from 'lucide-react'
import Profile from './Profile'

const englandFlag = "https://storage.123fakturere.no/public/flags/GB.png"

const Navbar = () => {
    return (
        <nav className=' bg-primary '>
            <div className=' text-white max-w-[85rem] mx-auto h-20 px-8 flex justify-between items-center'>
                <div className='hidden lg:block relative top-1'><Profile /></div>
                <div><Menu size={40} color='#eee' className='block lg:hidden' /></div>
                <div className='gap-4 flex relative top-1 text-white'>
                    <p className='tracking-wide text-md font-normal text-white' >English</p>
                    <img src={englandFlag} alt="🏳️" className='w-8 object-contain' />
                    {/* <p className='text-white' >hi</p> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar