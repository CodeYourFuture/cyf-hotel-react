import React, { useState } from "react";
import moment from "moment"

const Highlighter = (props) => {
  const [clicked, setClicked] = useState(false);

  const highlight = () => {
    setClicked(!clicked);
  };

  const handleButton = () => {
    props.changeId(props.clickId);
  };

  return (
    <tr onClick={highlight} className={clicked ? "table-info" : ""}>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.firstName}</td>
      <td>{props.surname}</td>
      <td>{props.email}</td>
      <td>{props.roomId}</td>
      <td>{props.checkInDate}</td>
      <td>{props.checkOutDate}</td>
      <td>
        <button
          className="btn btn-info btn-outline-light"
          onClick={handleButton}
        >
          Show
        </button>
      </td>
      <td>
        {moment(props.checkOutDate).diff(moment(props.checkInDate), "days")}
      </td>
    </tr>
  );
};

export default Highlighter;
