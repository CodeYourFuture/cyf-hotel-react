import React from "react";

const SearchResults = props => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Number Of Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(person => {
          return (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.title}</td>
              <td>{person.firstName}</td>
              <td>{person.surname}</td>
              <td>{person.email}</td>
              <td>{person.roomId}</td>
              <td>{person.checkInDate}</td>
              <td>{person.checkOutDate}</td>
              <td>
                {findTheNumberOfDays(person.checkInDate, person.checkOutDate)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// number of nights a person stayed

function findTheNumberOfDays(checkInDate, checkOutDate) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);

  const NumberOfDaysStayed = Math.round(
    Math.abs((checkIn - checkOut) / oneDay)
  );
  return NumberOfDaysStayed;
}

export default SearchResults;
