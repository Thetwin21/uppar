import React from 'react'

export default function Wrapper({children}) {
  return (
    <div className='flex gap-x-2'>
        <div className='wrapper-section'></div>
        {children}
    </div>
  )
}
