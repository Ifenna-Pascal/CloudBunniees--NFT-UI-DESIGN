import React from 'react'
import Navbar from '../layout/Navbar'

function Hero() {
  return (
    <div className="h-[90vh] bg-hero bg-no-repeat bg-center  bg-cover">
      <Navbar />
      <h1 className="text-4xl py-32 font-irish justify-center text-transparent md:my-12 md:text-8xl bg-clip-text font-extrabold bg-gradient-to-b from-[#FF96B3] to-[#85A5DF] flex items-center">CLOUDBUNNIES</h1>
    </div>
  )
}

export default Hero