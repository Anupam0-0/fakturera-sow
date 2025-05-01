import React from 'react'

const Test = () => {
    return (
        <div>
            <div id="screen" className="h-screen overflow-auto py-10">
                <div className='flex flex-col  gap-5'>
                    {Array.from({ length: 22 }).map((_, index) => (
                        <div
                            key={index}
                            className="border-2 bg-white/50 border-black/20 h-16 w-96 mx-auto rounded-full"
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Test