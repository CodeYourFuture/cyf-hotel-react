import React from "react";
import moment from "moment";

const obj = {a: 1, b: 2}

const {a, b } = obj

const SearchResults = ({results,  list}) => {
  // const ourObject = props.results; // or to put {results} into curly braces in the parameter instead of writing this line
  return (
    <table className="table">
      <thead>
        results
        <tr>
          results
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr scope="row" key={result.id}>
            <td>{result.id}</td>
            <td>{result.title}</td>
            <td>{result.firstName}</td>
            <td>{result.surname}</td>
            <td>{result.email}</td>
            <td>{result.roomId}</td>
            <td>{result.checkInDate}</td>
            <td>{result.checkOutDate}</td>
            {/* <td>{moment(result.checkInDate).format("MM DD YYYY")}</td>
            <td>{moment(result.checkOutDate).format("MM DD YYYY")}</td>  */}
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
