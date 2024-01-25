import NavWrapper from '@/comps/Nav-wrapper';
import Navbar from '@/comps/Navbar';
import React from 'react'
import { BestApp, NewArrival } from '../page';
import { GamesTrending } from '@/data/TrendingGames';

const Games = () => {
  return (
    <div>
         <div>
      <NavWrapper>
        <h2 className="text-4xl font-bold ">
        Games: Experience more in the decentralized web
        </h2>
        <Navbar />
      </NavWrapper>
      <TrendinGames />
      <NewArrival />
      <NewArrival />
      <BestApp />
    </div>
    </div>
  )
}

export default Games

export function TrendinGames() {
  return (
    <div className=" w-full mb-10">
      <div className="flex flex-wrap gap-7 my-6">
        {GamesTrending.map((item, index) => (
          <div className="">
            <div className="w-[420px] h-[250px] overflow-hidden rounded-xl relative ">
              {item.img}
              <div className="trending-apps flex w-full h-[70px] gap-x-3 absolute z-10 bg-[#120F0F] bottom-0 left-0 p-1">
                <div className=" rounded-xl overflow-hidden">
                  {item.devLogo}
                </div>
                <div className="text-[#FFFFFF]">
                  <h5 className="text=[20px] font-semibold">{item.appName}</h5>
                  <p className="text-[12px]">{item.category}</p>
                  <p className="text-[12px]">{item.rate}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}