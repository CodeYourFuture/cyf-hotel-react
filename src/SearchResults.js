import React, { useState } from "react";
import moment from "moment";
import Row from "./Row";
import "./App.css";

let tableHead = {
  id: "id",
  title: "title",
  firstName: "first name",
  surname: "sure name",
  email: "email",
  roomId: "room id",
  checkInDate: "check in date",
  checkOutDate: "check out date",
  nights: "nights"
};

const SearchResults = props => {
  const [selectedRow, setSelectedRow] = useState(null);
  return (
    <table className="table">
      <thead className="table-head">
        <tr>
          <td>id</td>
          <td>title</td>
          <td>firstName</td>
          <td>surName</td>
          <td>email</td>
          <td>roomId</td>
          <td>checkInDate</td>
          <td>checkOutDate</td>
          <td>nights</td>
        </tr>
      </thead>
      <tbody className="table-body table-striped">
        {props.results.map(result => {
          return (
            <Row
              row={result}
              key={result.id}
              row1={getDuration(result.checkOutDate, result.checkInDate)}
              isSelected={result.id === selectedRow}
              setSelectedRow={setSelectedRow}
            />
          );
        })}
      </tbody>
    </table>
  );
};

function getDuration(start, end) {
  let duration = moment.duration(moment(start).diff(moment(end)));
  let days = duration.asDays();
  return Math.round(days);
}

export default SearchResults;
