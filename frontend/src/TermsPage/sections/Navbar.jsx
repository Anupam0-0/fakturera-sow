import React from 'react'
import { Menu } from 'lucide-react'
import Dropdown from '../components/Dropdown'

const DiamondLogo = 'https://storage.123fakturera.se/public/icons/diamond.png'



const Navbar = () => {
  return (
    <nav className='w-full max-w-[75dvw] mx-auto py-9 flex justify-between items-center text-white'>
      <img src={DiamondLogo} alt="logo" className='w-14 object-cover hidden lg:block' />
      <div className='block lg:hidden'><Menu color='white' size={30} strokeWidth={2.2} /></div>
      <div className='text-[1.1rem] lg:gap-10 xl:gap-[3.4rem] font-medium hidden lg:flex '>
        <a href='#' className=''>Home</a>
        <a href='#' className=''>Order</a>
        <a href='#' className=''>Our Customers</a>
        <a href='#' className=''>About us</a>
        <a href='#' className=''>Contact us</a>
        <Dropdown />
      </div>
      <div className='block lg:hidden'>
        <Dropdown />
      </div>
    </nav>
  )
}

export default Navbar