import React from 'react'

const page = () => {
  return (
    <div className='px-16 py-10 flex flex-col gap-6'>
      <h1 className='text-4xl font-semibold'>Looks like you have been Lost !</h1>
      <h2 className='text-2xl'>Available Page</h2>
      <ul>
        <li>1. <a href="/terms" className='text-blue-700 underline'>Terms</a></li>
        <li>2. <a href="/dashboard" className='text-blue-700 underline'>Dashboard</a></li>
      </ul>
    </div>
  )
}

export default page
