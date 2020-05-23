import React from "react";
import fakeBookings from "./fakeBookings.js";
const Tbody = () => {
  return (
    <tbody>
      {fakeBookings.map(booker => {
        console.log(fakeBookings);
        return (
          <tr key={booker.id}>
            <td>{booker.id}</td>
            <td>{booker.title}</td>
            <td>{booker.firstName}</td>
            <td>{booker.surname}</td>
            <td>{booker.email}</td>
            <td>{booker.roomId}</td>
            <td>{booker.checkInDate}</td>
            <td>{booker.checkOutDate}</td>
            <td>{booker.checkOutDate}</td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default Tbody;
