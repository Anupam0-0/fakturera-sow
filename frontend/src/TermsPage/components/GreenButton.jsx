import React from 'react'


const Button = (props) => {
  const { text } = props

  const tryCloseTab = () => {
    window.close(); // Works if tab was opened via JS
    window.close('', '_self', ''); history.back()
  };

  return (
    (text &&
      <button onClick={tryCloseTab} href="javascript:close_window();" className='py-3 px-12 xl:px-16 bg-[#089E1E] text-white my-4 sm:my-6 xl:my-9 text-lg rounded-4xl cursor-pointer
      shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'
      >{text}
      </button>
    )
  )
}

export default Button