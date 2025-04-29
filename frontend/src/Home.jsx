import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';


const Home = () => {
    const redirect = useNavigate();
    useEffect(() => {
        redirect("/terms");
    }, []);

  return (
    <div>Home</div>
  )
}

export default Home