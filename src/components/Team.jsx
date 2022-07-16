import React from 'react'

function TeamOne({ name, desc, img, background }) {
    return (
        <div className='w-full mb-12 px-3'>
            <h1 className="text-center text-lg font-irish text-white w-full">{name}</h1>
            <div className='relative mt-8'>
                <img src={img} className="w-20 absolute left-[38%] -top-2 " />
                <div className='h-[200px] w-full flex items-center justify-center px-6 bg-teamTwo bg-center bg-cover'>
                    <span className="text-[#82A5EF] w-[80%] mx-auto text-center mt-2 font-irish text-[0.95rem]">{desc}</span>
                </div>
            </div>
        </div>
    )
}

export default TeamOne;