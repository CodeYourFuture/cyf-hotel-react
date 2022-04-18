import React from "react";

const SearchResults = ({ results }) => {
  console.log(results);
  return (
    <div className="table">
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check-in Date</th>
          <th>Check-out Date</th>
          <th># of Nights</th>
        </tr>
        {results.map((info, key) => {
          return (
            <tr key={key}>
              <td>{info.id}</td>
              <td>{info.title}</td>
              <td>{info.firstName}</td>
              <td>{info.surname}</td>
              <td>{info.email}</td>
              <td>{info.roomId}</td>
              <td>{info.checkInDate}</td>
              <td>{info.checkOutDate}</td>
              {/* <td>{info.checkInDate.diff(info.checkOutDate, 'days')}</td> */}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default SearchResults;
