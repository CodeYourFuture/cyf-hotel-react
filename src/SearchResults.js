import React from "react";
//import moment from "react-moment";

const SearchResults = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          {props.tableHeaders.map(header => (
            <th scope="col">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => {
          // const checkOut = Date(result.checkOutDate);
          // console.log(checkOut);
          // const checkIn = Date(result.checkInDate);
          return (
            <tr key={result.id}>
              <th scope="row">{result.id}</th>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              {/* <td>{checkOut.diff(checkIn)}</td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
