import React from "react";

import { Link } from "react-router-dom";
import { ShoppingCartOutlined, CloseRounded } from "@mui/icons-material";
import { useState } from "react";
import SearchForm from "./SearchForm";
import LocationBtn from "./LocationBtn";
import Departments from "./Departments";
function SearchTabMobile() {
  return (
    <div className="search-tab-mobile w-full h-full z-50 p-4 ">
      <div className="top flex items-center justify-between my-4 ">
        <div className="left  flex gap-1 items-center  ">
          <ShoppingCartOutlined className="text-green-600" />
          <h1 className="font-bold text-[24px]">FreshCart</h1>
        </div>
        <Link to="/">
          <div className="right">
            <CloseRounded className="text-gray-400 hover:text-gray-500 " />
          </div>
        </Link>
      </div>

      {/* PASTE HERE  */}
      <SearchForm />
      <LocationBtn Text={"Pick Location"} />
      <Departments />
    </div>
  );
}

export default SearchTabMobile;
