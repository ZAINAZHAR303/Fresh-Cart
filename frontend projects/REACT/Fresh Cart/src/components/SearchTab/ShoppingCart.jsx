import React from "react";
import { LocalMallOutlined } from "@mui/icons-material";
function ShoppingCart({ Hidden, count }) {
    console.log(count);
  return (
    
      <div className="relative">
        <LocalMallOutlined className="text-gray-400" />
        <div
          className={`bg-green-600  h-4 w-4 rounded-[50%] absolute -top-1 left-3 text-white flex items-center justify-center text-xs font-bold`}>
          1
        </div>
      </div>
      
   
  );
}
export default ShoppingCart;
