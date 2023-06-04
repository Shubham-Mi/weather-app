import React from "react";

export default function Title({ realtimeData }) {
  console.log("title", realtimeData);
  return (
    <div className="title flex basis-4/5 flex-col justify-between">
      <div className="flex justify-between">
        <span className="text-5xl">
          {realtimeData.location.name}, {realtimeData.location.region},{" "}
          {realtimeData.location.country}
        </span>
        <span className="text-2xl">{new Date().toLocaleString() + ""}</span>
      </div>
      <div className="pb-4 text-end text-9xl">
        {realtimeData.current.condition.text}
      </div>
    </div>
  );
}
