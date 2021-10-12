import React, { useState } from "react";
import moment from "moment";
import "./App.css";

const SearchResult = props => {
  const [isHighlight, setHighlight] = useState(false);
  const highlightRow = () => {
    setHighlight(prevIsHighlight => {
      if (prevIsHighlight === false) {
        prevIsHighlight = true;
      } else {
        prevIsHighlight = false;
      }
      return prevIsHighlight;
    });

    // setColour("blue")
  };
  return (
    <tr className={isHighlight ? "highlight" : "white"}>
      <td>{props.result.id}</td>
      <td>{props.result.title}</td>
      <td>{props.result.firstName}</td>
      <td>{props.result.surname}</td>
      <td>{props.result.email}</td>
      <td>{props.result.roomId}</td>
      <td>{props.result.checkInDate}</td>
      <td>{props.result.checkOutDate}</td>
      <td>
        {moment(props.result.checkOutDate).diff(
          moment(props.result.checkInDate),
          "days"
        )}
      </td>
      <td>
        <button className="btn btn-primary" onClick={highlightRow}>
          Highlight
        </button>
      </td>
    </tr>
  );
};

export default SearchResult;
