import React, { useState } from "react";

function PopularBtn({ color, sale, name, icon, }) {
  
  return (
    <>
      {
        color &&
        color === "#0AAD0A" ?
        <button style={{backgroundColor: `${color}`}}  className="  rounded-sm text-white w-16 px-[2px] py-[2px]">{icon} {name}</button> :
        <button className="text-[10px] w-[35px] font-semibold text-white rounded-[4px] px-2 py[2px]" style={{ backgroundColor:sale === "Sale" ? "#DB3030" : color}} >{sale}</button>
      }
      
      
    </>
  );
}

export default PopularBtn;
