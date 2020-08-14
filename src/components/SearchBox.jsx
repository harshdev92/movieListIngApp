import React from "react";

function SearchBox({ onSearchChange }) {
  return (
    <div className="relative flex w-1/4  flex-wrap items-end justify-end mb-3">
      <input
        type="text"
        onChange={onSearchChange}
        className="px-3 py-3 placeholder-gray-400 text-gray-700 relative rounded text-sm z-10 outline-none focus:outline-none focus:shadow-outline w-full pr-10 bg-black bg-opacity-0"
      />
      <span className="h-full leading-snug font-normal absolute text-center text-gray-400 absolute rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
        <img
          src={process.env.PUBLIC_URL + "/slices/search.png"}
          alt="back_Button"
          className="w-5"
        />
      </span>
    </div>
  );
}

export default SearchBox;
