import React from "react";
import tableCol from "../data/tableCol";
import data from "../data/fakeBookings.json";
const Table = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {tableCol.map(colName => {
              return <th>{colName}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          <tr>
            {data.map(client => {
              return <td>{client.title}</td>;
            })}
          </tr>
          <tr>
            {data.map(client => {
              return <td>{client.firstName}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
