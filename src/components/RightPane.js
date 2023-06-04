import React from "react";
import Search from "./Search";
import Forecast from "./Forecast";

export default function RightPane({ fetchData, realtimeData }) {
  return (
    <div className="right-pane flex flex-col p-6">
      <Search fetchData={fetchData} currentData={realtimeData.current} />
      <Forecast forecastData={realtimeData.forecast.forecastday} />
    </div>
  );
}
