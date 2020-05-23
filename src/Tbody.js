import React from "react";
import fakeBookings from "./fakeBookings.js";
import moment from "moment";
const Tbody = () => {
  return (
    <tbody>
      {fakeBookings.map(booker => {
        console.log(fakeBookings);

        //         var a = moment([2007, 0, 29]);
        // var b = moment([2007, 0, 28]);
        // a.diff(b, 'days') // 1
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
