import React from 'react'
import Navbar from '../layout/Navbar'

function Hero() {
  return (
    <div id="home" className="h-[90vh] w-screen bg-hero bg-no-repeat relative bg-bottom  bg-cover">
      <Navbar />
      <h1 className="text-4xl  font-irish justify-center text-transparent md:my-12 md:text-8xl bg-clip-text font-extrabold bg-gradient-to-b from-[#de5e82] to-[#4577d4] flex items-center">CLOUDBUNNIES</h1>
    </div>
  )
}

export default Hero