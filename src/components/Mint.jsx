import React, { useState } from 'react'

function Mint() {
    const [num, setNum] = useState(1);
    const [error, setError] = useState('');
    if (num > 2) {

    }
    return (
        <div id='mint' data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className="md:max-w-[70%] w-[85%] my-12 flex md:flex-row flex-col bg-white rounded-3xl shadow-xl mx-auto w-full h-[450px] md:h-[300px] md:my-20 ">
            <div className='md:w-[35%] w-full h-[40%] md:p-0 p-2 md:h-full'>
                <img src="/img/mint.jpeg" className="w-full  h-full rounded-3xl object-cover  " />
            </div>
            <div className='md:w-[70%] h-full w-full flex flex-col py-4 md:py-6 items-center'>
                <h1 className="text-xl md:text-2xl text-[#415DA7] font-semibold mb-1 font-irish">Public Sale is Life</h1>
                <span className="text-base font-irish text-[#415DA7] mb-1 text-center">please <br /> connect wallet to mint</span>
                <div className="md:w-[70%]  mb-2 w-[90%] flex  mx-auto mt-2 md:my-1">
                    <div className="md:w-[70%] w-[60%] bg-[#B0C8EF] rounded-l-xl py-2 flex  pl-4">
                        <input type="number" value={num} min={1} max={2} step={0.1} onChange={(e) => setNum(e.target.value)} className="border-none text-sm focus:ring-2 w-[80%] focus:border-none rounded-2xl px-2 " />
                    </div>
                    <div className="md:w-[30%] w-[40%] bg-[#7387D0] py-2 flex rounded-r-xl justify-center items-center">
                        <span className="text-white font-semibold font-irish">{num * 0.01} Eth</span>
                    </div>
                </div>
                <div className='md:w-[69%] w-[90%] mx-auto flex items-center justify-between'>
                    <span className="md:text-base text-sm font-irish text-[#415DA7] uppercase">Bunnies Balance: 0</span>
                    <div className="md:w-[30%] w-[40%] bg-[#7387D0] py-1 flex  justify-center items-center">
                        <span className="text-white text-sm text-[#B3CBF1] font-irish">Max Mint 2</span>
                    </div>
                </div>
                <div className='max-w-[70%] w-full flex items-center mx-auto'>
                    <button className="bg-button bg-center py-2 shadow-xl bg-cover w-full text-white uppercase text-xl font-irish border-none rounded-3xl mt-6">connect</button>
                </div>
            </div>
        </div>
    )
}

export default Mint