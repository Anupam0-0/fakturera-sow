import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';


const Home = () => {
    const redirect = useNavigate();
    useEffect(() => {
      setTimeout(() => {
        redirect("/terms");
      }
      , 5000); // Redirect after 2 seconds
    }, []);

  return (
    <div className='p-6 text-xl'>This is Home Page. You will soon be redirected to /<a className='text-blue-600 underline'>terms</a> page </div>
  )
}

export default Home