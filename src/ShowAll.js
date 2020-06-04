import React, { useState } from "react";
import Nights from "./Nights";
const ShowAll = props => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="table">
      <table>
        <tr>
          <th />
          <th> Title </th>
          <th> First Name </th>
          <th> SureName </th>
          <th> Email </th>
          <th> Room Number </th>
          <th> CheckInDate </th>
          <th> CheckOutDate </th>
          <th> Nights </th>
        </tr>
        {props.data.map((booking, index) => {
          return (
            <tr
              onClick={() => setClicked(!clicked)}
              className={clicked ? "bg-warning" : "show-all"}
            >
              <th scope="row" key={index}>
                {booking.id}
              </th>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>
                <Nights
                  timeline={booking.checkInDate}
                  timeout={booking.checkOutDate}
                />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ShowAll;
