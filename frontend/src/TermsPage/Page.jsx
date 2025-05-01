import React from 'react'
import Navbar from './sections/Navbar'
import Body from './sections/Body'

const Page = () => {
  return (
    <div id='terms-page' className=''>
      <img  src="https://storage.123fakturera.se/public/wallpapers/sverige43.jpg
" alt="" className='fixed -z-50 h-screen w-screen object-cover' />
      <div className='max-w-[80rem] mx-auto px-4'>
        <Navbar />
        <Body />
      </div>
    </div>
  )
}

export default Page