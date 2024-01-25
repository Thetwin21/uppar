import React from 'react'

export default function Wrapper({children}) {
  return (
    <div className='flex w-full wrapper-container gap-x-2 overflow-x-hidden'>
        <div className='wrapper-section min-w-[123px]'></div>
       <div className='wrapper_ w-full children'> {children}</div>
    </div>
  )
}
