import React from 'react'

function Mint() {
    return (
        <div className="md:max-w-[60%] w-[80%] my-12 flex md:flex-row flex-col bg-white rounded-2xl shadow-xl mx-auto w-full h-[600px] md:h-[300px] md:my-8 ">
            <div className='md:w-[30%] w-full h-[40%] md:h-full'>
                <img src="/img/mint.jpeg" className="w-full  h-full rounded-2xl object-cover  " />
            </div>
            <div className='md:w-[70%] h-full flex flex-col py-6 items-center'>
                <h1 className="text-2xl text-[#415DA7] font-semibold mb-2 font-irish">Public Sale is Life</h1>
                <span className="text-base font-irish text-[#415DA7] mb-1 text-center">please <br /> connect wallet to mint</span>
                <div className="md:w-[70%]  mb-3 flex  mx-auto mt-3 md:my-1">
                    <div className="md:w-[70%] w-[60%] bg-[#B0C8EF] rounded-l-xl py-2 flex  pl-4">
                        <input type="number"  className="border-none focus:ring-2 w-[80%] focus:border-none rounded-2xl px-2 " />
                    </div>
                    <div className="md:w-[30%] w-[40%] bg-[#7387D0] py-2 flex rounded-r-xl justify-center items-center">
                        <span className="text-white font-semibold font-irish">0.03 Eth</span>
                    </div>
                </div>
                <div className='md:w-[69%] w-[80%] mx-auto flex items-center justify-between'>
                    <span className="md:text-base text-sm font-irish text-[#415DA7] uppercase">Bunnies Balance: 0</span>
                    <div className="md:w-[30%] w-[40%] bg-[#7387D0] py-1 flex  justify-center items-center">
                        <span className="text-white text-base text-[#B3CBF1] font-irish">Max Mint 2</span>
                    </div>
                </div>
                <div className='max-w-[70%] w-full flex itemsc-centr mx-auto'>
                    <button className="bg-button bg-center py-2 shadow-xl bg-cover w-full text-white uppercase text-xl font-irish border-none rounded-3xl mt-6">connect</button>
                </div>
            </div>
        </div>
    )
}

export default Mint