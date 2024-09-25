import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderData from "./SliderData";
function ApiTest() {
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container w-[95%] flex flex-col gap-4 ml-5 h-max mt-[4rem] p-4 ">
      <h1 className="text-[30px] font-[500]">Featured Catagories</h1>

      <Slider {...settings}>
        {SliderData &&
          SliderData.slice(0, 10).map((item) => (
            <div
              key={item.id}
              className="flex flex-col hover:border-green-400 hover:shadow-lg mb-2 hover:shadow-green-300/20 items-center justify-center h-max p-4 max-w-[160px] border-[1px] rounded-lg ">
              <img
                src={item.image}
                alt="image"
                className="h-[120px] w-[120px] "
              />

              <p className=" text-center mt-2 text-[#5C6C75] text-[12px]">
                {item.name}
              </p>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default ApiTest;
