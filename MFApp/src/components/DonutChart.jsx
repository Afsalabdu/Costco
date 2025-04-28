import React, { lazy, Suspense, useEffect, useState } from "react";
import { ChartHeaderEnum, chartInlData, options } from '../constants/constant'
import { MY_CUSTOM_EVENT } from "../constants/constant";
const DonutChart = lazy(() => import("DonutChartInHost/DonutChart"));

const DonutCharts = () => {
    const [data, setData] = useState(chartInlData)
    const handleCusomEvent = (e) => {
        if (e.detail.data) {
            const chartData = []
            chartData.push(ChartHeaderEnum)
            const chartRow = []
            ChartHeaderEnum.map((item) => {
                chartRow.push(e.detail.data[item])
            })
            chartData.push(chartRow)
            setData(chartData)
        }
    }
    useEffect(() => {
        window.addEventListener(MY_CUSTOM_EVENT, handleCusomEvent)
    }, [])

    return (
        <div className="todo-list-container">
            <Suspense fallback={<p>Loading...</p>}>
                <DonutChart data={data} options={options} />
            </Suspense>
        </div>
    )
}

export default DonutCharts;
