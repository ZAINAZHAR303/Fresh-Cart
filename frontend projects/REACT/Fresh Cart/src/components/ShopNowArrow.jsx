import React from "react";
import { ArrowRight } from "@mui/icons-material";
function ShopNowArrow() {
  return (
    <>
      <a
        href="#!"
        className="bg-green-600 rounded-md text-white font-[500] text-[12px] py-2 px-2 max-w-fit mt-3"
        tabIndex="-1">
        Shop Now
        <ArrowRight />
      </a>
    </>
  );
}

export default ShopNowArrow;
