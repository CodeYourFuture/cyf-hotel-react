import React, { useState } from "react";
import moment from "moment";

//import SearchButton from "./SearchButton";

const SearchResults = props => {
  const highlight = {
    backgroundColor: "grey"
  };

  const [colour, setColour] = useState(highlight.backgroundColor);
  console.log(colour);
  const highlightRow = e => {
    return console.log(e.target.id);
    // setColour("blue")
  };
  return (
    <div>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room Id</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>No. Of Nights</th>
          </tr>
        </thead>
        <tbody>
          {/* 
       <tr>
          <td>1</td>
          <td>Mr</td>
          <td>Abadi</td>
          <td>Salman</td>
          <td>a.s@gmail.com</td>
          <td>005</td>
          <td>15:30</td>
          <td>17:00</td>
        </tr>
       */}
          {props.results.map((result, index) => (
            <tr id={index} style={highlightRow()}>
              <td>{result.id}</td>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>
                {moment(result.checkOutDate).diff(
                  moment(result.checkInDate),
                  "days"
                )}
              </td>
              <td>
                <button
                  id={index}
                  className="btn btn-primary"
                  onClick={highlightRow}
                >
                  Highlight
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*{props.children}*/}
    </div>
  );
};
export default SearchResults;
