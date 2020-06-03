import React from "react";
import moment from "moment";
const Tbody = props => {
  console.log(props);
  return (
    <tbody>
      {props.bookings.map(booker => {
        let b = moment(booker.checkInDate);
        let a = moment(booker.checkOutDate);
        const daysSpent = a.diff(b, "days");
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
            <td>{daysSpent}</td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default Tbody;
