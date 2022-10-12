import React from "react";

const SearchResults = props => {
  return (
    <table className="table ">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(
          ({
            id,
            title,
            firstName,
            surname,
            email,
            roomId,
            checkInDate,
            checkOut
          }) => {
            return (
              <tr>
                <th key={id} scope="row">
                  {id}
                </th>
                <td key={id}>{title}</td>
                <td key={id}>{firstName}</td>
                <td key={id}>{surname}</td>
                <td key={id}>{email}</td>
                <td key={id}>{roomId}</td>
                <td key={id}>{checkInDate}</td>
                <td key={id}>{checkOut}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default SearchResults;
