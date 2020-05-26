import React from "react";
import moment from "moment";

const Rows = props => {
  return (
    <tbody>
      {props.fakeData.map((booking, index) => {
        const checkIn = moment(booking.checkInDate);
        const checkOut = moment(booking.checkOutDate);
        return (
          <tr key={index}>
            <th scope="row">{booking.id}</th>
            <td>{booking.title}</td>
            <td>{booking.firstName}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td>{booking.checkOutDate}</td>
            <td className="booking-days">{checkOut.diff(checkIn, "days")}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Rows;
