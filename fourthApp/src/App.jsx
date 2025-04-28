import React from "react";
import "./App.css";
import Emulator from "./components/Emulator.jsx";
import { data } from "./constant/constant.js";
const App = () => {

  return (
    <div>
      <Emulator data={data} />
    </div>
  );
};


export default App;
