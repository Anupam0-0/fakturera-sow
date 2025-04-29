import React from 'react'
import GreenButton from '../components/GreenButton'
import Terms from '../components/Terms'


const Body = () => {

  return (
    <div className='flex min-h-screen flex-col items-center'>
      <h1 className='text-3xl text-white font-bold tracking-wide'>Terms</h1>
      <GreenButton text={"Close and Go back"} />
      <Terms />
      <GreenButton text={"Close and Go back"} />
      <div className='h-8'></div>
      
      
    </div>
  )
}

export default Body