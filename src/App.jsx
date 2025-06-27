import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'


const App = () => {
  return (
    <div className='relative w-screen min-h-screen overflow-x-auto'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
