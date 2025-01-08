import React, { useRef } from "react";

import data from "../Navbar/LoacationDats";

import { CloseOutlined } from "@mui/icons-material";
function DeliveryLocation({ OnClose }) {
  const modelRef = useRef();
  const CloseModel = (e) => {
    if (modelRef.current === e.target) {
      OnClose();
    }
  };
  return (
    <div
      ref={modelRef}
      onClick={CloseModel}
      className=" fixed z-30 inset-0 h-screen w-screen bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
      <div className="wrapper w-[90%] p-4 rounded-[10px] bg-white ">
        <div className="top flex justify-between my-4">
          <div className="left flex flex-col">
            <p className="font-[600] text-[20px] ">
              Choose your Delivery Location
            </p>
            <p className="text-[12px] font-[500]">
              Enter your address and we will specify the offer you area.
            </p>
          </div>

          <CloseOutlined onClick={OnClose} />
        </div>
        <div className="search my-4">
          <input
            type="text"
            placeholder="Search your area"
            className="p-2 border-2 w-full rounded-lg"
          />
        </div>
        <div className="location flex items-center justify-between my-4">
          <p className="text-[18px] font-[500] ">Selact Location</p>
          <button className="p-1 bg-none border-[2px] rounded-md ">
            Clear All
          </button>
        </div>
        <div>
          {data && data.length ? (
            data.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between my-4 border-b-[1px] hover:bg-slate-100 p-2">
                <p>{item.city}</p>
                <p>{item.min}</p>
              </div>
            ))
          ) : (
            <div>no data</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DeliveryLocation;
