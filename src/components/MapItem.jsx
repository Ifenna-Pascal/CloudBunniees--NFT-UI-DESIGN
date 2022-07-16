import React from 'react'

function MapItem({id, title, desc}) {
  return (
    <div className="bg-[#7387D0] text-left p-2">
        <h1 className="text-white text-xl font-semibold font-irish" >{id} {title}</h1>
        <div>
            {desc}
        </div>
    </div>
  )
}

export default MapItem