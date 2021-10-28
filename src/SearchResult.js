import React, { useState } from "react";
import moment from "moment";
import "./App.css";

const SearchResult = props => {
  const [isHighlight, setHighlight] = useState(false);
  const a = moment(props.result.checkOutDate);
  const b = moment(props.result.checkInDate);
  const difference = a.diff(b, "days");

  // when show profile button clicked
  const showId = () => {
    console.log(props.result.id);
    // as discussed in search field, take props.result.id and pass it as a parameter to showId function in searchResults.
    props.showId(props.result.id);
    // implement the displayProfile() function in searchResults.
    props.displayProfile();
  };

  const highlightRow = () => {
    setHighlight(!isHighlight);
    // setHighlight(prevIsHighlight => {
    //   if (prevIsHighlight === false) {
    //     prevIsHighlight = true;
    //   } else {
    //     prevIsHighlight = false;
    //   }
    //   return prevIsHighlight;
    // });
  };
  return (
    <tr
      className={isHighlight ? "highlight" : ""}
      key={props.keys}
      onClick={highlightRow}
    >
      <td>{props.keys}</td>
      <td>{props.result.title}</td>
      <td>{props.result.firstName}</td>
      <td>{props.result.surname}</td>
      <td>{props.result.email}</td>
      <td>{props.result.roomId}</td>
      <td>{props.result.checkInDate}</td>
      <td>{props.result.checkOutDate}</td>
      <td>{difference}</td>
      <td>
        {/* <button className="btn btn-primary" onClick={highlightRow}>
          Highlight
        </button> */}
      </td>
      <td>
        {/* create a button which when it is clicked, showId function will be implemented */}
        <button className="btn btn-primary" onClick={showId}>
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default SearchResult;
