import React from "react";
import { dispatchCustomEvent } from "../commonUtils/utils";
import { MY_CUSTOM_EVENT } from "../constant/constant";
const TableBody = props => {
  const { headers, rows } = props;
  const columns = headers ? headers.length : 0;
  const showSpinner = rows === null;

  const buildRow = (row, headers) => {
    const hanleRowClick = (rowData) => {
      dispatchCustomEvent(MY_CUSTOM_EVENT, { data: rowData });
    }
    return (
      <tr key={row.id} onClick={() => hanleRowClick(row)}>
        {headers.map((value, index) => {
          return <td key={index}>{row[value]}</td>;
        })}
      </tr>
    );
  }

  return (
    <tbody>
      {showSpinner && (
        <tr key="spinner-0">
          <td colSpan={columns} className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </td>
        </tr>
      )}
      {!showSpinner &&
        rows &&
        rows.map(value => {
          return buildRow(value, headers);
        })}
    </tbody>
  );
};

export default TableBody;
