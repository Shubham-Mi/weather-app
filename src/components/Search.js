import React from "react";
import SearchBar from "./SearchBar";
import Temperature from "./Temperature";

export default function Search({ fetchData, currentData }) {
  return (
    <div className="search flex-grow space-y-8">
      <SearchBar fetchData={fetchData} />
      <Temperature currentData={currentData} />
    </div>
  );
}
