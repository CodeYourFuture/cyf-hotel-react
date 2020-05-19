import React from "react";
import FakeBookings from "../../data/fakeBookings.json";

function Rows() {
  return (
    <tbody>
      {FakeBookings.map((booking, index) => {
        return (
          <tr key={index}>
            <th scope="row" key={index + 18}>
              {booking.id}
            </th>
            <td key={index + 11}>{booking.title}</td>
            <td key={index + 12}>{booking.firstName}</td>
            <td key={index + 13}>{booking.surname}</td>
            <td key={index + 14}>{booking.email}</td>
            <td key={index + 15}>{booking.roomId}</td>
            <td key={index + 16}>{booking.checkInDate}</td>
            <td key={index + 17}>{booking.checkOutDate}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default Rows;
