import React from 'react'
import NavWrapper from '@/comps/Nav-wrapper'
import Navbar from '@/comps/Navbar'
import { NewArrival, SponsoredAdd } from '../page'

export default function Upcoming() {
  return (
    <div>
      <NavWrapper>
        <h2 className="text-4xl font-bold ">
        New: Explore Upcoming Apps and Games 
        </h2>
        <Navbar />
      </NavWrapper>
      <SponsoredAdd />
      <NewArrival />
    </div>
  )
}

