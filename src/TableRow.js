import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const TableRow = props => {
  function clicked(event) {
    event.preventDefault();
    props.handleClick(props.item.id);
  }

  const [hasClick, setHasClick] = useState(false);
  const tableData = [
    props.item.id,
    props.item.title,
    props.item.firstName,
    props.item.surname,
    props.item.email,
    props.item.roomId,
    props.item.checkInDate,
    props.item.checkOutDate,
    moment(props.item.checkOutDate).diff(props.item.checkInDate, "days")
  ];
  return (
    <tr
      id="table-row"
      className={hasClick ? "tr-selected" : null}
      onClick={() => {
        setHasClick(!hasClick);
      }}
    >
      <th scope="row" />
      {tableData.map((item, index) => {
        return <td key={index}>{item}</td>;
      })}
      <td>
        <button className="btn btn-primary" onClick={clicked}>
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
