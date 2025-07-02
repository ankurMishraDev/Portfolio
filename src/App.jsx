import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Domains from './Components/Domains'


const App = () => {
  return (
    <div className='relative w-screen min-h-screen overflow-x-auto'>
      <Navbar />
      <Home />
      <Domains />
    </div>
  )
}

export default App
