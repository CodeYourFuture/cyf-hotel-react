import React, { useState } from "react";
import moment from "moment";

const SearchResults = ({ bookings }) => {
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">nights</th>
          </tr>
        </thead>
        <tbody className="bodyClass">
          {bookings.map(booking => {
            return <TableRow rowData={booking} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({ rowData }) => {
  console.log(rowData);
  const [color, setColor] = useState("");
  function highLightRow() {
    if (color === "") {
      setColor("yellow");
    } else {
      setColor("");
    }
  }
  return (
    <tr onClick={highLightRow} className={color}>
      <td>{rowData.id}</td>
      <td>{rowData.title}</td>
      <td>{rowData.firstName}</td>
      <td>{rowData.surname}</td>
      <td>{rowData.email}</td>
      <td>{rowData.roomId}</td>
      <td>{rowData.checkInDate}</td>
      <td>{rowData.checkOutDate}</td>
      <td>
        {moment(rowData.checkOutDate).diff(moment(rowData.checkInDate), "days")}
      </td>
    </tr>
  );
};

export default SearchResults;
