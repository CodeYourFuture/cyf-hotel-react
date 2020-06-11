import React, { useState } from "react";
import moment from "moment";
const Tbody = props => {
  const [selected, setSelected] = useState([]);
  const changeSelected = bookerId => {
    if (selected.includes(bookerId)) {
      setSelected(selected.filter(selectedId => selectedId !== bookerId));
    } else {
      setSelected(selected.concat(bookerId));
    }
  };
  return (
    <tbody>
      {props.bookings.map(booker => {
        let b = moment(booker.checkInDate);
        let a = moment(booker.checkOutDate);
        const daysSpent = a.diff(b, "days");
        return (
          <tr
            className={
              selected.includes(booker.id) ? "selected cursor" : "cursor"
            }
            key={booker.id}
            onClick={() => changeSelected(booker.id)}
          >
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
