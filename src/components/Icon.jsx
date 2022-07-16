import React from 'react'

function Icon({ icon }) {
    return (
        <div className='flex items-center bg-white h-10 w-10 md:h-14 md:w-14 mr-4 md:mr-6 justify-center rounded-full'>
            <i className={`${icon} text-[#889FDC] text-[1.3rem] md:text-[2rem]`}></i>
        </div>
    )
}

export default Icon