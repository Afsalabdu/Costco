import React, { lazy, Suspense, useState , useEffect} from "react";
import {axiosInstance} from '../service/axiosInstance';
import { headerEnum } from "../constants/constant";
const TableData = lazy(() => import("TableInHost/TableData"));

const DisplayTable = () => {
    const [header, setHeader] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        axiosInstance.get('/products') // Replace with your API endpoint
            .then(response => {
                if (response.data) {
                    setHeader(headerEnum)
                    if( response.data['products']){                 
                    setData( response.data['products'].slice(0,8))
                    }
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div className="table-responsive">
            <Suspense fallback={<p>Loading...</p>}>
                <TableData header={header} data={data} />
            </Suspense>
        </div>
    )
}

export default DisplayTable;
