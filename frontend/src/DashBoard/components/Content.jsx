import React, { useState } from 'react'
import { CirclePlus, Printer, ToggleRight } from 'lucide-react'

const inputs = [
  { id: 1, type: 'text', placeholder: 'Search Article No ...' },
  { id: 2, type: 'text', placeholder: 'Search Product ...' },
]

const Buttons = [
  { id: 1, logo: <CirclePlus size={20} />, name: 'New Product' },
  { id: 2, logo: <Printer />, name: 'Print List' },
  { id: 3, logo: <ToggleRight />, name: 'Advanced mode' },
]

const Content = () => {
  const [article, setArticle] = useState('');
  const [product, setProduct] = useState('');



  return (
    <div className='px-10 py-5 h-full'>
      <nav className='flex justify-between items-start w-full'>
        <div className='flex flex-col gap-2.5'>
          {
            inputs.map((item, id) => <input key={id} type={item.type} placeholder={item.placeholder} className='min-w-[250px] text-black/80 text-sm px-4 py-1 rounded-2xl border shadow-xs border-neutral-200 focus:border-neutral-400/80 outline-none' />)
          }
        </div>
        <div className='flex gap-4 items-center'>
          {
            Buttons.map((item, id) => <div key={id}
              className='flex justify-between min-w-36 gap-4 items-center bg-white text-black px-4 py-1.5 rounded-2xl border border-neutral-200 hover:bg-neutral-200/50 cursor-pointer transition-all duration-200 ease-in-out'>
              <span className='hidden md:block text-xs'>{item.name}</span>
              {item.logo}
            </div>)
          }
        </div>
      </nav>

      <main className='mt-5'>
        <table className='table-auto w-full border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 px-4 py-2'>ID</th>
              <th className='border border-gray-300 px-4 py-2'>Name</th>
              <th className='border border-gray-300 px-4 py-2'>Category</th>
              <th className='border border-gray-300 px-4 py-2'>Stock</th>
              <th className='border border-gray-300 px-4 py-2'>Price</th>
              <th className='border border-gray-300 px-4 py-2'>Supplier</th>
              <th className='border border-gray-300 px-4 py-2'>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {
              Array.from({ length: 10 }).map((_, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className='border border-gray-300 px-4 py-2'>{index + 1}</td>
                  <td className='border border-gray-300 px-4 py-2'>Product {index + 1}</td>
                  <td className='border border-gray-300 px-4 py-2'>Category {Math.ceil(Math.random() * 5)}</td>
                  <td className='border border-gray-300 px-4 py-2'>{Math.floor(Math.random() * 100)}</td>
                  <td className='border border-gray-300 px-4 py-2'>${(Math.random() * 100).toFixed(2)}</td>
                  <td className='border border-gray-300 px-4 py-2'>Supplier {Math.ceil(Math.random() * 10)}</td>
                  <td className='border border-gray-300 px-4 py-2'>{new Date().toLocaleDateString()}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </main>
    </div>
  )
}

export default Content