import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const Row = props => {
  const [selected, setSelected] = useState(false);
  const [pushed, setPushed] = useState(false);

  const isSelected = () => {
    setSelected(!selected);
  };

  const buttonPushed = e => {
    e.stopPropagation();
    setPushed(!pushed);
  };

  const row = props.row;
  return (
    <tr
      className={selected ? "skyBlue" : ""}
      id={`${row.id}`}
      key={row.id}
      value={row.id}
      onClick={isSelected}
    >
      <td>{row.id}</td>
      <td>{row.title}</td>
      <td>{row.firstName}</td>
      <td>{row.surname}</td>
      <td>{row.email}</td>
      <td>{row.roomId}</td>
      <td>{row.checkInDate}</td>
      <td>{row.checkOutDate}</td>
      <td>{moment(row.checkOutDate).diff(moment(row.checkInDate), "days")}</td>
      <td>
        <button className="button" id={row.id} onClick={buttonPushed}>
          Show Profile
        </button>
      </td>
      {pushed ? <CustomerProfile id={row.id} /> : null}
    </tr>
  );
};

export default Row;
