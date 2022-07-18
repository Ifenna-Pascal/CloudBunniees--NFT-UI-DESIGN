import React from 'react'
import Navbar from '../layout/Navbar'

function Hero() {
  return (
    <div id="home" className="h-screen relative w-screen bg-hero_mobile md:bg-hero bg-no-repeat relative  md:bg-bottom bg-center  bg-cover">
      <Navbar />
      <img src="/img/center.png" data-aos='fade-up'  data-aos-duration='700' className="w-44 left-[45%] hidden lg:block top-[27%] absolute" />
      <img src="/img/left.png" className="w-44 left-[25%] hidden lg:block top-[40%] absolute" data-aos='fade-left'  data-aos-duration='500' />
      <img src="/img/right.png" className="w-44 right-[25%] lg:block hidden top-[40%] absolute" data-aos='fade-right'  data-aos-duration='600' />
      {/* mobile */}
      <img src="/img/small_center.png" data-aos='fade-up'  data-aos-duration='700' className="w-24 left-[38%] md:hidden block top-[34%] absolute" />
      <img src="/img/small_left.png" className="w-36 left-0 md:hidden block top-[45%] absolute" data-aos='fade-left'  data-aos-duration='500' />
      <img src="/img/small_right.png" className="w-36 right-0 block md:hidden top-[45%] absolute" data-aos='fade-right'  data-aos-duration='600' />
      <h1  data-aos='fade-left'  className="text-4xl  font-irish justify-center  absolute top-[20%] left-[10%] md:left-[30%]  text-transparent md:my-12 md:text-7xl bg-clip-text font-extrabold bg-gradient-to-b from-[#de5e82] to-[#4577d4] flex items-center">CLOUDBUNNIES</h1>
    </div>
  )
}

export default Hero