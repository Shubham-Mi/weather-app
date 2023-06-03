import axios from "axios";
import React, { useEffect, useState } from "react";
import MainDisplay from "./components/MainDisplay";
import RightPane from "./components/RightPane";

function App() {
  const APIkey = "50f7f0df58741d1b6fd14791c840fd97";
  const [responseData, setResponseData] = useState({});

  useEffect(() => {
    fetchData("delhi");
  }, []);

  const fetchData = (name) => {
    if (name === "") return;
    console.log(name);
    axios(
      `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=${APIkey}`
    )
      .then((response) => {
        console.log(response.data[0]);
        console.log(response.data[0].lat);
        console.log(response.data[0].lon);
        const lat = response.data[0].lat;
        const lon = response.data[0].lon;
        axios(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`
        ).then((response) => {
          console.log(response.data);
          setResponseData(response.data);
        });
      })
      .catch((error) => {
        console.log("Error fetching data ", error);
      });
  };
  return (
    <div className="App flex h-screen bg-clear-weather bg-cover bg-center bg-no-repeat">
      <div className="main m-10 flex w-full flex-row divide-x-2 divide-inherit rounded-xl border-8 border-solid border-gray-500">
        <MainDisplay />
        <RightPane fetchData={fetchData} />
      </div>
    </div>
  );
}

export default App;
