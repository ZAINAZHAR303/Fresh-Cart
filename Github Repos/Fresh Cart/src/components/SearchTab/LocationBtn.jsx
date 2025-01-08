import { useState } from "react";

import { FmdGoodOutlined } from "@mui/icons-material";
import DeliveryLocation from "./DeliveryLocation";
function LocationBtn({ Text, Height }) {
  const [DelLocation, setDelLocation] = useState(false);

  return (
    <>
      <div
        onClick={() => setDelLocation(true)}
        className={` ${Height} pickLocation  my-4 flex items-center justify-center gap-4 rounded-[10px] border-[2px] p-2 hover:cursor-pointer hover:bg-slate-100 `}>
        <FmdGoodOutlined className="text-gray-400 hover:text-gray-500 " />
        <p>{Text}</p>
      </div>
      {DelLocation && (
        <DeliveryLocation OnClose={() => setDelLocation(false)} />
      )}
    </>
  );
}

export default LocationBtn;
