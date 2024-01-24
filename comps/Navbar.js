import React from "react";
import { IoIosSearch } from "react-icons/io";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

export default function Navbar() {
  return (
    <div className="search-container">
      <label>
        <IoIosSearch className="search-icon" />
        <input type="search" placeholder="Search Apps and Games" />
      </label>
      <div>
        <HiAdjustmentsHorizontal className="filter-icon" />
      </div>
    </div>
  );
}
