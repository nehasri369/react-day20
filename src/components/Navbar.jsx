import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h2 className="welcome">Welcome 👋</h2>
        
        <Link to="/"><button>Sign Up</button></Link>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/home"><button>Home</button></Link>

    </div>
  )
}

export default Navbar