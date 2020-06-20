import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const Table = props => {
  const [selected, setSelected] = useState(false);
  const toggle = () => {
    setSelected(!selected);
  };
  const [clicked, setClicked] = useState(false);

  const checkIn = moment(props.data.checkOutDate);
  const checkOut = moment(props.data.checkInDate);
  return (
    <tbody>
      <tr
        key={props.data.index}
        onClick={toggle}
        className={selected ? "highlight" : null}
      >
        <th scope="row">{props.data.id}</th>

        <td>{props.data.title}</td>
        <td>{props.data.firstName}</td>
        <td>{props.data.surname}</td>
        <td>{props.data.email}</td>
        <td>{props.data.roomId}</td>
        <td>{props.data.checkInDate}</td>
        <td>{props.data.checkOutDate}</td>
        <td>{checkIn.diff(checkOut, "days")}</td>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => setClicked(!clicked)}
          >
            Show profile
          </button>
        </td>
        {clicked ? <CustomerProfile id={props.data.id} /> : null}
      </tr>
    </tbody>
  );
};

//   var a = moment(x.checkInDate);
//   var b = moment(x.checkOutDate);
//   b.diff(a, "days"); // 1

export default Table;
