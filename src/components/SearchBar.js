import React, { useState } from "react";

export default function SearchBar({ fetchData }) {
  const [name, setName] = useState("");
  const updateName = (e) => {
    setName(e.target.value);
  };
  const submitData = (e) => {
    e.preventDefault();
    fetchData(name);
    setName("");
  };
  return (
    <form className="search-bar" onSubmit={submitData}>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-3 top-0 my-auto h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          ></path>
        </svg>
        <input
          type="text"
          autoFocus={true}
          value={name}
          onChange={updateName}
          placeholder="Search"
          className="w-full rounded-md border border-gray-400 bg-transparent py-3 pl-12 pr-4 text-white outline-none placeholder:text-gray-300 focus:border-indigo-600"
        />
      </div>
    </form>
  );
}
