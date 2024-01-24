import React from 'react'

export default function Wrapper({children}) {
  return (
    <div className='flex w-full wrapper-container gap-x-2'>
        <div className='wrapper-section'></div>
       <div className='w-full children'> {children}</div>
    </div>
  )
}
