import React, { useState } from "react";
import moment from "moment";

const Table = props => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleButton = () => {
    props.changeId(props.clickId);
  };

  return (
    <tr onClick={handleClick} className={clicked ? "table-primary" : ""}>
      <td>{props.title}</td>
      <td>{props.firstName}</td>
      <td>{props.surname}</td>
      <td>{props.email}</td>
      <td>{props.roomId}</td>
      <td>{props.checkInDate}</td>
      <td>{props.checkOutDate}</td>
      <td>
        {moment(props.checkOutDate).diff(moment(props.checkInDate), "days")}
      </td>
      <td>
        <button className="btn btn-primary" onClick={handleButton}>
          Show profile
        </button>
      </td>
    </tr>
  );
};

export default Table;
