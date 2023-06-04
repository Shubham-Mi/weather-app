import React from "react";

export default function HourlyForecast({ hourlyData }) {
  return (
    <div className="hourly-forecast mt-8 flex basis-1/5 justify-between space-x-4">
      {hourlyData.map((data, index) => {
        return index >= 9 && index <= 18 ? (
          <div key={index} className="flex flex-col items-center space-y-1">
            <span>{data.time.slice(11)}</span>
            <img alt="img" src={data.condition.icon} />
            <span>{data.temp_c}°C</span>
          </div>
        ) : (
          <></>
        );
      })}
    </div>
  );
}
