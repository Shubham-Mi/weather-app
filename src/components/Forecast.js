import React from "react";

export default function Forecast({ forecastData }) {
  return (
    <div className="forecast flex flex-grow basis-3/5 flex-col">
      <h3 className="text-light py-5 text-2xl font-bold">
        3 Days <span className="font-light">Forecast</span>
      </h3>
      {forecastData.map((data, index) => (
        <div
          key={index}
          className="flex items-center justify-between gap-2 text-[1rem]"
        >
          <div className="flex items-center justify-between gap-2 text-[1rem]">
            <img src={data.day.condition.icon} alt="icon" />
            <div className="flex flex-col text-base">
              <h4 className="text-base font-bold ">{data.date}</h4>
              <span className="text-indigo-200 opacity-40">
                {data.day.condition.text}
              </span>
            </div>
          </div>
          <div className="grid min-w-max text-base">
            <span>{`${data.day.maxtemp_c}°`}</span>
            <span>{`${data.day.mintemp_c}°`}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
