import React from "react";
import moment from "moment";
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
            <th scope="col" />
          </tr>
        </thead>
        {props.allBookings.map((el, index) => (
          <Rows
            key={index}
            id={el.id}
            title={el.title}
            firstName={el.firstName}
            surName={el.surname}
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
