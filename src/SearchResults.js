import React, { useEffect, useState } from "react";
import moment from "moment";

const SearchResults = props => {
  const [rowClassName, setRowClassName] = useState("");

  const ChangeRowClassOnClick = () => {
    setRowClassName("table-row");
    alert(rowClassName);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((booking, index) => {
          const checkIn = moment(booking.checkOutDate);
          const checkOut = moment(booking.checkInDate);
          return (
            <tr
              key={index}
              className={rowClassName}
              onClick={ChangeRowClassOnClick}
            >
              <th scope="row">{booking.id}</th>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>{checkIn.diff(checkOut, "days")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default SearchResults;
