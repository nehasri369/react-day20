import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import About from './pages/About'
import Signup from './pages/Signup'
import "./App.css"

const App = () => {

  const Router = createBrowserRouter([
    {
      path:"/home",
      element:<div>
        <Navbar />
        <Home />
      </div>
    },

     {
      path:"/login",
      element:<div>
        <Navbar />
        <Login />
      </div>
    },

    {
      path:"/",
      element:<div>
        <Navbar />
        <Signup />
      </div>
    }
  ])
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  )
}

export default App