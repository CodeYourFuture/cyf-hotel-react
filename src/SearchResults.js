import React from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  return (
    <table className="results">
      <thead>
        <tr>
          <th scope="col" className="heading">
            Id
          </th>
          <th scope="col" className="heading">
            Title
          </th>
          <th scope="col" className="heading">
            First name
          </th>
          <th scope="col" className="heading">
            Surname
          </th>
          <th scope="col" className="heading">
            Email
          </th>
          <th scope="col" className="heading">
            Room id
          </th>
          <th scope="col" className="heading">
            Check in date
          </th>
          <th scope="col" className="heading">
            Check out date
          </th>
          <th scope="col" className="heading">
            Number of nights
          </th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.id}>
            <td>{result.id}</td>
            <td>{result.title}</td>
            <td>{result.firstName}</td>
            <td>{result.surname}</td>
            <td>{result.email}</td>
            <td>{result.roomId}</td>
            <td>{moment(result.checkInDate).format("MM DD YYYY")}</td>
            <td>{moment(result.checkOutDate).format("MM DD YYYY")}</td>
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


