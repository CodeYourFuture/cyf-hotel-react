import React from "react";
import fakeBookings from "./fakeBookings.js";
const Tbody = () => {
  return (Tbody = (
    <tbody>
      {fakeBookings.map(booker => {
        console.log(booker);

        <tr key={booker.id}>
          <th scope="row" />
          <td>{booker.roomId}</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>;
      })}
    </tbody>
  ));
};
export default Tbody;
