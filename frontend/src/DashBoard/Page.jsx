import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/sidebar'
import Content from './components/Content'

const Page = () => {
  return (
    <div className='w-[100vw]'>
      <Navbar />
      <main className='grid grid-cols-10 w-full'>
        <div className='col-span-2 shadow-xl/12 hidden lg:block' >
          <Sidebar />
        </div>
        <div className='col-span-8'>
          <Content  />
        </div>

      </main>

    </div>
  )
}

export default Page