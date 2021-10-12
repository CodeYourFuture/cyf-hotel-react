import React from "react";

function SearchResults(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> id</th>
            <th>title</th>
            <th> first name</th>
            <th> surname</th>
            <th> email</th>
            <th> room id</th>
            <th> check in date</th>
            <th> check out date</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result, index) => {
            return (
              <tr key={index}>
                <td>{result.id}</td>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
