import React from "react";
import { useState } from "react";
import moment from "moment";

const DateDiff = (props) => {
  const earlierDate = props.twoDates.a.split("-").map((element) => +element);
  const laterDate = props.twoDates.b.split("-").map((element) => +element);
  // console.log(props.twoDates.a, props.twoDates.b); // EG 2017-11-21 2017-11-23
  let earlierMoment = moment(props.twoDates.a);
  let laterMoment = moment(props.twoDates.b);
  // console.log(laterMoment.diff(earlierMoment,'days')); // EG 2
  let theDiff = laterMoment.diff(earlierMoment, "days");
  return theDiff;
};

function DisplayRow(props) {
  const [highlight, setHighlight] = useState(-1);

  function handleHighlight() {
    setHighlight((c) => -c); // -1 OFF "row-not-highlighted", 1 ON "row-highlighted"
  }

  let selectClass = highlight < 0 ? "row-not-highlighted" : "row-highlighted";

  let booking = props.theBooking;

  return (
    <tr key={props.theIndex} className={selectClass} onClick={handleHighlight}>
      <th scope="col">{booking.id}</th>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>
        <DateDiff
          twoDates={{
            a: booking.checkInDate,
            b: booking.checkOutDate,
          }}
        />
      </td>
    </tr>
  );
}

export default DisplayRow;
