import React from 'react'

function Navbar() {
  return (
    <nav className="py-12 hidden md:block ">
      <div className='max-w-[85%] relative px-12 mx-auto w-full bg-blue-200 justify-between flex items-center  rounded-[2rem]'>
        <div className='py-4 w-[40%] justify-self-start flex justify-between'>
          <span className="uppercase font-irish text-base text-blue-500">Home</span>
          <span className="uppercase font-irish text-base text-blue-500">Mint NFT</span>
          <span className="uppercase font-irish text-base text-blue-500">Roadmap</span>
          <span className="uppercase font-irish text-base text-blue-500">Team</span>
          <span className="uppercase font-irish text-base text-blue-500">Faq</span>
        </div>

      <img src="/img/logo.png" className="w-24 absolute left-[50%]" />
 
        <div className='py-4 w-[23%] justify-self-end  content-end flex justify-between'>
           <img  src="/img/web.png" alt='telegram' className='w-10 object-fit'/>
           <img  src="/img/telegram.png" alt='telegram' className='w-10 object-fit'/>
           <img  src="/img/twitter.png" alt='telegram' className='w-10 object-fit'/>
           <img  src="/img/discord.png" alt='telegram' className='w-10 object-fit'/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar