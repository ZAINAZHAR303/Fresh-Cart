import grocery from "../assets/grocery-banner.png";
import grocery2 from "../assets/grocery-banner-2.jpg";
import ShopNowBtn from "./ShopNowBtn";
function Posters() {
  return (
    <div className="w-full p-4 flex flex-col gap-4  md:flex-row md: justify-between ">
      <div
        style={{
          backgroundImage: `url(${grocery})`,
        }}
        className=" md:w-1/2  h-[220px] box-border  bg-cover bg-center rounded-lg px-8 py-10">
          <h3 className="mb-1 font-bold text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px]">Fruits & Vegetables</h3>
          <p className="mb-4 text-[#5C6C75] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px]">Get Upto 30% Off</p>
          <ShopNowBtn />
        </div>
        <div
        style={{ 
          backgroundImage: `url(${grocery2})`,
        }}
        className=" md:w-1/2  h-[220px] w-auto box-border bg-center bg-cover bg-no-repeat rounded-lg px-8 py-10">
          <h3 className="mb-1 font-bold text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px]">Freshly Baked Buns</h3>
          <p className="mb-4 text-[#5C6C75] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px]">Get Upto 25% Off</p>
          <ShopNowBtn />
        </div>
    </div>
  );
}

export default Posters;
