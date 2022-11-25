import React from "react";
import moment from "moment";

function SearchResultsRow(props) {
  return (
    <tr>
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
