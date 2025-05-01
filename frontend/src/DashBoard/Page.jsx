import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

const Page = () => {
  return (
    <div className='w-[100vw]'>
      <Navbar />
      <main className='grid grid-cols-10 w-full'>
        <div className='col-span-2 shadow-xl/12 hidden xl:block' >
          <Sidebar />
        </div>
        <div className='col-span-10 xl:col-span-8'>
          <Content  />
        </div>

      </main>

    </div>
  )
}

export default Page
