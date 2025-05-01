import { useEffect, useState } from 'react';
import api from '../../lib/axios'; // Adjust the import path as necessary

import { CirclePlus, Printer, ToggleRight, Ellipsis } from 'lucide-react'

const inputs = [
  { id: 1, type: 'text', placeholder: 'Search Article No ...' },
  { id: 2, type: 'text', placeholder: 'Search Product ...' },
]

const Buttons = [
  { id: 1, logo: <CirclePlus size={20} color='#444' />, name: 'New Product' },
  { id: 2, logo: <Printer color='#444' />, name: 'Print List' },
  { id: 3, logo: <ToggleRight color='#444' />, name: 'Advanced mode' },
]

const Content = () => {
  const [products, setProducts] = useState('');


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get('/products');
        setProducts(res.data);
        // console.log(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (id, field, value) => {
    const updated = products.map(product =>
      product.id === id ? { ...product, [field]: value } : product
    );
    setProducts(updated);
  };

  const handleBlur = (id, product) => {
    api.put(`/products/${id}`, product);
  };

  return (
    <div className='h-[calc(100vh-5.5rem)] w-full px-2 lg:px-4 overflow-auto relative'>
      <nav className='flex flex-col lg:flex-row gap-4 sticky top-0.5 z-10 border-b px-4 lg:px-10 border-black/8 py-3 pb-4 bg-white opacity-100 justify-between items-start '>
        <div className='flex flex-col gap-2.5 mx-auto lg:mx-0'>
          {
            inputs.map((item, id) => <input key={id} type={item.type} placeholder={item.placeholder} className='min-w-[300px] w-[85dvw] lg:max-w-[300px] text-black/80 text-sm px-4 py-1 rounded-2xl border shadow-xs border-neutral-200 focus:border-neutral-400/80 outline-none' />)
          }
        </div>

        <div className='flex gap-4 items-center justify-between w-[85vw] mx-auto lg:w-fit lg:mx-0'>
          {
            Buttons.map((item, id) => <div key={id}
              className='flex justify-center lg:justify-between max-w-40 min-w-20 gap-4 items-center bg-white text-black/80 px-3 py-1.5 rounded-3xl border border-neutral-200 hover:bg-neutral-200/50 cursor-pointer transition-all duration-200 ease-in-out'>
              <span className='hidden md:block text-[13px]'>{item.name}</span>
              {item.logo}
            </div>)
          }
        </div>
      </nav>

      <div className='px-2 md:px-4'>
        <table className='table-auto w-full border-collapse mx-auto rounded-2xl relative'>
          <thead className='sticky top-24.5 bg-white opacity-100'>
            <tr className=''>
              <th className='px-4 font-semibold py-4 hidden xl:table-cell'>Article No</th>
              <th className='px-4 font-semibold py-4'>Product/Service</th>
              <th className='px-4 font-semibold py-4'>Price</th>
              <th className='px-4 font-semibold py-4 hidden md:table-cell'>In Price</th>
              <th className='px-4 font-semibold py-4 hidden lg:table-cell'>Unit</th>
              <th className='px-4 font-semibold py-4 hidden xl:table-cell'>In Stock</th>
              <th className='px-4 font-semibold py-4 hidden 2xl:table-cell'>Description</th>
              <th className='px-4 font-semibold py-4 hidden xl:table-cell'></th>
            </tr>
          </thead>
          <tbody className=''>
            {products.length === 0 ? (
              <tr>
                <td colSpan={4} className='text-center text-2xl p-5 text-black/70 font-semibold '>Loading Products ...</td>
              </tr>
            ) : (
              products.map(p => (
                <tr key={p.id}>                
                  <td className='min-w-35 px-2 hidden xl:table-cell'>
                    <input
                      type='text'
                      value={p.articleNo || ''}
                      onChange={(e) => handleChange(p.id, 'articleNo', e.target.value)}
                      onBlur={() => handleBlur(p.id, p)}
                      className='w-full text-center text-sm py-1 my-1 px-3 rounded-xl border border-blue-500/50 outline-blue-500'
                    />
                  </td>
                  <td className='min-w-45 px-2 '>
                    <input
                      type='text'
                      value={p.product || ''}
                      onChange={(e) => handleChange(p.id, 'product', e.target.value)}
                      onBlur={() => handleBlur(p.id, p)}
                      className='w-full text-center text-sm py-1 my-1  px-3 rounded-xl border border-blue-500/50 outline-blue-500'
                    />
                  </td>
                  <td className='min-w-30 px-2 '>
                    <input
                      type='number'
                      value={p.inPrice || ''}
                      onChange={(e) => handleChange(p.id, 'inPrice', e.target.value)}
                      onBlur={() => handleBlur(p.id, p)}
                      className='w-full text-center text-sm py-1 my-1 px-3 rounded-xl border border-blue-500/50 outline-blue-500'
                    />
                  </td>
                  <td className='min-w-30 px-2  hidden md:table-cell'>
                    <input
                      type='number'
                      value={p.price || ''}
                      onChange={(e) => handleChange(p.id, 'price', e.target.value)}
                      onBlur={() => handleBlur(p.id, p)}
                      className='w-full text-center text-sm py-1 my-1 px-3 rounded-xl border border-blue-500/50 outline-blue-500'
                    />
                  </td>
                  <td className='min-w-35 px-2  hidden lg:table-cell'>
                    <input
                      type='text'
                      value={p.unit || ''}
                      onChange={(e) => handleChange(p.id, 'unit', e.target.value)}
                      onBlur={() => handleBlur(p.id, p)}
                      className='w-full text-center text-sm py-1 my-1 px-3 rounded-xl border border-blue-500/50 outline-blue-500'
                    />
                  </td>
                  <td className='min-w-30 px-2  hidden xl:table-cell'>
                    <input
                      type='number'
                      value={p.inStock || ''}
                      onChange={(e) => handleChange(p.id, 'inStock', e.target.value)}
                      onBlur={() => handleBlur(p.id, p)}
                      className='w-full text-center text-sm py-1 my-1 px-3 rounded-xl border border-blue-500/50 outline-blue-500'
                    />
                  </td>
                  <td className='w-full px-2 hidden 2xl:table-cell'>
                    <input
                      type='text'
                      value={p.description || ''}
                      onChange={(e) => handleChange(p.id, 'description', e.target.value)}
                      onBlur={() => handleBlur(p.id, p)}
                      className='w-full text-center text-sm py-1 my-1 px-3 rounded-xl border border-blue-500/50 outline-blue-500'
                    />
                  </td>
                  <td className='text-center pl-2'><Ellipsis color='#0f7ee8' /></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

}

export default Content