/* I had help with task: L2 T15 */

import React, { useState } from "react";
import FakeBookings from "./data/fakeBookings.json";
import moment from "moment";
import "./SearchResults.css";

const SearchResults = () => {
  const [selectedRow, setSelectedRow] = useState(-1);

  function rowSelected(index) {
    if (index !== selectedRow) {
      setSelectedRow(index);
    } else {
      setSelectedRow(-1);
    }
  }

  return (
    <div className="table-responsive-lg table-responsive-xl">
      <table className="table tableColor table-bordered">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Email</th>
            <th scope="col">Room no.</th>
            <th scope="col">Check-in</th>
            <th scope="col">Check-out</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {FakeBookings.map((booking, index) => (
            <tr
              key={index}
              className={`${selectedRow === index ? "selected" : ""}`}
              onClick={() => rowSelected(index)}
            >
              <td>{booking.id}</td>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>
                {moment(booking.checkOutDate).diff(booking.checkInDate, "days")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
