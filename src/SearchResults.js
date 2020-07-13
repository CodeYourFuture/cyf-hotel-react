import React from "react";
import moment from "moment";
const SearchResults = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="">id</th>
          <th scope="col">title</th>
          <th scope="col">firstName</th>
          <th scope="col">surname</th>
          <th scope="">email</th>
          <th scope="col">roomId</th>
          <th scope="col">checkInDate</th>
          <th scope="col">checkOutDate</th>
          <th scope="col">number of Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((field, index) => {
          const nightsSpent = moment(field.checkOutDate).diff(
            field.checkInDate,
            "days"
          );
          return (
            <tr key={index}>
              <th scope="row">{field.id}</th>
              <td>{field.title}</td>
              <td>{field.firstName}</td>
              <td>{field.lastName}</td>
              <td>{field.email}</td>
              <td>{field.roomId}</td>
              <td>{field.checkInDate}</td>
              <td>{field.checkOutDate}</td>
              <td>{nightsSpent}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
  // };
};

export default SearchResults;
