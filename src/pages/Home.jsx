import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();


  return (
    <div className='head'>
      <h2 className='namee'> Welcome to my Webpage 👋</h2>
    </div>
  )
}

export default Home