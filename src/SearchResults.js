import moment from "moment";
import React, { useState } from "react";

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
  const [color, setColor] = useState("");

  const highlight = () => {
    if (color === "") {
      setColor("red");
    } else setColor("");
  };

  return (
    <div class="BookingTable">
      <table>
        <tr>
          {HotelBookings.map(element => {
            return <th>{element}</th>;
          })}
          <th>Nights</th>
        </tr>
        {props.fakeBookings.map((item, index) => {
          let dOut = moment(item.checkOutDate); // dOut = date out
          let dIn = moment(item.checkInDate); // dIn = date in
          let Nights = dOut.diff(dIn, "days");
          return (
            <tr
              id={index}
              style={{ backgroundColor: color }}
              onClick={highlight}
            >
              {console.log(index)}
              <td> {item.id} </td>
              <td> {item.title} </td>
              <td> {item.firstName} </td>
              <td> {item.surname}</td>
              <td> {item.email}</td>
              <td> {item.roomId} </td>
              <td>{item.checkInDate}</td>
              <td>{item.checkOutDate}</td>
              <td>{Nights}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default SearchResults;
