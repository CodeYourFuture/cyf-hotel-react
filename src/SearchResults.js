import moment from "moment";
import React, { useState } from "react";

const SearchResults = prob => {
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
        {prob.results.map((Bookings, index) => {
          let checkInDate = moment(Bookings.checkInDate);
          let checkOutDate = moment(Bookings.checkOutDate);
          return (
            <tr
              key={index}
              className={selectedRow === index ? "table-active" : ""}
              onClick={() => changeColor(index)}
            >
              <td>{Bookings.id}</td>
              <td>{Bookings.title}bg-success</td>
              <td>{Bookings.firstName}</td>
              <td>{Bookings.surname}</td>
              <td>{Bookings.email}</td>
              <td>{Bookings.roomId}</td>
              <td>{Bookings.checkInDate}</td>
              <td>{Bookings.checkOutDate}</td>
              <td>{checkOutDate.diff(checkInDate, "days")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
