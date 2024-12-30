import React from 'react'
import Card from './Card'

export default function Cards() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-20 gap-2 flex'>
            <Card width={"basis-1/3"} start={false} para={true} />
            <Card width={"basis-2/3"} start={true} para={false} />
        </div>
    </div>
  )
}
