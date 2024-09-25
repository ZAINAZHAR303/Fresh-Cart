
import ApiData from "./ApiData";
import PopularBtn from "./Buttons/PopularBtn";
import StarRating from "./star-rating";

function PopularProducts() {
  

 

  if (!ApiData) {
    return <div>No data available</div>; // or some other fallback
  }

  


  return (
    <>
      <h3 className="ml-4 text-[24px] font-bold">Popular Products</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4 gap-4 ">
        {ApiData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 border-[1px] rounded-lg p-4 w-[189.67px] justify-evenly ">
            <PopularBtn
              sale={item.sale !== undefined ? item.sale : null}
              color={"#198754"}
            />
            <img
              src={item.image}
              className="h-[148.46px] w-[148.46px] mb-3"
              alt=""
            />
            <div className="flex flex-col">
              <small className="text-[12.25px] mb-1 text-[#5C6C75]">
                {item.catagory}
              </small>
              <a className="text-[14px] font-semibold text-[#21313C]" href="">
                {item.name}
              </a>
            </div>
            <div className="flex gap-[2px] mb-4">
              <StarRating />
              <p>({item.rating})</p>
            </div>
            <div className="flex justify-between items-center ">
              <span className="text-[14px] font-semibold text-[#001E2B] ">
                {item.price}
              </span>
              
              
              <PopularBtn name={"Add"} color={"#0AAD0A"} icon={"+"} />
            </div>
          </div>
        ))} 
      </div>
    </>
  );
}

export default PopularProducts;
