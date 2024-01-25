import NavWrapper from '@/comps/Nav-wrapper'
import Navbar from '@/comps/Navbar'
import React from 'react'

const Events = () => {
  return (
    <div>
         <NavWrapper>
        <h2 className="text-4xl font-bold ">
          App: Experience more in the decentralized web
        </h2>
        <Navbar />
      </NavWrapper>
    </div>
  )
}

export default Events