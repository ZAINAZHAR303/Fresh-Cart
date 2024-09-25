import React from "react";
import { Search } from "@mui/icons-material";
function SearchForm({ Height }) {
  return (
    <>
      <form
        className={` ${Height} border-2 my-4 flex items-center px-2 focus:outline-2 outline-slate-700`}>
        <input
          type="search"
          placeholder="Search for products"
          className="w-full p-2 focus:outline-none"
        />
        <Search type="submit" className="text-gray-400 hover:text-gray-500 " />
      </form>
    </>
  );
}

export default SearchForm;
