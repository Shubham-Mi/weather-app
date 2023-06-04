import React from "react";
import HourlyForecast from "./HourlyForecast";
import Title from "./Title";

export default function MainDisplay({ realtimeData }) {
  return (
    <div className="main-display flex basis-4/5 flex-col p-6">
      <Title realtimeData={realtimeData} />
      <HourlyForecast />
    </div>
  );
}
