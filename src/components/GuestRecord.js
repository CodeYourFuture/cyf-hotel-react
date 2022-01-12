import moment from "moment";
import React, { useState } from "react";

const GuestRecord = props => {
  console.log(props);
  const checkOut = moment(props.checkOut);
  const checkIn = moment(props.checkIn);
  const duration = moment.duration(checkOut.diff(checkIn));
  const Nights = duration.asDays();

  const [color, setColor] = useState("");

  const highlight = () => {
    if (color === "") {
      setColor("#5BC0EB");
    } else {
      setColor("");
    }
  };

  return (
    <tr style={{ backgroundColor: color }} onClick={highlight}>
      <td>{props.name}</td>
      <td>{props.title}</td>
      <td>{props.firstName}</td>
      <td>{props.surName}</td>
      <td>{props.email}</td>
      <td>{props.roomId}</td>
      <td>{props.checkIn}</td>
      <td>{props.checkOut}</td>
      <td>{Nights}</td>
      <td>
        <button onClick={props.id} className="btn btn-primary">
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default GuestRecord;
