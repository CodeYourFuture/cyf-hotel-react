import React, { useState } from "react";
import moment from "moment";

const Row = props => {
  const [bool, setToggle] = useState(false);

  const toggle = () => {
    setToggle(!bool);
  };

  const date1 = moment(props.booking.checkOutDate);
  const date2 = moment(props.booking.checkInDate);

  return (
    <tbody>
      <tr onClick={toggle} className={bool ? "highlight" : null}>
        <th scope="row">{props.booking.id}</th>
        <td>{props.booking.title}</td>
        <td>{props.booking.firstName}</td>
        <td>{props.booking.surname}</td>
        <td>{props.booking.email}</td>
        <td>{props.booking.roomId}</td>
        <td>{props.booking.checkInDate}</td>
        <td>{props.booking.checkOutDate}</td>
        <td>{date1.diff(date2, "days")}</td>
        <td>
          <button
            className="btn btn-primary"
            value={props.booking.id}
            onClick={props.handleClick}
          >
            Show Profile
          </button>
        </td>
      </tr>
    </tbody>
  );
};
export default Row;
