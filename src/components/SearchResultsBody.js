import React from "react";
import fakeBookings from "../data/fakeBookings.json";
import moment from "moment";
import { useState } from "react";

const SearchResultsBody = () => {
  const [selectedRow, setSelectedRow] = useState([]);

  function Highlighter(id) {
    if (selectedRow.includes(id)) {
      console.log(id);
      setSelectedRow(selectedRow.filter((el) => el !== id));
    } else {
      setSelectedRow(selectedRow.concat(id));
    }
  }
  return (
    <tbody>
      {fakeBookings.map((booking) => {
        console.log(booking.id);
        return (
          <tr
            key={booking.id}
            style={
              selectedRow.includes(booking.id)
                ? { backgroundColor: "#f1f2f6" }
                : { backgroundColor: "#fff" }
            }
            onClick={() => Highlighter(booking.id)}
          >
            <th scope="row">{booking.id}</th>
            <td>{booking.title}</td>
            <td>{booking.firstName}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td>{booking.checkOutDate}</td>
            <td>
              {moment(booking.checkOutDate).diff(
                moment(booking.checkInDate),
                "days"
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default SearchResultsBody;
