import React from "react";
import CustomerProfile from "./CustomerProfile";
import SearchResultRow from "./SearchResultRow";

const SearchResults = ({ bookings }) => {
  //const [id, setId] = useState(null);

  const headings = [
    "Id",
    "Title",
    "First Name",
    "Surname",
    "Email",
    "room Id",
    "Check-In",
    "Check-Out",
    "Night"
  ];

  //function showProfile(event) {
  //setId(event.target.value);
  // }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th scope="col" key={index}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking, index) => {
            return (
              <SearchResultRow
                key={index}
                id={booking.id}
                title={booking.title}
                firstName={booking.firstName}
                surname={booking.surname}
                email={booking.email}
                roomId={booking.roomId}
                checkInDate={booking.checkInDate}
                checkOutDate={booking.checkOutDate}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
