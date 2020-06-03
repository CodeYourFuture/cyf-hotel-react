import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  const { results } = props;

  const [isHighlighted, setIsHighlighted] = useState({ complited: false });

  // const toggleHighlight = (resultId) => {
  //   const eachBooking = results.map((booking) =>
  //     booking.id === resultId ? (className = "highlited") : null
  //   );
  // };

  const toggleHighlight = resultId => {
    results.map(booking =>
      booking.id === resultId
        ? { ...isHighlighted, completed: !isHighlighted }
        : null
    );
  };

  return (
    <table className="table table-sm">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Booking length</th>
        </tr>
      </thead>
      <tbody>
        {results.map((element, index) => (
          <tr
            key={index}
            onClick={e => toggleHighlight(element.id)}
            className={isHighlighted === element.id ? "highlight" : null}
          >
            <td>{element.title}</td>
            <td>{element.firstName}</td>
            <td>{element.surname}</td>
            <td>{element.email}</td>
            <td>{element.roomId}</td>
            <td>{element.checkInDate}</td>
            <td>{element.checkOutDate}</td>
            <td>
              {moment(element.checkInDate).diff(
                moment(element.checkOutDate),
                "days"
              ) * -1}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
