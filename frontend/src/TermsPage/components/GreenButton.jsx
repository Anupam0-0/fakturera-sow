import React from 'react'

const Button = (props) => {
  const {text} = props
  return (
    <div className='py-3 px-14 bg-[#089E1E] text-white my-9 text-lg rounded-4xl cursor-pointer
shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>{text}</div>
  )
}

export default Button