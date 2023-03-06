import moment from "moment";
import React, { useState } from "react";

const SearchResult = props => {
  const [color, setColor] = useState(true);

  const colorHandler = () => {
    setColor(!color);
  };

  let a = props.result.checkOutDate;
  let b = props.result.checkInDate;

  return (
    <>
      <tr
        style={
          color
            ? { backgroundColor: "#e7c6ff" }
            : { backgroundColor: "#b8c0ff" }
        }
        onClick={colorHandler}
      >
        <td>{props.result.id}</td>
        <td>{props.result.title}</td>
        <td>{props.result.firstName}</td>
        <td>{props.result.surname}</td>
        <td>{props.result.email}</td>
        <td>{props.result.roomId}</td>
        <td>{props.result.checkInDate}</td>
        <td>{props.result.checkOutDate}</td>
        <td>{moment(a).diff(moment(b), "days")}</td>
      </tr>
    </>
  );
};

export default SearchResult;
