import React from 'react'

function Icon({ icon }) {
    return (
        <div className='flex items-center md:bg-white  md:hover:bg-blue-100 duration-300 cursor-pointer  md:mr-4 md:p-3  justify-center md:rounded-full'>
            <img src={icon} alt="icon" className="md:w-8 w-6 hover:text-white " />
        </div>
    )
}

export default Icon