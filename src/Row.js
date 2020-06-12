import React, { useState } from "react";
import moment from "moment";

const Row = ({ setSelected, booking }) => {
  const [toogle, setToogle] = useState(false);

  const ToogleChange = () => {
    setToogle(!toogle);
  };
  const handleSelectedId = event => {
    setSelected(event);
  };

  const date1 = moment(booking.checkOutDate);
  const date2 = moment(booking.checkInDate);
  return (
    <tbody>
      <tr onClick={ToogleChange} className={toogle ? "chosenRow" : null}>
        <th scope="row">{booking.id}</th>
        <td>{booking.title}</td>
        <td>{booking.firstName}</td>
        <td>{booking.surname}</td>
        <td>{booking.email}</td>
        <td>{booking.roomId}</td>
        <td>{booking.checkInDate}</td>
        <td>{booking.checkOutDate}</td>
        <td>{date1.diff(date2, "days")}</td>
        <td>
          <button
            className="btn btn-primary "
            onClick={() => handleSelectedId(booking.id)}
          >
            Show profile
          </button>
        </td>
      </tr>
    </tbody>
  );
};
export default Row;
