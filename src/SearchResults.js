import moment from "moment";
import React from "react";

const SearchResults = props => {
  const tableRows = props.results;
  console.log(tableRows);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first Name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check-in date</th>
          <th scope="col">check-out date</th>
          <th scope="col">nights booked in</th>
        </tr>
      </thead>
      {/* {props.results} */}

      <tbody>
        {tableRows.map((result, index) => (
          <tr>
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
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default SearchResults;
