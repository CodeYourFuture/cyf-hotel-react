import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  const [rowColor, setRowColor] = useState(true);
  const clickRow = click => {
    click.defultColor();
    setRowColor(!rowColor);
    let colorType = click.target.parentElement;
    if (rowColor) {
      colorType.className = "highlightRow";
    } else {
      colorType.className = "unHighlightRow";
    }
  };
  return (
    <table className="table">
      <thead className="table-head">
        <tr onClick={clickRow}>
          <th scope="col">title</th>
          <th scope="col">id</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(visitor => (
          <tr scope="row">
            <th>{visitor.title}</th>
            <th>{visitor.id}</th>
            <th>{visitor.firstname}</th>
            <th>{visitor.surname}</th>
            <th>{visitor.email}</th>
            <th>{visitor.roomId}</th>
            <th>{visitor.checkInDate}</th>
            <th>{visitor.checkOutDate}</th>
            <th>
              {moment(visitor.checkOutDate).diff(visitor.checkInDate, "days")}{" "}
              days
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
