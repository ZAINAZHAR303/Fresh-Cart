import React from "react";
import BannerImg from "../assets/banner-deal.jpg";

import ShopNowArrow from "./ShopNowArrow";
function BestSells() {
  return (
    <>
      <h3 className="font-bold text-[24px] ml-4">Daily Best Sells</h3>
      <div
        style={{ backgroundImage: `url(${BannerImg})` }}
        className="bg-cover h-[470px] bg-center bg-no-repeat m-4 rounded-lg py-8 px-6 ">
        <h3 className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[46px] mb-2 font-semibold text-white ">
          100% Organic Coffee Beans.
        </h3>
        <p className="text-white font-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px] mb-4 ">
          Get the best deal before close.
        </p>
        <ShopNowArrow className="" />
      </div>
    </>
  );
}

export default BestSells;
