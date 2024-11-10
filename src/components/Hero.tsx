import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/shah.jpg)] bg-left lg:bg-[10%] bg cover picture rounded'
    style={{backgroundSize:"35%"}}>
    <Navbar />
    <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'></div>
    <div className='hidden lg:block'></div>
    <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
      <div>
        <p>I'm</p>
        <p>Shahjarar</p>
        <p>Khan</p>
      </div>
    </div>
    </div>
  )
}

export default Hero


