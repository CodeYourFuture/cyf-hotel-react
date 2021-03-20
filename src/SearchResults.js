import moment from "moment";
import React from "react";
import FakeBooking from "./data/fakeBookings.json";
import Rows from "./Rows";
function SearchResults(props) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">FirstName</th>
            <th scope="col">SurName</th>
            <th scope="col">Email</th>
            <th scope="col">RoomId</th>
            <th scope="col">check-in date</th>
            <th scope="col">check-out date</th>
            <th scope="col">number-of-nights</th>
          </tr>
        </thead>
        {FakeBooking.map((el, index) => (
          <Rows
            key={index}
            id={el.id}
            title={el.title}
            firstName={el.firstName}
            surName={el.surName}
            email={el.email}
            roomId={el.roomId}
            checkInDate={el.checkInDate}
            checkOutDate={el.checkOutDate}
            numberOfNights={moment(el.checkOutDate).diff(
              moment(el.checkInDate),
              "days"
            )}
          />
        ))}
      </table>
    </>
  );
}
export default SearchResults;
