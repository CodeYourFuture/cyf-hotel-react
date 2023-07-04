import React, { useState } from "react";
import moment from "moment";

const Row = (props) => {
  const [highlight, setHighlight] = useState(false);
  const toggleHighlight = () => {
    setHighlight(!highlight);
  };
  return (
    <tr
      onClick={() => toggleHighlight()}
      style={{
        backgroundColor: highlight ? "yellow" : "",
      }}
      key={props.index}
    >
      <td>{props.result.id}</td>
      <td>{props.result.title}</td>
      <td>{props.result.firstName}</td>
      <td>{props.result.surname}</td>
      <td>{props.result.email}</td>
      <td>{props.result.roomId}</td>
      <td>{props.result.checkInDate}</td>
      <td>{props.result.checkOutDate}</td>
      <td>{props.days}</td>
    </tr>
  );
};
const SearchResultsOther = (props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result, index) => {

          const a = moment(result.checkOutDate);
          const b = moment(result.checkInDate);
          const days = a.diff(b, "days"); // 1
          return (
              <Row index={index} result={result} />
          ) 
        })}
      </tbody>
    </table>
  );
};

export default SearchResultsOther;
