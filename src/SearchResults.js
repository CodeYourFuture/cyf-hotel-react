import moment from "moment";
import React, { useState } from "react";

const SearchResults = props => {
  const [selectedRow, setSelectedRow] = useState("-1");

  const changeColor = index => {
    setSelectedRow(selectedRow === index ? "-1" : index);
  };

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">id</th>
          <th>title</th>
          <th>first name</th>
          <th>surname</th>
          <th>email</th>
          <th>room id</th>
          <th>check in date</th>
          <th>check out date</th>
          <th>nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((booking, index) => {
          let checkInDate = moment(booking.checkInDate);
          let checkOutDate = moment(booking.checkOutDate);
          return (
            <tr
              key={index}
              className={selectedRow === index ? "table-active" : ""}
              onClick={() => changeColor(index)}
            >
              <td>{booking.id}</td>
              <td>{booking.title}bg-success</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>{checkOutDate.diff(checkInDate, "days")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
