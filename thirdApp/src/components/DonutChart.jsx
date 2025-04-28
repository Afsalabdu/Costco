import React from "react";
import { Chart } from "react-google-charts";


const DonutChart = ({ data, options }) => {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
export default DonutChart
