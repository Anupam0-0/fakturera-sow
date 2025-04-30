import { Book, CircleX, Clipboard, CloudUpload, File, FileText, IdCard, LogOut, Settings, Tag, Tags, User,  } from 'lucide-react'
import React from 'react'

const SideMenu = [
  { id: 1, logo: <File />,name: 'Invoices' },
  { id: 2, logo: <User />,name: 'Customers' },
  { id: 3, logo: <Settings />,name: 'My Business' },
  { id: 4, logo: <Book />,name: 'Invoice Journal' },
  { id: 5, logo: <Tag/> ,name: 'Price List' },
  { id: 6, logo: <FileText />,name: 'Multiple Invoicing' },
  { id: 7, logo: <CircleX />,name: 'Unpaid Invoices' },
  { id: 7, logo: <Tags />,name: 'Offer' },
  { id: 8, logo: <Clipboard />,name: 'Inventory Control' },
  { id: 9, logo: <IdCard />,name: 'Member Invoicing' },
  { id: 10,logo: <CloudUpload />, name: 'Import/Export' },
  { id: 13,logo: <LogOut />, name: 'Log out' },
]


const sidebar = () => {
  return (
    <div className='h-[calc(100vh-5.5rem)] overflow-y-auto px-6 py-1 text-black/70'>
      <div className='flex justify-center items-center border-b-2 mx-2 border-blue-300 mb-4 text-xl py-2 sticky top-0 bg-white opacity-100' > <h2>Menu</h2></div>
      {
        SideMenu.map((item, id) => <div key={id} 
           className='w-full py-2 px-5 rounded flex gap-4 hover:bg-neutral-200/50 cursor-pointer transition-all duration-200 ease-in-out'>
            {item.logo}
            {item.name}
           </div>
        )
      }
    </div>
  )
}

export default sidebar