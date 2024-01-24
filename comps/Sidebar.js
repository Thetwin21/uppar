"use client"
import { SideNavItem } from "@/app/styles/const";
import Link from "next/link";
import React from "react";
// import logo from "../assets/discovery.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const path = usePathname()
  return (
    <div className="fixed h-screen border-r sidebar">
    <Image
        src={require("../assets/Upar - logo 1.svg")}
        width={40}
        height={40}
      />
      <ul className="flex flex-col nav gap-y-3">
        {SideNavItem.map((item, index) => {
          return (
            <li key={index} className={`list-none ${item.path === path ? 'text-bold' : ''}`}>
              <Link href={item.path}>
                <span className=" nav-items">{item.icon} <h4>{item.title}</h4></span>
                
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
