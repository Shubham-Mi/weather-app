import React from "react";
import MianDisplay from "./components/MianDisplay";
import RightPane from "./components/RightPane";

function App() {
  return (
    <div className="App flex h-screen bg-clear-weather bg-cover bg-center bg-no-repeat">
      <div className="main m-10 flex w-full flex-row items-stretch rounded-xl border-8 border-solid border-gray-500">
        <MianDisplay />
        <RightPane />
      </div>
    </div>
  );
}

export default App;
