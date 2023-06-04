import axios from "axios";
import React, { useState } from "react";
import MainDisplay from "./components/MainDisplay";
import RightPane from "./components/RightPane";

function App() {
  const [realtimeData, setRealtimeData] = useState({
    location: {
      name: "Delhi",
      region: "Delhi",
      country: "India",
      lat: 28.67,
      lon: 77.22,
      tz_id: "Asia/Kolkata",
      localtime_epoch: 1685856644,
      localtime: "2023-06-04 11:00",
    },
    current: {
      last_updated_epoch: 1685856600,
      last_updated: "2023-06-04 11:00",
      temp_c: 29,
      temp_f: 84.2,
      is_day: 1,
      condition: {
        text: "Mist",
        icon: "//cdn.weatherapi.com/weather/64x64/day/143.png",
        code: 1030,
      },
      wind_mph: 3.8,
      wind_kph: 6.1,
      wind_degree: 310,
      wind_dir: "NW",
      pressure_mb: 1008,
      pressure_in: 29.77,
      precip_mm: 0.4,
      precip_in: 0.02,
      humidity: 62,
      cloud: 75,
      feelslike_c: 27,
      feelslike_f: 80.7,
      vis_km: 2.5,
      vis_miles: 1,
      uv: 8,
      gust_mph: 5.4,
      gust_kph: 8.6,
    },
    forecast: {
      forecastday: [
        {
          date: "2023-06-04",
          day: {
            maxtemp_c: 39.8,
            maxtemp_f: 103.6,
            mintemp_c: 31.2,
            mintemp_f: 88.2,
            avgtemp_c: 35.5,
            avgtemp_f: 95.9,
            condition: {
              text: "Patchy rain possible",
              icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
              code: 1063,
            },
          },
        },
        {
          date: "2023-06-05",
          day: {
            maxtemp_c: 39.8,
            maxtemp_f: 103.6,
            mintemp_c: 31.2,
            mintemp_f: 88.2,
            avgtemp_c: 35.5,
            avgtemp_f: 95.9,
            condition: {
              text: "Patchy rain possible",
              icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
              code: 1063,
            },
          },
        },
        {
          date: "2023-06-06",
          day: {
            maxtemp_c: 39.8,
            maxtemp_f: 103.6,
            mintemp_c: 31.2,
            mintemp_f: 88.2,
            avgtemp_c: 35.5,
            avgtemp_f: 95.9,
            condition: {
              text: "Patchy rain possible",
              icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
              code: 1063,
            },
          },
        },
      ],
    },
  });

  const fetchData = async (name) => {
    if (name === "") return;
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: {
        q: name,
        days: 3,
      },
      headers: {
        "X-RapidAPI-Key": "84117cf55bmsh6ab243989d4466bp1b7d57jsn373b656e33ad",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    setRealtimeData(response.data);
  };
  return (
    <div className="App flex h-screen bg-clouds-weather bg-cover bg-center bg-no-repeat">
      <div className="main m-10 flex w-full flex-row divide-x-2 divide-inherit rounded-xl border-8 border-solid border-gray-500">
        <MainDisplay realtimeData={realtimeData} />
        <RightPane fetchData={fetchData} realtimeData={realtimeData} />
      </div>
    </div>
  );
}

export default App;
