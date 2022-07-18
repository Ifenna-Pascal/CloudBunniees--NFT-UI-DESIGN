import React from 'react'
import Navbar from '../layout/Navbar'

function Hero() {
  return (
    <div id="home" className="lg:h-[1079px] h-screen relative w-screen bg-hero_mobile lg:bg-hero bg-no-repeat relative  lg:bg-bottom bg-center  bg-cover">
      <Navbar />
      <img src="/img/center.png"className="w-[30%] left-[35%] hidden lg:block top-[30%] absolute" />
      <img src="/img/small_left.png" className="w-[32%] left-0 hidden lg:block top-[50%] absolute object-fit"  />
      <img src="/img/small_right.png" className="w-[32%] right-0 lg:block hidden top-[50%] absolute object-fit" />
      {/* mobile */}
      <img src="/img/center.png"  className="w-40 left-[32%] lg:hidden block top-[34%] absolute" />
      <img src="/img/small_left.png" className="w-40 left-0 lg:hidden block top-[50%] absolute"   />
      <img src="/img/small_right.png" className="w-40 right-0 block lg:hidden top-[50%] absolute"  />
      <h1  data-aos='fade-left'  className="text-4xl  font-irish justify-center  absolute top-[25%] left-[10%] lg:left-[30%]  text-transparent lg:my-12 lg:text-7xl bg-clip-text font-extrabold bg-gradient-to-b from-[#de5e82] to-[#4577d4] flex items-center">CLOUDBUNNIES</h1>
    </div>
  )
}

export default Hero