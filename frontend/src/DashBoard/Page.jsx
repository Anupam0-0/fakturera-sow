import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/sidebar'
import Content from './components/Content'

const Page = () => {
  return (
    <div className='w-[100vw]'>
      <Navbar />
      <main className='grid grid-cols-8 w-full'>
        <div className='col-span-2 shadow-2xl' >
          <Sidebar />
        </div>
        <div>
          <Content className='col-span-2' />
        </div>

      </main>

    </div>
  )
}

export default Page