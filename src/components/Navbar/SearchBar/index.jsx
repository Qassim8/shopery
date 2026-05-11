import React from "react";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
  return (
    <form className="max-w-full lg:w-125 flex items-center border border-gray-100 rounded-md overflow-hidden">
      <div className="flex items-center gap-2 px-2 md:px-4 grow">
        <RiSearchLine className="md:text-xl" />
        <input
          className="outline-0 w-3/4 md:w-full md:grow"
          type="search"
          placeholder="Search"
        />
      </div>
      <button className="py-3.5 px-6 text-sm text-white bg-(--main-color)">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
