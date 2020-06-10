import React, { useState } from "react";
import moment from "moment";

const Row = props => {
  const [toogle, setToogle] = useState(false);

  const ToogleChange = () => {
    setToogle(!toogle);
  };
  const handleSelectedId = event => {
    props.setSelected(event.target.value);
    console.log(event.target.value);
  };

  const date1 = moment(props.booking.checkOutDate);
  const date2 = moment(props.booking.checkInDate);
  return (
    <tbody>
      <tr onClick={ToogleChange} className={toogle ? "chosenRow" : null}>
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
          <button value={props.booking.id} onClick={handleSelectedId}>
            Show profile
          </button>
        </td>
      </tr>
    </tbody>
  );
};
export default Row;
