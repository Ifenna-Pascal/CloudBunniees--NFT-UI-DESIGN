import React from 'react'

function Icon({ icon }) {
    return (
        <div className='flex items-center bg-white  hover:bg-blue-100 duration-300 cursor-pointer mr-4 p-3 justify-center rounded-full'>
            <img src={icon} alt="icon" className="w-5 hover:text-white " />
        </div>
    )
}

export default Icon