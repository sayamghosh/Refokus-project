import React from 'react'

export default function Stripe({url,number}) {
  return (
    <div className='w-full px-4 py-3 border-t-[1.5px] border-b-[1px] border-r-[1px] border-t-zinc-400 border-zinc-600 flex justify-between items-center'>
        <span>
            <img className='w-24' src={url} alt="image" />
        </span>
        <span className='font-semibold font-sans text-zinc-300'>{number}</span>
    </div>
  )
}
