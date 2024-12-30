import React from 'react'

export default function Marquee({data}) {
  return (
    <div className='w-full flex items-center justify-evenly overflow-hidden gap-24'>
      {data.map((item,index)=>(
        <img className='w-20' src={item} key={index} alt="images of marquee" />
      ))}
      {data.map((item,index)=>(
        <img className='w-20' src={item} key={index} alt="images of marquee" />
      ))}
    </div>
  )
}
