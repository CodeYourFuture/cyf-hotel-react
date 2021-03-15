import React from "react";

const SearchResults = props => {
  const headers = [
    "id",
    "title",
    "first name",
    "surname",
    "email",
    "room id",
    "check in date",
    "check out date",
    "number of nights"
  ];
  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map(header => (
            <th scope="col">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => {
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
              {/* <td>{moment(result.checkInDate).diff(moment(result.checkOutDate))}</td>  */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
