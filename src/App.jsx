import React from 'react'
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <div className='relative w-screen min-h-screen overflow-x-auto'>
      <Navbar />
      <section id='home' className='min-h-screen'></section>
      <section id='domains'  className='min-h-screen'></section><section className='min-h-screen'></section>
    </div>
  )
}

export default App
