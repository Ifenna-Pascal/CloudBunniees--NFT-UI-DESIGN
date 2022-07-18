import React from 'react'
import Navbar from '../layout/Navbar'

function Hero() {
  return (
    <div id="home" className="h-[90vh] relative w-screen bg-hero_mobile md:bg-hero bg-no-repeat relative  md:bg-bottom bg-center  bg-cover">
      <Navbar />
      <img src="/img/center.png" className="w-44 left-[45%] hidden lg:block top-[27%] absolute" />
      <img src="/img/left.png" className="w-44 left-[25%] hidden lg:block top-[40%] absolute" />
      <img src="/img/right.png" className="w-44 right-[25%] lg:block hidden top-[40%] absolute" />
      <h1 className="text-4xl  font-irish justify-center  absolute top-[20%] left-[10%] md:left-[30%]  text-transparent md:my-12 md:text-7xl bg-clip-text font-extrabold bg-gradient-to-b from-[#de5e82] to-[#4577d4] flex items-center">CLOUDBUNNIES</h1>
      <div className='max-w-[25%] w-full flex items-center mx-auto'>
        <button className="bg-button bg-center py-4 bg-cover w-full text-white uppercase text-xl font-irish border-none rounded-full mt-[90%]">Explore Bunny</button>
      </div>
    </div>
  )
}

export default Hero