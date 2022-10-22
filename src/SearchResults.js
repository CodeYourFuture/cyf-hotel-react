import React, { useState } from "react";
import moment from "moment";

const tableHead = [
  "id",
  "title",
  "first name",
  "surname",
  "email",
  "room id",
  "check in date",
  "check out date",
  "nigths"
];

const SearchResults = props => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {tableHead.map(head => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.results.map(data => (
            <TableRow key={data.id} bookingDetail={data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableRow = props => {
  const [rowHighlight, setRowHighlight] = useState(false);
  const [rowStyle, setRowStyle] = useState("bg-success");

  const highlight = () => setRowHighlight(!rowHighlight);

  return (
    <tr onClick={highlight} className={rowHighlight ? rowStyle : "bg-row"}>
      <td>{props.bookingDetail.id}</td>
      <td>{props.bookingDetail.title}</td>
      <td>{props.bookingDetail.firstName}</td>
      <td>{props.bookingDetail.surname}</td>
      <td>{props.bookingDetail.email}</td>
      <td>{props.bookingDetail.roomId}</td>
      <td>{props.bookingDetail.checkInDate}</td>
      <td>{props.bookingDetail.checkOutDate}</td>
      <td>
        {moment(props.bookingDetail.checkOutDate).diff(
          props.bookingDetail.checkInDate,
          "days"
        )}
      </td>
    </tr>
  );
};

export default SearchResults;
