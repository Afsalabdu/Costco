import React from "react";
import "./ThirdAppStartPage.css";
import DonutChart from "./components/DonutChart.jsx";
import { options, data } from "./constant/constant.js";
const ThirdAppStartPage = () => {

  return (
    <div className="app">
      <div className="header">
        <h2>Third App</h2>
      </div>
      <DonutChart data={data}
        options={options} />
    </div>
  );
};


export default ThirdAppStartPage;
