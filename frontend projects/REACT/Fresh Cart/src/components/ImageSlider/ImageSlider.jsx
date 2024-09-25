import React from "react";
import Slide from "../../assets/slide-1.jpg";
import Slide2 from "../../assets/slide2.jpg";
import { ArrowRight } from "@mui/icons-material";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ShopNowArrow from "../ShopNowArrow";

function ImageSlider() {
  return (
    <>
      <Swiper
        spaceBetween={35}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-[100%] h-max">
        <SwiperSlide className="flex items-center justify-center">
          <div
            style={{
              background: `url(${Slide}) center center / cover no-repeat `,
              borderRadius: "0.5rem",
              width: "100%",
            }}
            className="swiper_slider bg-cover h-[20rem] bg-center rounded-md   ">
            <div className="flex flex-col justify-center px-8 py-14 ">
              <span className="  bg-yellow-400 text-sm p-2 py-0 text-[11px] font-bold rounded-sm max-w-fit">
                Free Shipping - orders over $100
              </span>
              <h2 className="text-dark max-sm:text-[32px] text-4xl font-bold mt-4">
                Free Shipping on
                <br />
                orders over
                <span className="text-primary text-green-600 "> $100</span>
              </h2>
              <p className="text-lg max-sm:text-[16px] leading-relaxed text-[11px] text-slate-600">
                Free Shipping to First-Time Customers Only, After promotions and
                discounts are applied.
              </p>
              <a
                href="#!"
                className="bg-black rounded-md text-white font-[500] text-[12px] py-2 px-2 max-w-fit mt-3"
                tabIndex="-1">
                Shop Now
                <ArrowRight />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div
            style={{
              background: `url(${Slide2}) center center / cover no-repeat  `,
              borderRadius: "0.5rem",
              width: "100%",
            }}
            className="h-[20rem]">
            <div className="flex flex-col justify-center px-8 py-14">
              <span className=" bg-yellow-600 bg-opacity-60 text-sm p-2 py-0 text-[11px] font-bold rounded-sm max-w-fit">
                Opening Sale Discount 50%
              </span>
              <h2 className="text-dark text-4xl font-bold mt-4 max-sm:text-[32px]">
                SuperMarket For Fresh Grocery
              </h2>
              <p className="text-lg max-sm:text-[16px] text-[11px] text-slate-600">
                Introduced a new model for online grocery shopping and
                convenient home delivery.
              </p>
              <ShopNowArrow />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ImageSlider;
