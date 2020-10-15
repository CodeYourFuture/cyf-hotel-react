import React from "react";
// import Moment from "react-moment";

const HotelBookings = [
  `Id`,
  `Title`,
  `First name`,
  `Surname`,
  `Email`,
  `Room id`,
  `Check in date`,
  `Check out date`
];
const SearchResults = props => {
  function handleButtonClick(booking) {
    console.log(booking.title);
  }

  return (
    <div class="BookingTable">
      <table>
        <tr>
          {HotelBookings.map(element => {
            return <th>{element}</th>;
          })}
          <th>Nights</th>
        </tr>
        {props.bookings.map(item => {
          // let dOut = Moment(item.checkOutDate);
          // let dIn = Moment(item.checkInDate);
          // let Nights = dOut.diff(dIn, "days");
          return (
            <tr>
              <td> {item.id} </td>
              <td> {item.title} </td>
              <td> {item.firstName} </td>
              <td> {item.surname}</td>
              <td> {item.email}</td>
              <td> {item.roomId} </td>
              <td>{item.checkInDate}</td>
              <td>{item.checkOutDate}</td>
              <td>
                <button onClick={() => handleButtonClick(item)}>
                  Show Profile
                </button>
              </td>
              {/* <td>{Nights}</td> */}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default SearchResults;
