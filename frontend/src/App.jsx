import React from 'react'
import Navbar from './sections/Navbar'
import Body from './sections/Body'


const App = () => {
  return (
    <div id='terms-page' className=' '>
      <div className='max-w-[80rem] mx-auto px-14'>
        <Navbar />
        <Body /> 
      </div>

    </div>
  )
}

export default App