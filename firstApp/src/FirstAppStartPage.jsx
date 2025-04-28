import React from "react";
import "./FirstAppStartPage.css";
import TableData from "./components/TableData.jsx";
import { header, data } from "./constant/constant.js";
const FirstAppStartPage = () => {

  return (
    <div className="app">
      <h2>First App</h2>
      <TableData header={header} data={data} />
    </div>
  );
};


export default FirstAppStartPage;
