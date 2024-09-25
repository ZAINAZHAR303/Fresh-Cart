import React from "react";

import { Link } from "react-router-dom";

import {
  FavoriteBorderOutlined,
  PersonOutlineRounded,
  MenuOpenOutlined,
} from "@mui/icons-material";
import SearchForm from "../SearchTab/SearchForm";
import LocationBtn from "../SearchTab/LocationBtn";
import ShoppingCart from "../SearchTab/ShoppingCart";
import Departments from "../SearchTab/Departments";
function TopBar() {
  return (
    <>
      <div className="py-4">
        <div className="topbar px-4 flex items-center justify-between   ">
          <div className="topbarLeft flex gap-1 items-center  ">
            <img
              src="https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg"
              alt=""
            />
          </div>
          <div className="max-lg:hidden flex w-[50%] gap-2  items-center ">
            <div className="w-[80%]">
              <SearchForm Height={"h-[3rem] rounded-lg"} />
            </div>
            <div>
              <LocationBtn Text={"Location"} Height={"h-[3rem] w-[8rem]"} />
            </div>
          </div>
          <div className="topbarRight flex items-center gap-4 ">
            <div className="relative">
              <FavoriteBorderOutlined className="text-gray-400 " />
              <div className="bg-green-600 h-4 w-4 rounded-[50%]  absolute -top-1 left-3 text-white flex items-center justify-center text-xs font-bold    ">
                5
              </div>
            </div>
            <PersonOutlineRounded className="text-gray-400 " />

            <ShoppingCart />
            <Link to="/search" className="lg:hidden">
              <MenuOpenOutlined className="text-green-600  " />
            </Link>
          </div>
        </div>
        <div className="max-lg:hidden">
          <Departments
            MainFlex={"flex px-8 gap-4"}
            SubFlex={"flex"}
            SubTabs={"fixed z-20 top-[8rem]"}
          />
        </div>
      </div>
    </>
  );
}

export default TopBar;
