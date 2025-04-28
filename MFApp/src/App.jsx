import React, { useState, useEffect, lazy, Suspense } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
// import FoodList from "./components/FoodList.jsx";
import Emulators from './components/Emulator.jsx'
import DisplayTable from "./components/DisplayTable.jsx";
import DonutChart from "./components/DonutChart.jsx"

import "./style.css";

const App = () => {
  return (
    <>

      <Header />
      <div className="container">
        <div className="row mt-3 justify-content-between">
          <div className="col-sm-8 p-3 border border-secondary">
            <h4 className="p-1 mb-1 mt-1 text-center bg-secondary text-white"> Table</h4>
            <DisplayTable />
          </div>
          <div className="col-sm-4 p-3  border-bottom border-top border-right border-secondary">
            <h4 className="p-1 mb-1 mt-1 text-center bg-secondary text-white"> Chart</h4>
            <DonutChart />
          </div>
        </div>
        <div className="row  mt-3 mb-3">
          <div className="col-sm p-3 border border-secondary">
            <Emulators />
            {/* <FoodList /> */}
          </div>
        </div>
      </div>
      <Footer />

    </>
  )
}

export default App;
