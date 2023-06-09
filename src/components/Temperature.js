import React from "react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";

export default function Temperature({ currentData }) {
  const windDirections = {
    N: "North",
    E: "East",
    S: "South",
    W: "West",
  };
  return (
    <div className="temperature text-center">
      <span className="text-7xl">{currentData.temp_c}°C</span>
      <span className="flex flex-row text-center">
        <Bars3BottomRightIcon className="mr-4 h-6 w-6 text-gray-500" />
        <p>
          {windDirections[currentData.wind_dir[0]]}, {currentData.wind_kph} km/h
        </p>
      </span>
    </div>
  );
}
