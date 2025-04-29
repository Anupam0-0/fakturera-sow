import React from 'react'




const sidebar = () => {
  return (
    <div className='shadow-xl/30 h-[calc(100vh-5.5rem)] overflow-y-auto px-6 py-4'>
      {
        Array.from({ length: 20 }).map((_, id) => <div key={id} 
           className='py-8 border border-neutral-700/10 shadow-sm rounded-lg mb-3'>
            
           </div>
        )
      }
    </div>
  )
}

export default sidebar