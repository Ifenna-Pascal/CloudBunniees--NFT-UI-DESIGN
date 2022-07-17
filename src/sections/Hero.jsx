import React from 'react'
import Navbar from '../layout/Navbar'

function Hero() {
  return (
    <div id="home" className="h-[90vh] relative w-screen bg-hero_mobile md:bg-hero bg-no-repeat relative  md:bg-bottom bg-center  bg-cover">
      <Navbar />
      <h1 className="text-4xl  font-irish justify-center  absolute top-[30%] left-[10%] md:left-[25%]  text-transparent md:my-12 md:text-8xl bg-clip-text font-extrabold bg-gradient-to-b from-[#de5e82] to-[#4577d4] flex items-center">CLOUDBUNNIES</h1>
    </div>
  )
}

export default Hero