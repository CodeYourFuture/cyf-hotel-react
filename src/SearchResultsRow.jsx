import React, { useState } from "react";
import moment from "moment";
import "/home/codeyourfuture/Documents/React/W-1/cyf-hotel-react/src/searchresrow.css";

function SearchResultsRow(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <tr className={click ? "clicked" : "notclicked"} onClick={handleClick}>
      <td>{props.dt.id}</td>
      <td>{props.dt.title}</td>
      <td>{props.dt.firstName}</td>
      <td>{props.dt.surname}</td>
      <td>{props.dt.email}</td>
      <td>{props.dt.roomId}</td>
      <td>{props.dt.checkInDate}</td>
      <td>{props.dt.checkOutDate}</td>
      <td>
        {moment(props.dt.checkOutDate).diff(props.dt.checkInDate, "days")}
      </td>
    </tr>
  );
}

export default SearchResultsRow;