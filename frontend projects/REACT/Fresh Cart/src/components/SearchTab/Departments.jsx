import { useState } from "react";
import tabs from "./SearchTabData";
import {
  KeyboardArrowDownOutlined,
  WidgetsOutlined,
} from "@mui/icons-material";

function Departments({ MainFlex, SubFlex, SubTabs }) {
  const [singleSelected, setSingleSelected] = useState(null);

  const HandleSingleSelected = (id) => {
    setSingleSelected(singleSelected === id ? null : id);
  };
  return (
    <div className={`${MainFlex}`}>
      <div className="btnDepartment bg-green-600 my-4 flex items-center justify-center px-4 font-bold gap-4 py-2 rounded-[10px] hover:cursor-pointer ">
        <WidgetsOutlined className="text-white" />
        <h1 className="text-white font-regular text-[16px]">All Departments</h1>
      </div>
      <div className={`${SubFlex}`}>
        {tabs && tabs.length ? (
          tabs.map((tab, index) => (
            <div>
              <div
                className="div flex hover:cursor-pointer items-center justify-between my-4 font-semibold hover:text-green-600 drop-shadow-2xl p-2 "
                onClick={() => HandleSingleSelected(tab.id)}
                key={tab.id}>
                {tab.name}
                <KeyboardArrowDownOutlined className="text-gray-400" />
              </div>

              {singleSelected === tab.id && (
                <div
                  className={`bg-white ${SubTabs} rounded-[10px] my-4 drop-shadow-2xl p-1`}>
                  {tab.subtabs.map((subtab) => (
                    <div
                      key={subtab.id}
                      className="my-4 font-light rounded-[5px] p-2  hover:bg-slate-100 hover:cursor-pointer ">
                      {subtab}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <div>nothing here</div>
        )}
      </div>
    </div>
  );
}

export default Departments;
