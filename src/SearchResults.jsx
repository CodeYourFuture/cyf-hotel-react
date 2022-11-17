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
          <th scope="col">Room Id</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out Date</th>
          <th scope="col">Number of Nights</th>
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

//the number of nights a guest is staying.

function findTheNumberOfDays(checkInDate, checkOutDate) {
  const oneDay = 24 * 60 * 60 * 1000;
  const checkIn = new Date(checkInDate);
  const CheckOut = new Date(checkOutDate);

  const NumberOfDaysStayed = Math.round(
    Math.abs((checkIn - CheckOut) / oneDay)
  );
  return NumberOfDaysStayed;
}

export default SearchResults;
