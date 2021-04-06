import React, { useState } from "react";
import moment from "moment";

const SearchResult = props => {
  var checkOut = moment(props.booking.checkOutDate);
  var checkIn = moment(props.booking.checkInDate);
  const days = checkOut.diff(checkIn, "days"); // 86400000

  const [highlightColor, setHighlightColor] = useState("");
  const changeHighlightColor = () => {
    if (highlightColor === "") {
      return setHighlightColor("purple");
    }
    setHighlightColor("");
  };

  return (
    <tr onClick={changeHighlightColor} className={highlightColor}>
      <td>{props.booking.id}</td>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>{days}</td>
    </tr>
  );
};

export default SearchResult;

//   ** Instructions:** Within the`<SearchResults />` component or its child components, add an`onClick`
// handler to each row in the table( hint: on the`<tr>` element ).When clicked, the row is "selected"
// and highlighted with a different colour.When clicked again, the row is unselected and the coloured
// highlighting is removed.

// ** Hint:** Use a new state variable for each row to record if the row is selected or not, and use
// this value to set a class to the`className` prop of the row.

// ** Test:** Verify that each row of your table can be highlighted( on and off ) independently
// when being clicked.
