import React from "react";
import { capitalizeFirstLetter } from "../commonUtils/utils";
const TableHeader = props => {
  const { headers } = props;
  return (
    <thead className="thead-dark" key="header-1">
      <tr key="header-0">
        {headers &&
          headers.map((value, index) => {
            return (
              <th key={index}>
                <div>{capitalizeFirstLetter(value)}</div>
              </th>
            );
          })}
      </tr>
    </thead>
  );
};

export default TableHeader;
