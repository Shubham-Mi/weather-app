import React from "react";
import SearchBar from "./SearchBar";
import Temperature from "./Temperature";

export default function Search({ fetchData }) {
  return (
    <div className="search flex-grow">
      <SearchBar fetchData={fetchData} />
      <Temperature />
    </div>
  );
}
