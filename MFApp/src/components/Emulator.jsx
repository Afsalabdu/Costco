import React, { lazy, Suspense, useEffect, useState } from "react";
import { dataVal, MY_CUSTOM_EVENT, welLblEnum } from "../constants/constant";
import { capitalizeFirstLetter } from "../constants/constant";
const Emulator = lazy(() => import("EmulatorInHost/Emulator"));


const ConsoleEmulators = () => {
    const [data, setData] = useState(dataVal)
    const handleCusomEvent = (e) => {
        let welLblVal = ""
        if (e.detail.data) {
            welLblEnum.map((item) => {
                welLblVal = `${[capitalizeFirstLetter(item)]} : ${e.detail.data[item]}`
            })
            setData(welLblVal)
        }
    }
    useEffect(() => {
        window.addEventListener(MY_CUSTOM_EVENT, handleCusomEvent)
    }, [])

    return (

        <div className="">
            <Suspense fallback={<p>Loading...</p>}>
                <Emulator data={data} />
            </Suspense>
        </div>

    )
}

export default ConsoleEmulators;
