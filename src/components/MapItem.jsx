import React from 'react'

// function MapItem({ id, title, desc }) {
//   return (
//     <div className="bg-[#7387D0] text-left w-full rounded-md p-2">
//       <h1 className="text-white text-xl font-semibold font-irish" >{id} {title}</h1>
//       <div className="mt-3 text-white text-base font-irish">
//         {desc}
//       </div>
//     </div>
//   )
// }

const MapItem = ({ inverse, id, title, desc }) => {
  return (
    <div className={`md:max-w-[85%] mx-auto relative flex flex-row items-center ml-6 md:ml-0 justify-between ${inverse ? "flex-row-reverse" : "flex-row"}`}>
      <img src="/img/dummy.png" className={`w-10 md:w-12 absolute -left-6 md:left-[45.5%] top-0`} />
      <div data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className='md:basis-[50%] w-full p-3'>

        <div className="bg-[#7387D0] text-left w-[95%] md:w-[90%] rounded-md p-4 md:p-6">
          <h1 className="text-white text-xl font-semibold font-irish" >{id} {title}</h1>
          <div className="mt-4 text-white text-base font-irish">
            {desc}
          </div>
        </div>
      </div>
      <div className='flex hidden  basis-[50%] p-3  md:flex items-center justify-center'>
        <img src={inverse ? "/img/dummy.png" : "/img/dummyRight.png"} className="w-36" />
      </div>
    </div>
  )
}

export default MapItem