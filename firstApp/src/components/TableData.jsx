import React from "react";
import TableBody from "./TableBody.jsx";
import TableHeader from "./TableHeader.jsx";
const TableData = ({ header, data }) => {
  return (
    <table className="table table-bordered table-hover">
      <TableHeader headers={header} />
      <TableBody headers={header} rows={data} />
    </table>
  );
}

export default TableData;